export function mapSuperChatAuthor(authorDetails = {}) {
  return {
    channelId: authorDetails.channelId || '',
    channelUrl: authorDetails.channelUrl || '',
    displayName: authorDetails.displayName || '',
    profileImageUrl: authorDetails.profileImageUrl || '',
    isVerified: Boolean(authorDetails.isVerified),
    isChatModerator: Boolean(authorDetails.isChatModerator),
    isChatOwner: Boolean(authorDetails.isChatOwner),
    isChatSponsor: Boolean(authorDetails.isChatSponsor),
  };
}

function mapSuperStickerMetadata(metadata = {}) {
  return {
    stickerId: metadata.stickerId || '',
    altText: metadata.altText || metadata.altTextLanguage || '',
    language: metadata.language || metadata.altTextLanguage || '',
  };
}

export function buildSuperChatPayload({ id, snippet = {}, authorDetails = {} }) {
  const author = mapSuperChatAuthor(authorDetails);
  const publishedAt = snippet.publishedAt || '';

  if (snippet.type === 'superStickerEvent') {
    const details = snippet.superStickerDetails || {};
    const metadata = details.superStickerMetadata || {};

    return {
      id,
      publishedAt,
      type: 'superStickerEvent',
      author,
      superChat: {
        amountMicros: details.amountMicros || '0',
        currency: details.currency || '',
        amountDisplayString: details.amountDisplayString || '',
        userComment: details.userComment || '',
        tier: details.tier || 0,
        isSuperSticker: true,
        superStickerMetadata: mapSuperStickerMetadata(metadata),
      },
    };
  }

  const details = snippet.superChatDetails || {};

  return {
    id,
    publishedAt,
    type: 'superChatEvent',
    author,
    superChat: {
      amountMicros: details.amountMicros || '0',
      currency: details.currency || '',
      amountDisplayString: details.amountDisplayString || '',
      userComment: details.userComment || '',
      tier: details.tier || 0,
    },
  };
}
