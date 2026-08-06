import { mapSuperChatAuthor } from './youtube-super-chat';

function getGiftMetadata(snippet = {}) {
  const nested =
    snippet.giftEventDetails?.giftMetadata ||
    snippet.gift_event_details?.gift_metadata;
  const flat = snippet.giftDetails || snippet.gift_details;

  return nested || flat || {};
}

function getGiftDuration(metadata = {}) {
  const duration =
    metadata.giftDuration || metadata.gift_duration || metadata.duration || {};

  if (typeof duration === 'string' || typeof duration === 'number') {
    return {
      giftDurationSeconds: parseInt(duration, 10) || 0,
      giftDurationNanos: 0,
    };
  }

  return {
    giftDurationSeconds:
      duration.seconds !== undefined
        ? parseInt(duration.seconds, 10) || 0
        : 0,
    giftDurationNanos:
      duration.nanos !== undefined ? parseInt(duration.nanos, 10) || 0 : 0,
  };
}

export function buildGiftPayload({ id, snippet = {}, authorDetails = {} }) {
  const metadata = getGiftMetadata(snippet);
  const { giftDurationSeconds, giftDurationNanos } = getGiftDuration(metadata);

  return {
    id,
    publishedAt: snippet.publishedAt || '',
    type: 'giftEvent',
    author: mapSuperChatAuthor(authorDetails),
    gift: {
      giftName: metadata.giftName || metadata.gift_name || '',
      jewelsAmount:
        metadata.jewelsAmount !== undefined
          ? metadata.jewelsAmount
          : metadata.jewels_amount || 0,
      giftUrl: metadata.giftUrl || metadata.gift_url || '',
      giftDurationSeconds,
      giftDurationNanos,
      altText: metadata.altText || metadata.alt_text || '',
      language: metadata.language || '',
      hasVisualEffect: Boolean(
        metadata.hasVisualEffect ?? metadata.has_visual_effect ?? false
      ),
      comboCount:
        metadata.comboCount !== undefined
          ? metadata.comboCount
          : metadata.combo_count || 0,
    },
  };
}

export function buildMembershipGiftPayload({
  id,
  snippet = {},
  authorDetails = {},
}) {
  const details =
    snippet.membershipGiftingDetails ||
    snippet.membership_gifting_details ||
    {};

  return {
    id,
    publishedAt: snippet.publishedAt || '',
    type: 'membershipGiftingEvent',
    author: mapSuperChatAuthor(authorDetails),
    membershipGift: {
      giftMembershipsCount:
        details.giftMembershipsCount !== undefined
          ? details.giftMembershipsCount
          : details.gift_memberships_count || 0,
      giftMembershipsLevelName:
        details.giftMembershipsLevelName ||
        details.gift_memberships_level_name ||
        '',
    },
  };
}

export function buildMembershipGiftReceivedPayload({
  id,
  snippet = {},
  authorDetails = {},
}) {
  const details =
    snippet.giftMembershipReceivedDetails ||
    snippet.gift_membership_received_details ||
    {};

  return {
    id,
    publishedAt: snippet.publishedAt || '',
    type: 'giftMembershipReceivedEvent',
    author: mapSuperChatAuthor(authorDetails),
    membershipGiftReceived: {
      memberLevelName:
        details.memberLevelName || details.member_level_name || '',
      gifterChannelId:
        details.gifterChannelId || details.gifter_channel_id || '',
      associatedMembershipGiftingMessageId:
        details.associatedMembershipGiftingMessageId ||
        details.associated_membership_gifting_message_id ||
        '',
    },
  };
}

export function buildNewSponsorPayload({
  id,
  snippet = {},
  authorDetails = {},
}) {
  const details =
    snippet.newSponsorDetails || snippet.new_sponsor_details || {};

  return {
    id,
    publishedAt: snippet.publishedAt || '',
    type: 'newSponsorEvent',
    author: mapSuperChatAuthor(authorDetails),
    sponsor: {
      memberLevelName:
        details.memberLevelName || details.member_level_name || '',
      isUpgrade: Boolean(details.isUpgrade ?? details.is_upgrade ?? false),
    },
  };
}

export function buildMemberMilestonePayload({
  id,
  snippet = {},
  authorDetails = {},
}) {
  const details =
    snippet.memberMilestoneChatDetails ||
    snippet.member_milestone_chat_details ||
    {};

  return {
    id,
    publishedAt: snippet.publishedAt || '',
    type: 'memberMilestoneChatEvent',
    author: mapSuperChatAuthor(authorDetails),
    milestone: {
      memberLevelName:
        details.memberLevelName || details.member_level_name || '',
      memberMonth:
        details.memberMonth !== undefined
          ? details.memberMonth
          : details.member_month || 0,
      userComment: details.userComment || details.user_comment || '',
    },
  };
}

function mapPollStatus(status) {
  if (status === undefined || status === null || status === '') {
    return 'unknown';
  }

  const normalized = String(status).toLowerCase();

  if (
    normalized === 'active' ||
    normalized === '1' ||
    status === 1 ||
    status === 'ACTIVE'
  ) {
    return 'active';
  }

  if (
    normalized === 'closed' ||
    normalized === '2' ||
    status === 2 ||
    status === 'CLOSED'
  ) {
    return 'closed';
  }

  return 'unknown';
}

export function buildPollPayload({ id, snippet = {}, authorDetails = {} }) {
  const details = snippet.pollDetails || snippet.poll_details || {};
  const metadata = details.metadata || {};
  const options = metadata.options || [];

  return {
    id,
    publishedAt: snippet.publishedAt || '',
    type: 'pollEvent',
    author: mapSuperChatAuthor(authorDetails),
    poll: {
      status: mapPollStatus(details.status),
      questionText: metadata.questionText || metadata.question_text || '',
      options: options.map((option = {}) => ({
        optionText: option.optionText || option.option_text || '',
        tally:
          option.tally !== undefined && option.tally !== null
            ? option.tally
            : '',
      })),
    },
  };
}

export function buildSponsorOnlyModePayload({ id, snippet = {} }) {
  return {
    id,
    publishedAt: snippet.publishedAt || '',
    type: snippet.type,
  };
}
