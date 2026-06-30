const SNIPPET_TYPE_MAP = {
  0: 'invalidType',
  1: 'textMessageEvent',
  2: 'tombstone',
  3: 'fanFundingEvent',
  4: 'chatEndedEvent',
  5: 'sponsorOnlyModeStartedEvent',
  6: 'sponsorOnlyModeEndedEvent',
  7: 'newSponsorEvent',
  8: 'messageDeletedEvent',
  9: 'messageRetractedEvent',
  10: 'userBannedEvent',
  15: 'superChatEvent',
  16: 'superStickerEvent',
  17: 'memberMilestoneChatEvent',
  18: 'membershipGiftingEvent',
  19: 'giftMembershipReceivedEvent',
  20: 'pollEvent',
  21: 'giftEvent',
  INVALID_TYPE: 'invalidType',
  TEXT_MESSAGE_EVENT: 'textMessageEvent',
  TOMBSTONE: 'tombstone',
  FAN_FUNDING_EVENT: 'fanFundingEvent',
  CHAT_ENDED_EVENT: 'chatEndedEvent',
  SPONSOR_ONLY_MODE_STARTED_EVENT: 'sponsorOnlyModeStartedEvent',
  SPONSOR_ONLY_MODE_ENDED_EVENT: 'sponsorOnlyModeEndedEvent',
  NEW_SPONSOR_EVENT: 'newSponsorEvent',
  MESSAGE_DELETED_EVENT: 'messageDeletedEvent',
  MESSAGE_RETRACTED_EVENT: 'messageRetractedEvent',
  USER_BANNED_EVENT: 'userBannedEvent',
  SUPER_CHAT_EVENT: 'superChatEvent',
  SUPER_STICKER_EVENT: 'superStickerEvent',
  MEMBER_MILESTONE_CHAT_EVENT: 'memberMilestoneChatEvent',
  MEMBERSHIP_GIFTING_EVENT: 'membershipGiftingEvent',
  GIFT_MEMBERSHIP_RECEIVED_EVENT: 'giftMembershipReceivedEvent',
  POLL_EVENT: 'pollEvent',
  GIFT_EVENT: 'giftEvent',
};

function mapSnippetType(type) {
  if (type === undefined || type === null) {
    return 'textMessageEvent';
  }

  return SNIPPET_TYPE_MAP[type] || String(type);
}

function mapAuthorDetails(authorDetails = {}) {
  return {
    channelId: authorDetails.channelId || authorDetails.channel_id || '',
    channelUrl: authorDetails.channelUrl || authorDetails.channel_url || '',
    displayName: authorDetails.displayName || authorDetails.display_name || '',
    profileImageUrl:
      authorDetails.profileImageUrl || authorDetails.profile_image_url || '',
    isVerified: Boolean(
      authorDetails.isVerified ?? authorDetails.is_verified ?? false
    ),
    isChatOwner: Boolean(
      authorDetails.isChatOwner ?? authorDetails.is_chat_owner ?? false
    ),
    isChatSponsor: Boolean(
      authorDetails.isChatSponsor ?? authorDetails.is_chat_sponsor ?? false
    ),
    isChatModerator: Boolean(
      authorDetails.isChatModerator ?? authorDetails.is_chat_moderator ?? false
    ),
  };
}

function mapChannelProfileDetails(details = {}) {
  return {
    channelId: details.channelId || details.channel_id || '',
    channelUrl: details.channelUrl || details.channel_url || '',
    displayName: details.displayName || details.display_name || '',
    profileImageUrl: details.profileImageUrl || details.profile_image_url || '',
  };
}

function mapSnippet(snippet = {}) {
  const mapped = {
    type: mapSnippetType(snippet.type),
    liveChatId: snippet.liveChatId || snippet.live_chat_id || '',
    authorChannelId:
      snippet.authorChannelId || snippet.author_channel_id || '',
    publishedAt: snippet.publishedAt || snippet.published_at || '',
    hasDisplayContent: Boolean(
      snippet.hasDisplayContent ?? snippet.has_display_content ?? false
    ),
    displayMessage: snippet.displayMessage || snippet.display_message || '',
  };

  const superChatDetails =
    snippet.superChatDetails || snippet.super_chat_details;
  if (superChatDetails) {
    mapped.superChatDetails = {
      amountMicros:
        superChatDetails.amountMicros || superChatDetails.amount_micros || '0',
      currency: superChatDetails.currency || '',
      amountDisplayString:
        superChatDetails.amountDisplayString ||
        superChatDetails.amount_display_string ||
        '',
      userComment:
        superChatDetails.userComment || superChatDetails.user_comment || '',
      tier: superChatDetails.tier || 0,
    };
  }

  const messageDeletedDetails =
    snippet.messageDeletedDetails || snippet.message_deleted_details;
  if (messageDeletedDetails) {
    mapped.messageDeletedDetails = {
      deletedMessageId:
        messageDeletedDetails.deletedMessageId ||
        messageDeletedDetails.deleted_message_id ||
        '',
    };
  }

  const userBannedDetails =
    snippet.userBannedDetails || snippet.user_banned_details;
  if (userBannedDetails) {
    mapped.userBannedDetails = {
      bannedUserDetails: mapChannelProfileDetails(
        userBannedDetails.bannedUserDetails ||
          userBannedDetails.banned_user_details ||
          {}
      ),
      banType: userBannedDetails.banType || userBannedDetails.ban_type || '',
      banDurationSeconds:
        userBannedDetails.banDurationSeconds ||
        userBannedDetails.ban_duration_seconds ||
        0,
    };
  }

  const textMessageDetails =
    snippet.textMessageDetails || snippet.text_message_details;
  if (textMessageDetails) {
    mapped.textMessageDetails = {
      messageText:
        textMessageDetails.messageText ||
        textMessageDetails.message_text ||
        '',
    };
  }

  return mapped;
}

export function mapProtoMessageToRest(message = {}) {
  return {
    id: message.id || '',
    snippet: mapSnippet(message.snippet || {}),
    authorDetails: mapAuthorDetails(message.authorDetails || message.author_details),
  };
}

export function mapProtoMessagesToRest(items = []) {
  return items.map(mapProtoMessageToRest);
}
