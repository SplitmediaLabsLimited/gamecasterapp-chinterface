const isEnabled = () =>
  typeof window !== 'undefined' && window.DEBUGLOG === true;

const serialize = (value) => {
  if (value === undefined) {
    return 'undefined';
  }

  if (value === null) {
    return 'null';
  }

  if (typeof value === 'string') {
    return value;
  }

  if (value instanceof Error) {
    return JSON.stringify({
      name: value.name,
      message: value.message,
      code: value.code,
    });
  }

  try {
    return JSON.stringify(value);
  } catch (err) {
    return String(value);
  }
};

const log = (...args) => {
  if (!isEnabled()) {
    return;
  }

  try {
    console.log('[CHINTERFACE]', ...args.map(serialize));
  } catch (err) {
    console.log('[CHINTERFACE] ERROR LOGGING');
    console.error(err);
  }
};

log.enable = () => {
  if (typeof window !== 'undefined') {
    window.DEBUGLOG = true;
  }
};

log.disable = () => {
  if (typeof window !== 'undefined') {
    window.DEBUGLOG = false;
  }
};

log.redactToken = (token) => {
  if (!token || typeof token !== 'string') {
    return token;
  }

  if (token.length <= 12) {
    return '***';
  }

  return `${token.slice(0, 6)}...${token.slice(-4)} (${token.length} chars)`;
};

log.trace = (scope, event, detail) => {
  if (detail === undefined) {
    log(`[${scope} ${event}]`);
    return;
  }

  log(`[${scope} ${event}]`, detail);
};

export default log;
