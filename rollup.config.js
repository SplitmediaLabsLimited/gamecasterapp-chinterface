/* eslint-disable flowtype/require-valid-file-annotation, no-console, import/extensions */

import _ from 'lodash';

import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import inject from 'rollup-plugin-inject';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import minify from 'rollup-plugin-babel-minify';

import pkg from './package.json';

const processShim = '\0process-shim';

const prod = process.env.PRODUCTION;
const esbundle = process.env.ESBUNDLE;
const env = prod ? 'prod' : esbundle ? 'es' : '';

if (env === 'prod') {
    console.log('Creating production UMD (browser) bundle...');
} else if (env === 'es') {
    console.log('Creating ES modules bundle...');
} else {
    console.log('Creating CJS bundle');
}

const plugins = [
    // Unlike Webpack and Browserify, Rollup doesn't automatically shim Node
    // builtins like `process`. This ad-hoc plugin creates a 'virtual module'
    // which includes a shim containing just the parts the bundle needs.
    {
        resolveId(importee) {
            if (importee === processShim) return importee;
            return null;
        },
        load(id) {
            if (id === processShim) return 'export default { argv: [], env: {} }';
            return null;
        }
    },

    nodeResolve(),

    babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: [
            [
                'env',
                {
                    targets: { browsers: ['last 2 versions', 'ie 11'], node: '6.10' },
                    modules: false,
                    loose: true
                }
            ]
        ],
        plugins: [
            'transform-flow-strip-types',
            'external-helpers',
            'transform-object-rest-spread',
            'transform-class-properties'
        ]
    }),

    commonjs({
        ignoreGlobal: true
    }),

    replace({
        'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development')
    }),

    inject({
        process: processShim
    }),

    json(),

    minify({
        comments: false
    })
];

function getTarget(env, moduleName) {
    if (env === 'prod') {
        return [{ dest: `dist/${moduleName}.min.js`, format: 'umd' }];
    } else if (env === 'es') {
        return [{ dest: `dist/${moduleName}.es.js`, format: 'es' }];
    }
    return [{ dest: `dist/${moduleName}.common.js`, format: 'cjs' }];
}

export default {
    entry: 'src/chat.js',
    moduleName: _.capitalize(pkg.name),
    external: Object.keys(pkg.peerDependencies),
    exports: 'default',
    targets: getTarget(env, pkg.name),
    plugins,
    globals: {
        '@cvpcasada/tmi.js': 'tmi',
        'tmi.js': 'tmi',
        'axios': 'axios',
    },
    sourceMap: true
};
