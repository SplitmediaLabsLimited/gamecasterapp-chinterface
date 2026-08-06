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

  const superStickerDetails =
    snippet.superStickerDetails || snippet.super_sticker_details;
  if (superStickerDetails) {
    const metadata =
      superStickerDetails.superStickerMetadata ||
      superStickerDetails.super_sticker_metadata ||
      {};

    mapped.superStickerDetails = {
      amountMicros:
        superStickerDetails.amountMicros ||
        superStickerDetails.amount_micros ||
        '0',
      currency: superStickerDetails.currency || '',
      amountDisplayString:
        superStickerDetails.amountDisplayString ||
        superStickerDetails.amount_display_string ||
        '',
      tier: superStickerDetails.tier || 0,
      superStickerMetadata: {
        stickerId: metadata.stickerId || metadata.sticker_id || '',
        altText: metadata.altText || metadata.alt_text || '',
        language: metadata.language || metadata.alt_text_language || '',
      },
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

  const messageRetractedDetails =
    snippet.messageRetractedDetails || snippet.message_retracted_details;
  if (messageRetractedDetails) {
    mapped.messageRetractedDetails = {
      retractedMessageId:
        messageRetractedDetails.retractedMessageId ||
        messageRetractedDetails.retracted_message_id ||
        '',
    };
  }

  const newSponsorDetails =
    snippet.newSponsorDetails || snippet.new_sponsor_details;
  if (newSponsorDetails) {
    mapped.newSponsorDetails = {
      memberLevelName:
        newSponsorDetails.memberLevelName ||
        newSponsorDetails.member_level_name ||
        '',
      isUpgrade: Boolean(
        newSponsorDetails.isUpgrade ?? newSponsorDetails.is_upgrade ?? false
      ),
    };
  }

  const memberMilestoneChatDetails =
    snippet.memberMilestoneChatDetails ||
    snippet.member_milestone_chat_details;
  if (memberMilestoneChatDetails) {
    mapped.memberMilestoneChatDetails = {
      memberLevelName:
        memberMilestoneChatDetails.memberLevelName ||
        memberMilestoneChatDetails.member_level_name ||
        '',
      memberMonth:
        memberMilestoneChatDetails.memberMonth ||
        memberMilestoneChatDetails.member_month ||
        0,
      userComment:
        memberMilestoneChatDetails.userComment ||
        memberMilestoneChatDetails.user_comment ||
        '',
    };
  }

  const membershipGiftingDetails =
    snippet.membershipGiftingDetails ||
    snippet.membership_gifting_details;
  if (membershipGiftingDetails) {
    mapped.membershipGiftingDetails = {
      giftMembershipsCount:
        membershipGiftingDetails.giftMembershipsCount ||
        membershipGiftingDetails.gift_memberships_count ||
        0,
      giftMembershipsLevelName:
        membershipGiftingDetails.giftMembershipsLevelName ||
        membershipGiftingDetails.gift_memberships_level_name ||
        '',
    };
  }

  const giftMembershipReceivedDetails =
    snippet.giftMembershipReceivedDetails ||
    snippet.gift_membership_received_details;
  if (giftMembershipReceivedDetails) {
    mapped.giftMembershipReceivedDetails = {
      memberLevelName:
        giftMembershipReceivedDetails.memberLevelName ||
        giftMembershipReceivedDetails.member_level_name ||
        '',
      gifterChannelId:
        giftMembershipReceivedDetails.gifterChannelId ||
        giftMembershipReceivedDetails.gifter_channel_id ||
        '',
      associatedMembershipGiftingMessageId:
        giftMembershipReceivedDetails.associatedMembershipGiftingMessageId ||
        giftMembershipReceivedDetails.associated_membership_gifting_message_id ||
        '',
    };
  }

  const pollDetails = snippet.pollDetails || snippet.poll_details;
  if (pollDetails) {
    const metadata = pollDetails.metadata || {};
    mapped.pollDetails = {
      status: pollDetails.status || 0,
      metadata: {
        questionText: metadata.questionText || metadata.question_text || '',
        options: (metadata.options || []).map((option = {}) => ({
          optionText: option.optionText || option.option_text || '',
          tally: option.tally || 0,
        })),
      },
    };
  }

  const giftDetails =
    snippet.giftDetails ||
    snippet.gift_details ||
    snippet.giftEventDetails?.giftMetadata ||
    snippet.gift_event_details?.gift_metadata;
  if (giftDetails) {
    const duration =
      giftDetails.giftDuration || giftDetails.gift_duration || {};

    mapped.giftDetails = {
      giftName: giftDetails.giftName || giftDetails.gift_name || '',
      jewelsAmount:
        giftDetails.jewelsAmount || giftDetails.jewels_amount || 0,
      giftUrl: giftDetails.giftUrl || giftDetails.gift_url || '',
      altText: giftDetails.altText || giftDetails.alt_text || '',
      language: giftDetails.language || '',
      hasVisualEffect: Boolean(
        giftDetails.hasVisualEffect ?? giftDetails.has_visual_effect ?? false
      ),
      comboCount: giftDetails.comboCount || giftDetails.combo_count || 0,
      giftDuration: {
        seconds: duration.seconds || 0,
        nanos: duration.nanos || 0,
      },
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
