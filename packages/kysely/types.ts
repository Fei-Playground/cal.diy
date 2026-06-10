import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export const SchedulingType = {
    ROUND_ROBIN: "roundRobin",
    COLLECTIVE: "collective",
    MANAGED: "managed"
} as const;
export type SchedulingType = (typeof SchedulingType)[keyof typeof SchedulingType];
export const PeriodType = {
    UNLIMITED: "unlimited",
    ROLLING: "rolling",
    ROLLING_WINDOW: "rolling_window",
    RANGE: "range"
} as const;
export type PeriodType = (typeof PeriodType)[keyof typeof PeriodType];
export const CreationSource = {
    API_V1: "api_v1",
    API_V2: "api_v2",
    WEBAPP: "webapp"
} as const;
export type CreationSource = (typeof CreationSource)[keyof typeof CreationSource];
export const CancellationReasonRequirement = {
    MANDATORY_BOTH: "MANDATORY_BOTH",
    MANDATORY_HOST_ONLY: "MANDATORY_HOST_ONLY",
    MANDATORY_ATTENDEE_ONLY: "MANDATORY_ATTENDEE_ONLY",
    OPTIONAL_BOTH: "OPTIONAL_BOTH"
} as const;
export type CancellationReasonRequirement = (typeof CancellationReasonRequirement)[keyof typeof CancellationReasonRequirement];
export const IdentityProvider = {
    CAL: "CAL",
    GOOGLE: "GOOGLE",
    SAML: "SAML",
    AZUREAD: "AZUREAD"
} as const;
export type IdentityProvider = (typeof IdentityProvider)[keyof typeof IdentityProvider];
export const UserPermissionRole = {
    USER: "USER",
    ADMIN: "ADMIN"
} as const;
export type UserPermissionRole = (typeof UserPermissionRole)[keyof typeof UserPermissionRole];
export const CreditUsageType = {
    SMS: "SMS",
    CAL_AI_PHONE_CALL: "CAL_AI_PHONE_CALL"
} as const;
export type CreditUsageType = (typeof CreditUsageType)[keyof typeof CreditUsageType];
export const CreditType = {
    MONTHLY: "MONTHLY",
    ADDITIONAL: "ADDITIONAL"
} as const;
export type CreditType = (typeof CreditType)[keyof typeof CreditType];
export const MembershipRole = {
    MEMBER: "MEMBER",
    ADMIN: "ADMIN",
    OWNER: "OWNER"
} as const;
export type MembershipRole = (typeof MembershipRole)[keyof typeof MembershipRole];
export const BookingStatus = {
    CANCELLED: "cancelled",
    ACCEPTED: "accepted",
    REJECTED: "rejected",
    PENDING: "pending",
    AWAITING_HOST: "awaiting_host"
} as const;
export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus];
export const EventTypeCustomInputType = {
    TEXT: "text",
    TEXTLONG: "textLong",
    NUMBER: "number",
    BOOL: "bool",
    RADIO: "radio",
    PHONE: "phone"
} as const;
export type EventTypeCustomInputType = (typeof EventTypeCustomInputType)[keyof typeof EventTypeCustomInputType];
export const ReminderType = {
    PENDING_BOOKING_CONFIRMATION: "PENDING_BOOKING_CONFIRMATION"
} as const;
export type ReminderType = (typeof ReminderType)[keyof typeof ReminderType];
export const PaymentOption = {
    ON_BOOKING: "ON_BOOKING",
    HOLD: "HOLD"
} as const;
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption];
export const WebhookTriggerEvents = {
    BOOKING_CREATED: "BOOKING_CREATED",
    BOOKING_PAYMENT_INITIATED: "BOOKING_PAYMENT_INITIATED",
    BOOKING_PAID: "BOOKING_PAID",
    BOOKING_RESCHEDULED: "BOOKING_RESCHEDULED",
    BOOKING_REQUESTED: "BOOKING_REQUESTED",
    BOOKING_CANCELLED: "BOOKING_CANCELLED",
    BOOKING_REJECTED: "BOOKING_REJECTED",
    BOOKING_NO_SHOW_UPDATED: "BOOKING_NO_SHOW_UPDATED",
    FORM_SUBMITTED: "FORM_SUBMITTED",
    MEETING_ENDED: "MEETING_ENDED",
    MEETING_STARTED: "MEETING_STARTED",
    RECORDING_READY: "RECORDING_READY",
    RECORDING_TRANSCRIPTION_GENERATED: "RECORDING_TRANSCRIPTION_GENERATED",
    OOO_CREATED: "OOO_CREATED",
    AFTER_HOSTS_CAL_VIDEO_NO_SHOW: "AFTER_HOSTS_CAL_VIDEO_NO_SHOW",
    AFTER_GUESTS_CAL_VIDEO_NO_SHOW: "AFTER_GUESTS_CAL_VIDEO_NO_SHOW",
    FORM_SUBMITTED_NO_EVENT: "FORM_SUBMITTED_NO_EVENT",
    DELEGATION_CREDENTIAL_ERROR: "DELEGATION_CREDENTIAL_ERROR",
    WRONG_ASSIGNMENT_REPORT: "WRONG_ASSIGNMENT_REPORT"
} as const;
export type WebhookTriggerEvents = (typeof WebhookTriggerEvents)[keyof typeof WebhookTriggerEvents];
export const AppCategories = {
    calendar: "calendar",
    messaging: "messaging",
    other: "other",
    payment: "payment",
    video: "video",
    web3: "web3",
    automation: "automation",
    analytics: "analytics",
    conferencing: "conferencing",
    crm: "crm"
} as const;
export type AppCategories = (typeof AppCategories)[keyof typeof AppCategories];
export const TimeUnit = {
    DAY: "day",
    HOUR: "hour",
    MINUTE: "minute"
} as const;
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];
export const FeatureType = {
    RELEASE: "RELEASE",
    EXPERIMENT: "EXPERIMENT",
    OPERATIONAL: "OPERATIONAL",
    KILL_SWITCH: "KILL_SWITCH",
    PERMISSION: "PERMISSION"
} as const;
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];
export const RRResetInterval = {
    MONTH: "MONTH",
    DAY: "DAY"
} as const;
export type RRResetInterval = (typeof RRResetInterval)[keyof typeof RRResetInterval];
export const RRTimestampBasis = {
    CREATED_AT: "CREATED_AT",
    START_TIME: "START_TIME"
} as const;
export type RRTimestampBasis = (typeof RRTimestampBasis)[keyof typeof RRTimestampBasis];
export const OAuthClientType = {
    CONFIDENTIAL: "confidential",
    PUBLIC: "public"
} as const;
export type OAuthClientType = (typeof OAuthClientType)[keyof typeof OAuthClientType];
export const OAuthClientStatus = {
    PENDING: "pending",
    APPROVED: "approved",
    REJECTED: "rejected"
} as const;
export type OAuthClientStatus = (typeof OAuthClientStatus)[keyof typeof OAuthClientStatus];
export const AccessScope = {
    READ_BOOKING: "READ_BOOKING",
    READ_PROFILE: "READ_PROFILE"
} as const;
export type AccessScope = (typeof AccessScope)[keyof typeof AccessScope];
export const RedirectType = {
    UserEventType: "user-event-type",
    TeamEventType: "team-event-type",
    User: "user",
    Team: "team"
} as const;
export type RedirectType = (typeof RedirectType)[keyof typeof RedirectType];
export const SMSLockState = {
    LOCKED: "LOCKED",
    UNLOCKED: "UNLOCKED",
    REVIEW_NEEDED: "REVIEW_NEEDED"
} as const;
export type SMSLockState = (typeof SMSLockState)[keyof typeof SMSLockState];
export const AttributeType = {
    TEXT: "TEXT",
    NUMBER: "NUMBER",
    SINGLE_SELECT: "SINGLE_SELECT",
    MULTI_SELECT: "MULTI_SELECT"
} as const;
export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];
export const AssignmentReasonEnum = {
    REASSIGNED: "REASSIGNED",
    RR_REASSIGNED: "RR_REASSIGNED",
    REROUTED: "REROUTED",
    SALESFORCE_ASSIGNMENT: "SALESFORCE_ASSIGNMENT"
} as const;
export type AssignmentReasonEnum = (typeof AssignmentReasonEnum)[keyof typeof AssignmentReasonEnum];
export const EventTypeAutoTranslatedField = {
    DESCRIPTION: "DESCRIPTION",
    TITLE: "TITLE"
} as const;
export type EventTypeAutoTranslatedField = (typeof EventTypeAutoTranslatedField)[keyof typeof EventTypeAutoTranslatedField];
export const WatchlistType = {
    EMAIL: "EMAIL",
    DOMAIN: "DOMAIN",
    USERNAME: "USERNAME"
} as const;
export type WatchlistType = (typeof WatchlistType)[keyof typeof WatchlistType];
export const WatchlistAction = {
    REPORT: "REPORT",
    BLOCK: "BLOCK",
    ALERT: "ALERT"
} as const;
export type WatchlistAction = (typeof WatchlistAction)[keyof typeof WatchlistAction];
export const WatchlistSource = {
    MANUAL: "MANUAL",
    FREE_DOMAIN_POLICY: "FREE_DOMAIN_POLICY",
    SIGNUP: "SIGNUP"
} as const;
export type WatchlistSource = (typeof WatchlistSource)[keyof typeof WatchlistSource];
export const BookingReportReason = {
    SPAM: "SPAM",
    DONT_KNOW_PERSON: "dont_know_person",
    OTHER: "OTHER"
} as const;
export type BookingReportReason = (typeof BookingReportReason)[keyof typeof BookingReportReason];
export const BookingReportStatus = {
    PENDING: "PENDING",
    DISMISSED: "DISMISSED",
    BLOCKED: "BLOCKED"
} as const;
export type BookingReportStatus = (typeof BookingReportStatus)[keyof typeof BookingReportStatus];
export const SystemReportStatus = {
    PENDING: "PENDING",
    BLOCKED: "BLOCKED",
    DISMISSED: "DISMISSED"
} as const;
export type SystemReportStatus = (typeof SystemReportStatus)[keyof typeof SystemReportStatus];
export const WrongAssignmentReportStatus = {
    PENDING: "PENDING",
    REVIEWED: "REVIEWED",
    RESOLVED: "RESOLVED",
    DISMISSED: "DISMISSED"
} as const;
export type WrongAssignmentReportStatus = (typeof WrongAssignmentReportStatus)[keyof typeof WrongAssignmentReportStatus];
export const BillingPeriod = {
    MONTHLY: "MONTHLY",
    ANNUALLY: "ANNUALLY"
} as const;
export type BillingPeriod = (typeof BillingPeriod)[keyof typeof BillingPeriod];
export const BillingMode = {
    SEATS: "SEATS",
    ACTIVE_USERS: "ACTIVE_USERS"
} as const;
export type BillingMode = (typeof BillingMode)[keyof typeof BillingMode];
export const FilterSegmentScope = {
    USER: "USER",
    TEAM: "TEAM"
} as const;
export type FilterSegmentScope = (typeof FilterSegmentScope)[keyof typeof FilterSegmentScope];
export const RoleType = {
    SYSTEM: "SYSTEM",
    CUSTOM: "CUSTOM"
} as const;
export type RoleType = (typeof RoleType)[keyof typeof RoleType];
export const BookingAuditType = {
    RECORD_CREATED: "record_created",
    RECORD_UPDATED: "record_updated",
    RECORD_DELETED: "record_deleted"
} as const;
export type BookingAuditType = (typeof BookingAuditType)[keyof typeof BookingAuditType];
export const BookingAuditAction = {
    CREATED: "created",
    CANCELLED: "cancelled",
    ACCEPTED: "accepted",
    REJECTED: "rejected",
    PENDING: "pending",
    AWAITING_HOST: "awaiting_host",
    RESCHEDULED: "rescheduled",
    ATTENDEE_ADDED: "attendee_added",
    ATTENDEE_REMOVED: "attendee_removed",
    REASSIGNMENT: "reassignment",
    LOCATION_CHANGED: "location_changed",
    NO_SHOW_UPDATED: "no_show_updated",
    RESCHEDULE_REQUESTED: "reschedule_requested",
    SEAT_BOOKED: "seat_booked",
    SEAT_RESCHEDULED: "seat_rescheduled"
} as const;
export type BookingAuditAction = (typeof BookingAuditAction)[keyof typeof BookingAuditAction];
export const BookingAuditSource = {
    API_V1: "api_v1",
    API_V2: "api_v2",
    WEBAPP: "webapp",
    WEBHOOK: "webhook",
    SYSTEM: "system",
    MAGIC_LINK: "magic_link",
    UNKNOWN: "unknown"
} as const;
export type BookingAuditSource = (typeof BookingAuditSource)[keyof typeof BookingAuditSource];
export const AuditActorType = {
    USER: "user",
    GUEST: "guest",
    ATTENDEE: "attendee",
    SYSTEM: "system",
    APP: "app"
} as const;
export type AuditActorType = (typeof AuditActorType)[keyof typeof AuditActorType];
export const PhoneNumberSubscriptionStatus = {
    ACTIVE: "ACTIVE",
    PAST_DUE: "PAST_DUE",
    CANCELLED: "CANCELLED",
    INCOMPLETE: "INCOMPLETE",
    INCOMPLETE_EXPIRED: "INCOMPLETE_EXPIRED",
    TRIALING: "TRIALING",
    UNPAID: "UNPAID"
} as const;
export type PhoneNumberSubscriptionStatus = (typeof PhoneNumberSubscriptionStatus)[keyof typeof PhoneNumberSubscriptionStatus];
export const SeatChangeType = {
    ADDITION: "ADDITION",
    REMOVAL: "REMOVAL"
} as const;
export type SeatChangeType = (typeof SeatChangeType)[keyof typeof SeatChangeType];
export const ProrationStatus = {
    PENDING: "PENDING",
    INVOICE_CREATED: "INVOICE_CREATED",
    CHARGED: "CHARGED",
    FAILED: "FAILED",
    CANCELLED: "CANCELLED"
} as const;
export type ProrationStatus = (typeof ProrationStatus)[keyof typeof ProrationStatus];
export const CalendarCacheEventStatus = {
    confirmed: "confirmed",
    tentative: "tentative",
    cancelled: "cancelled"
} as const;
export type CalendarCacheEventStatus = (typeof CalendarCacheEventStatus)[keyof typeof CalendarCacheEventStatus];
export type AccessCode = {
    id: Generated<number>;
    code: string;
    clientId: string | null;
    expiresAt: Timestamp;
    scopes: AccessScope[];
    userId: number | null;
    teamId: number | null;
    codeChallenge: string | null;
    codeChallengeMethod: Generated<string | null>;
};
export type AccessToken = {
    id: Generated<number>;
    secret: string;
    createdAt: Generated<Timestamp>;
    expiresAt: Timestamp;
    platformOAuthClientId: string;
    userId: number;
};
export type Account = {
    id: string;
    userId: number;
    type: string;
    provider: string;
    providerAccountId: string;
    providerEmail: string | null;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
};
export type Agent = {
    id: string;
    name: string;
    userId: number | null;
    teamId: number | null;
    providerAgentId: string;
    inboundEventTypeId: number | null;
    outboundEventTypeId: number | null;
    enabled: Generated<boolean>;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type ApiKey = {
    id: string;
    userId: number;
    teamId: number | null;
    note: string | null;
    createdAt: Generated<Timestamp>;
    expiresAt: Timestamp | null;
    lastUsedAt: Timestamp | null;
    hashedKey: string;
    appId: string | null;
};
export type App = {
    slug: string;
    dirName: string;
    keys: unknown | null;
    categories: AppCategories[];
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    enabled: Generated<boolean>;
};
export type AssignmentReason = {
    id: Generated<number>;
    createdAt: Generated<Timestamp>;
    bookingId: number;
    reasonEnum: AssignmentReasonEnum;
    reasonString: string;
};
export type Attendee = {
    id: Generated<number>;
    email: string;
    name: string;
    timeZone: string;
    phoneNumber: string | null;
    locale: Generated<string | null>;
    bookingId: number | null;
    noShow: Generated<boolean | null>;
};
export type Attribute = {
    id: string;
    teamId: number;
    type: AttributeType;
    name: string;
    slug: string;
    enabled: Generated<boolean>;
    usersCanEditRelation: Generated<boolean>;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    isWeightsEnabled: Generated<boolean>;
    isLocked: Generated<boolean>;
};
export type AttributeOption = {
    id: string;
    attributeId: string;
    value: string;
    slug: string;
    isGroup: Generated<boolean>;
    contains: string[];
};
export type AttributeSyncFieldMapping = {
    id: string;
    integrationFieldName: string;
    attributeId: string;
    enabled: boolean;
    integrationAttributeSyncId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type AttributeSyncRule = {
    id: string;
    integrationAttributeSyncId: string;
    rule: unknown;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type AttributeToUser = {
    id: string;
    memberId: number;
    attributeOptionId: string;
    weight: number | null;
    createdAt: Generated<Timestamp>;
    createdById: number | null;
    createdByDSyncId: string | null;
    updatedAt: Timestamp | null;
    updatedById: number | null;
    updatedByDSyncId: string | null;
};
export type AuditActor = {
    id: string;
    type: AuditActorType;
    userUuid: string | null;
    attendeeId: number | null;
    credentialId: number | null;
    email: string | null;
    phone: string | null;
    name: string | null;
    createdAt: Generated<Timestamp>;
};
export type Availability = {
    id: Generated<number>;
    userId: number | null;
    eventTypeId: number | null;
    days: number[];
    startTime: Timestamp;
    endTime: Timestamp;
    date: Timestamp | null;
    scheduleId: number | null;
};
export type Avatar = {
    teamId: Generated<number>;
    userId: Generated<number>;
    data: string;
    objectKey: string;
    isBanner: Generated<boolean>;
};
export type Booking = {
    id: Generated<number>;
    uid: string;
    idempotencyKey: string | null;
    userId: number | null;
    /**
     * @zod.import(["import { emailSchema } from '../../zod-utils'"]).custom.use(emailSchema)
     */
    userPrimaryEmail: string | null;
    eventTypeId: number | null;
    title: string;
    description: string | null;
    customInputs: unknown | null;
    /**
     * @zod.import(["import { bookingResponses } from '../../zod-utils'"]).custom.use(bookingResponses)
     */
    responses: unknown | null;
    startTime: Timestamp;
    endTime: Timestamp;
    location: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp | null;
    status: Generated<BookingStatus>;
    paid: Generated<boolean>;
    destinationCalendarId: number | null;
    cancellationReason: string | null;
    rejectionReason: string | null;
    reassignReason: string | null;
    reassignById: number | null;
    dynamicEventSlugRef: string | null;
    dynamicGroupSlugRef: string | null;
    rescheduled: boolean | null;
    fromReschedule: string | null;
    recurringEventId: string | null;
    smsReminderNumber: string | null;
    scheduledJobs: string[];
    /**
     * @zod.import(["import { bookingMetadataSchema } from '../../zod-utils'"]).custom.use(bookingMetadataSchema)
     */
    metadata: unknown | null;
    isRecorded: Generated<boolean>;
    iCalUID: Generated<string | null>;
    iCalSequence: Generated<number>;
    rating: number | null;
    ratingFeedback: string | null;
    noShowHost: Generated<boolean | null>;
    oneTimePassword: string | null;
    /**
     * @zod.import(["import { emailSchema } from '../../zod-utils'"]).custom.use(emailSchema)
     */
    cancelledBy: string | null;
    /**
     * @zod.import(["import { emailSchema } from '../../zod-utils'"]).custom.use(emailSchema)
     */
    rescheduledBy: string | null;
    creationSource: CreationSource | null;
};
export type BookingAudit = {
    id: string;
    bookingUid: string;
    actorId: string;
    type: BookingAuditType;
    action: BookingAuditAction;
    timestamp: Timestamp;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    source: BookingAuditSource;
    operationId: string;
    data: unknown | null;
    context: unknown | null;
};
export type BookingDenormalized = {
    id: number;
    uid: string;
    eventTypeId: number | null;
    title: string;
    description: string | null;
    startTime: Timestamp;
    endTime: Timestamp;
    createdAt: Timestamp;
    updatedAt: Timestamp | null;
    location: string | null;
    paid: boolean;
    status: BookingStatus;
    rescheduled: boolean | null;
    userId: number | null;
    teamId: number | null;
    eventLength: number | null;
    eventParentId: number | null;
    userEmail: string | null;
    userName: string | null;
    userUsername: string | null;
    ratingFeedback: string | null;
    rating: number | null;
    noShowHost: boolean | null;
    isTeamBooking: boolean;
};
export type BookingInternalNote = {
    id: Generated<number>;
    notePresetId: number | null;
    text: string | null;
    bookingId: number;
    createdById: number;
    createdAt: Generated<Timestamp>;
};
export type BookingReference = {
    id: Generated<number>;
    /**
     * @zod.string.min(1)
     */
    type: string;
    /**
     * @zod.string.min(1)
     */
    uid: string;
    meetingId: string | null;
    thirdPartyRecurringEventId: string | null;
    meetingPassword: string | null;
    meetingUrl: string | null;
    bookingId: number | null;
    externalCalendarId: string | null;
    deleted: boolean | null;
    credentialId: number | null;
    delegationCredentialId: string | null;
};
export type BookingReport = {
    id: string;
    bookingUid: string;
    bookerEmail: string;
    reportedById: number | null;
    organizationId: number | null;
    reason: BookingReportReason;
    description: string | null;
    cancelled: Generated<boolean>;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    status: Generated<BookingReportStatus>;
    systemStatus: Generated<SystemReportStatus>;
    watchlistId: string | null;
    globalWatchlistId: string | null;
};
export type BookingSeat = {
    id: Generated<number>;
    referenceUid: string;
    bookingId: number;
    attendeeId: number;
    /**
     * @zod.import(["import { bookingSeatDataSchema } from '../../zod-utils'"]).custom.use(bookingSeatDataSchema)
     */
    data: unknown | null;
    metadata: unknown | null;
};
export type BookingTimeStatus = {
    id: number;
    uid: string | null;
    eventTypeId: number | null;
    title: string | null;
    description: string | null;
    startTime: Timestamp | null;
    endTime: Timestamp | null;
    createdAt: Timestamp | null;
    location: string | null;
    paid: boolean | null;
    status: BookingStatus | null;
    rescheduled: boolean | null;
    userId: number | null;
    teamId: number | null;
    eventLength: number | null;
    timeStatus: string | null;
    eventParentId: number | null;
    userEmail: string | null;
    username: string | null;
    ratingFeedback: string | null;
    rating: number | null;
    noShowHost: boolean | null;
    isTeamBooking: boolean;
};
export type BookingTimeStatusDenormalized = {
    id: number;
    uid: string;
    eventTypeId: number | null;
    title: string;
    description: string | null;
    startTime: Timestamp;
    endTime: Timestamp;
    createdAt: Timestamp;
    updatedAt: Timestamp | null;
    location: string | null;
    paid: boolean;
    status: BookingStatus;
    rescheduled: boolean | null;
    userId: number | null;
    teamId: number | null;
    eventLength: number | null;
    eventParentId: number | null;
    userEmail: string | null;
    userName: string | null;
    userUsername: string | null;
    ratingFeedback: string | null;
    rating: number | null;
    noShowHost: boolean | null;
    isTeamBooking: boolean;
    timeStatus: string | null;
};
export type CalAiPhoneNumber = {
    id: Generated<number>;
    userId: number | null;
    teamId: number | null;
    phoneNumber: string;
    provider: string;
    providerPhoneNumberId: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    stripeCustomerId: string | null;
    stripeSubscriptionId: string | null;
    subscriptionStatus: PhoneNumberSubscriptionStatus | null;
    inboundAgentId: string | null;
    outboundAgentId: string | null;
};
export type CalendarCache = {
    id: string | null;
    key: string;
    value: unknown;
    expiresAt: Timestamp;
    updatedAt: Generated<Timestamp>;
    credentialId: number;
    userId: number | null;
};
export type CalendarCacheEvent = {
    id: string;
    selectedCalendarId: string;
    externalId: string;
    externalEtag: string;
    iCalUID: string | null;
    iCalSequence: Generated<number>;
    summary: string | null;
    description: string | null;
    location: string | null;
    start: Timestamp;
    end: Timestamp;
    isAllDay: Generated<boolean>;
    timeZone: string | null;
    status: Generated<CalendarCacheEventStatus>;
    recurringEventId: string | null;
    originalStartTime: Timestamp | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    externalCreatedAt: Timestamp | null;
    externalUpdatedAt: Timestamp | null;
};
export type CalVideoSettings = {
    eventTypeId: number;
    disableRecordingForOrganizer: Generated<boolean>;
    disableRecordingForGuests: Generated<boolean>;
    enableAutomaticTranscription: Generated<boolean>;
    enableAutomaticRecordingForOrganizer: Generated<boolean>;
    redirectUrlOnExit: string | null;
    disableTranscriptionForGuests: Generated<boolean>;
    disableTranscriptionForOrganizer: Generated<boolean>;
    requireEmailForGuests: Generated<boolean>;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type Credential = {
    id: Generated<number>;
    type: string;
    key: unknown;
    encryptedKey: string | null;
    userId: number | null;
    teamId: number | null;
    appId: string | null;
    subscriptionId: string | null;
    paymentStatus: string | null;
    billingCycleStart: number | null;
    invalid: Generated<boolean | null>;
    delegationCredentialId: string | null;
};
export type CreditBalance = {
    id: string;
    teamId: number | null;
    userId: number | null;
    additionalCredits: Generated<number>;
    limitReachedAt: Timestamp | null;
    warningSentAt: Timestamp | null;
};
export type CreditExpenseLog = {
    id: string;
    creditBalanceId: string;
    bookingUid: string | null;
    credits: number | null;
    creditType: CreditType;
    date: Timestamp;
    smsSid: string | null;
    smsSegments: number | null;
    phoneNumber: string | null;
    email: string | null;
    callDuration: number | null;
    creditFor: CreditUsageType | null;
    externalRef: string | null;
};
export type CreditPurchaseLog = {
    id: string;
    creditBalanceId: string;
    credits: number;
    createdAt: Generated<Timestamp>;
};
export type DelegationCredential = {
    id: string;
    workspacePlatformId: number;
    /**
     * @zod.import(["import { serviceAccountKeySchema } from '../../zod-utils'"]).custom.use(serviceAccountKeySchema)
     */
    serviceAccountKey: unknown;
    enabled: Generated<boolean>;
    lastEnabledAt: Timestamp | null;
    lastDisabledAt: Timestamp | null;
    organizationId: number;
    domain: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type Deployment = {
    /**
     * This is a single row table, so we use a fixed id
     */
    id: Generated<number>;
    logo: string | null;
    /**
     * @zod.import(["import { DeploymentTheme } from '../../zod-utils'"]).custom.use(DeploymentTheme)
     */
    theme: unknown | null;
    licenseKey: string | null;
    signatureTokenEncrypted: string | null;
    agreedLicenseAt: Timestamp | null;
};
export type DestinationCalendar = {
    id: Generated<number>;
    integration: string;
    externalId: string;
    /**
     * @zod.import(["import { emailSchema } from '../../zod-utils'"]).custom.use(emailSchema)
     */
    primaryEmail: string | null;
    userId: number | null;
    eventTypeId: number | null;
    credentialId: number | null;
    createdAt: Generated<Timestamp | null>;
    updatedAt: Timestamp | null;
    delegationCredentialId: string | null;
    customCalendarReminder: number | null;
};
export type DSyncData = {
    id: Generated<number>;
    directoryId: string;
    tenant: string;
    organizationId: number | null;
};
export type DSyncTeamGroupMapping = {
    id: Generated<number>;
    organizationId: number;
    teamId: number;
    directoryId: string;
    groupName: string;
};
export type EventType = {
    id: Generated<number>;
    /**
     * @zod.string.min(1)
     */
    title: string;
    /**
     * @zod.import(["import { eventTypeSlug } from '../../zod-utils'"]).custom.use(eventTypeSlug)
     */
    slug: string;
    description: string | null;
    interfaceLanguage: string | null;
    position: Generated<number>;
    /**
     * @zod.import(["import { eventTypeLocations } from '../../zod-utils'"]).custom.use(eventTypeLocations)
     */
    locations: unknown | null;
    /**
     * @zod.number.min(1)
     */
    length: number;
    offsetStart: Generated<number>;
    hidden: Generated<boolean>;
    userId: number | null;
    profileId: number | null;
    teamId: number | null;
    useEventLevelSelectedCalendars: Generated<boolean>;
    eventName: string | null;
    parentId: number | null;
    /**
     * @zod.import(["import { eventTypeBookingFields } from '../../zod-utils'"]).custom.use(eventTypeBookingFields)
     */
    bookingFields: unknown | null;
    timeZone: string | null;
    periodType: Generated<PeriodType>;
    /**
     * @zod.import(["import { coerceToDate } from '../../zod-utils'"]).custom.use(coerceToDate)
     */
    periodStartDate: Timestamp | null;
    /**
     * @zod.import(["import { coerceToDate } from '../../zod-utils'"]).custom.use(coerceToDate)
     */
    periodEndDate: Timestamp | null;
    periodDays: number | null;
    periodCountCalendarDays: boolean | null;
    lockTimeZoneToggleOnBookingPage: Generated<boolean>;
    lockedTimeZone: string | null;
    requiresConfirmation: Generated<boolean>;
    requiresConfirmationWillBlockSlot: Generated<boolean>;
    requiresConfirmationForFreeEmail: Generated<boolean>;
    requiresBookerEmailVerification: Generated<boolean>;
    canSendCalVideoTranscriptionEmails: Generated<boolean>;
    autoTranslateDescriptionEnabled: Generated<boolean>;
    autoTranslateInstantMeetingTitleEnabled: Generated<boolean>;
    /**
     * @zod.import(["import { recurringEventType } from '../../zod-utils'"]).custom.use(recurringEventType)
     */
    recurringEvent: unknown | null;
    disableGuests: Generated<boolean>;
    hideCalendarNotes: Generated<boolean>;
    hideCalendarEventDetails: Generated<boolean>;
    /**
     * @zod.number.min(0)
     */
    minimumBookingNotice: Generated<number>;
    beforeEventBuffer: Generated<number>;
    afterEventBuffer: Generated<number>;
    seatsPerTimeSlot: number | null;
    onlyShowFirstAvailableSlot: Generated<boolean>;
    showOptimizedSlots: Generated<boolean | null>;
    disableCancelling: Generated<boolean | null>;
    disableRescheduling: Generated<boolean | null>;
    /**
     * @zod.number.min(0)
     */
    minimumRescheduleNotice: number | null;
    seatsShowAttendees: Generated<boolean | null>;
    seatsShowAvailabilityCount: Generated<boolean | null>;
    schedulingType: SchedulingType | null;
    scheduleId: number | null;
    allowReschedulingCancelledBookings: Generated<boolean | null>;
    price: Generated<number>;
    currency: Generated<string>;
    slotInterval: number | null;
    /**
     * @zod.import(["import { EventTypeMetaDataSchema } from '../../zod-utils'"]).custom.use(EventTypeMetaDataSchema)
     */
    metadata: unknown | null;
    /**
     * @zod.import(["import { successRedirectUrl } from '../../zod-utils'"]).custom.use(successRedirectUrl)
     */
    successRedirectUrl: string | null;
    forwardParamsSuccessRedirect: Generated<boolean | null>;
    /**
     * @zod.import(["import { intervalLimitsType } from '../../zod-utils'"]).custom.use(intervalLimitsType)
     */
    bookingLimits: unknown | null;
    /**
     * @zod.import(["import { intervalLimitsType } from '../../zod-utils'"]).custom.use(intervalLimitsType)
     */
    durationLimits: unknown | null;
    isInstantEvent: Generated<boolean>;
    instantMeetingExpiryTimeOffsetInSeconds: Generated<number>;
    instantMeetingScheduleId: number | null;
    instantMeetingParameters: string[];
    assignAllTeamMembers: Generated<boolean>;
    assignRRMembersUsingSegment: Generated<boolean>;
    /**
     * @zod.import(["import { rrSegmentQueryValueSchema } from '../../zod-utils'"]).custom.use(rrSegmentQueryValueSchema)
     */
    rrSegmentQueryValue: unknown | null;
    useEventTypeDestinationCalendarEmail: Generated<boolean>;
    isRRWeightsEnabled: Generated<boolean>;
    maxLeadThreshold: number | null;
    includeNoShowInRRCalculation: Generated<boolean>;
    allowReschedulingPastBookings: Generated<boolean>;
    hideOrganizerEmail: Generated<boolean>;
    maxActiveBookingsPerBooker: number | null;
    maxActiveBookingPerBookerOfferReschedule: Generated<boolean>;
    /**
     * @zod.import(["import { emailSchema } from '../../zod-utils'"]).custom.use(emailSchema)
     */
    customReplyToEmail: string | null;
    /**
     * @zod.import(["import { eventTypeColor } from '../../zod-utils'"]).custom.use(eventTypeColor)
     */
    eventTypeColor: unknown | null;
    rescheduleWithSameRoundRobinHost: Generated<boolean>;
    secondaryEmailId: number | null;
    useBookerTimezone: Generated<boolean>;
    restrictionScheduleId: number | null;
    bookingRequiresAuthentication: Generated<boolean>;
    rrHostSubsetEnabled: Generated<boolean>;
    requiresCancellationReason: Generated<CancellationReasonRequirement | null>;
    enablePerHostLocations: Generated<boolean>;
    createdAt: Generated<Timestamp | null>;
    updatedAt: Timestamp | null;
};
export type EventTypeCustomInput = {
    id: Generated<number>;
    eventTypeId: number;
    label: string;
    type: EventTypeCustomInputType;
    /**
     * @zod.import(["import { customInputOptionSchema } from '../../zod-utils'"]).custom.use(customInputOptionSchema)
     */
    options: unknown | null;
    required: boolean;
    placeholder: Generated<string>;
};
export type EventTypeTranslation = {
    uid: string;
    eventTypeId: number;
    field: EventTypeAutoTranslatedField;
    sourceLocale: string;
    targetLocale: string;
    translatedText: string;
    createdAt: Generated<Timestamp>;
    createdBy: number;
    updatedAt: Timestamp;
    updatedBy: number | null;
};
export type Feature = {
    slug: string;
    enabled: Generated<boolean>;
    description: string | null;
    type: Generated<FeatureType | null>;
    stale: Generated<boolean | null>;
    lastUsedAt: Timestamp | null;
    createdAt: Generated<Timestamp | null>;
    updatedAt: Generated<Timestamp | null>;
    updatedBy: number | null;
};
export type Feedback = {
    id: Generated<number>;
    date: Generated<Timestamp>;
    userId: number;
    rating: string;
    comment: string | null;
};
export type FilterSegment = {
    id: Generated<number>;
    name: string;
    tableIdentifier: string;
    scope: FilterSegmentScope;
    activeFilters: unknown | null;
    sorting: unknown | null;
    columnVisibility: unknown | null;
    columnSizing: unknown | null;
    perPage: number;
    searchTerm: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    userId: number;
    teamId: number | null;
};
export type HashedLink = {
    id: Generated<number>;
    link: string;
    eventTypeId: number;
    expiresAt: Timestamp | null;
    maxUsageCount: Generated<number>;
    usageCount: Generated<number>;
};
export type HolidayCache = {
    id: string;
    countryCode: string;
    calendarId: string;
    eventId: string;
    name: string;
    date: Timestamp;
    year: number;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type Host = {
    userId: number;
    eventTypeId: number;
    isFixed: Generated<boolean>;
    priority: number | null;
    weight: number | null;
    weightAdjustment: number | null;
    scheduleId: number | null;
    createdAt: Generated<Timestamp>;
    groupId: string | null;
    memberId: number | null;
};
export type HostGroup = {
    id: string;
    name: string;
    eventTypeId: number | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type HostLocation = {
    id: string;
    userId: number;
    eventTypeId: number;
    type: string;
    credentialId: number | null;
    link: string | null;
    address: string | null;
    phoneNumber: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type InstantMeetingToken = {
    id: Generated<number>;
    token: string;
    expires: Timestamp;
    teamId: number;
    bookingId: number | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type IntegrationAttributeSync = {
    id: string;
    organizationId: number;
    name: string;
    integration: string;
    credentialId: number | null;
    enabled: boolean;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type InternalNotePreset = {
    id: Generated<number>;
    name: string;
    cancellationReason: string | null;
    teamId: number;
    createdAt: Generated<Timestamp>;
};
export type ManagedOrganization = {
    managedOrganizationId: number;
    managerOrganizationId: number;
    createdAt: Generated<Timestamp>;
};
export type Membership = {
    id: Generated<number>;
    teamId: number;
    userId: number;
    accepted: Generated<boolean>;
    role: MembershipRole;
    customRoleId: string | null;
    createdAt: Generated<Timestamp | null>;
    updatedAt: Timestamp | null;
};
export type MonthlyProration = {
    id: string;
    teamId: number;
    monthKey: string;
    periodStart: Timestamp;
    periodEnd: Timestamp;
    seatsAtStart: number;
    seatsAdded: number;
    seatsRemoved: number;
    netSeatIncrease: number;
    seatsAtEnd: number;
    subscriptionId: string;
    subscriptionItemId: string;
    customerId: string;
    subscriptionStart: Timestamp;
    subscriptionEnd: Timestamp;
    remainingDays: number;
    pricePerSeat: number;
    proratedAmount: number;
    invoiceItemId: string | null;
    invoiceId: string | null;
    invoiceUrl: string | null;
    status: Generated<ProrationStatus>;
    chargedAt: Timestamp | null;
    failedAt: Timestamp | null;
    failureReason: string | null;
    retryCount: Generated<number>;
    metadata: unknown | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    teamBillingId: string | null;
    organizationBillingId: string | null;
};
export type NotificationsSubscriptions = {
    id: Generated<number>;
    userId: number;
    subscription: string;
};
export type OAuthClient = {
    clientId: string;
    redirectUri: string;
    clientSecret: string | null;
    clientType: Generated<OAuthClientType>;
    name: string;
    purpose: string | null;
    logo: string | null;
    websiteUrl: string | null;
    rejectionReason: string | null;
    isTrusted: Generated<boolean>;
    status: Generated<OAuthClientStatus>;
    userId: number | null;
    createdAt: Generated<Timestamp>;
};
export type OrganizationBilling = {
    id: string;
    teamId: number;
    subscriptionId: string;
    subscriptionItemId: string;
    customerId: string;
    status: string;
    planName: string;
    subscriptionStart: Timestamp | null;
    subscriptionTrialEnd: Timestamp | null;
    subscriptionEnd: Timestamp | null;
    billingPeriod: BillingPeriod | null;
    billingMode: Generated<BillingMode>;
    pricePerSeat: number | null;
    paidSeats: number | null;
    highWaterMark: number | null;
    highWaterMarkPeriodStart: Timestamp | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type OrganizationOnboarding = {
    id: string;
    createdById: number;
    createdAt: Generated<Timestamp>;
    orgOwnerEmail: string;
    error: string | null;
    updatedAt: Timestamp;
    organizationId: number | null;
    billingPeriod: BillingPeriod;
    pricePerSeat: number;
    seats: number;
    isPlatform: Generated<boolean>;
    name: string;
    slug: string;
    logo: string | null;
    bio: string | null;
    brandColor: string | null;
    bannerUrl: string | null;
    isDomainConfigured: Generated<boolean>;
    stripeCustomerId: string | null;
    stripeSubscriptionId: string | null;
    stripeSubscriptionItemId: string | null;
    /**
     * @zod.import(["import { orgOnboardingInvitedMembersSchema } from '../../zod-utils'"]).custom.use(orgOnboardingInvitedMembersSchema)
     */
    invitedMembers: Generated<unknown>;
    /**
     * @zod.import(["import { orgOnboardingTeamsSchema } from '../../zod-utils'"]).custom.use(orgOnboardingTeamsSchema)
     */
    teams: Generated<unknown>;
    isComplete: Generated<boolean>;
};
export type OrganizationSettings = {
    id: Generated<number>;
    organizationId: number;
    isOrganizationConfigured: Generated<boolean>;
    isOrganizationVerified: Generated<boolean>;
    orgAutoAcceptEmail: string;
    lockEventTypeCreationForUsers: Generated<boolean>;
    adminGetsNoSlotsNotification: Generated<boolean>;
    isAdminReviewed: Generated<boolean>;
    isAdminAPIEnabled: Generated<boolean>;
    allowSEOIndexing: Generated<boolean>;
    orgProfileRedirectsToVerifiedDomain: Generated<boolean>;
    disablePhoneOnlySMSNotifications: Generated<boolean>;
    disableAutofillOnBookingPage: Generated<boolean>;
    orgAutoJoinOnSignup: Generated<boolean>;
    disableAttendeeConfirmationEmail: Generated<boolean>;
    disableAttendeeCancellationEmail: Generated<boolean>;
    disableAttendeeRescheduledEmail: Generated<boolean>;
    disableAttendeeRequestEmail: Generated<boolean>;
    disableAttendeeReassignedEmail: Generated<boolean>;
    disableAttendeeAwaitingPaymentEmail: Generated<boolean>;
    disableAttendeeRescheduleRequestEmail: Generated<boolean>;
    disableAttendeeLocationChangeEmail: Generated<boolean>;
    disableAttendeeNewEventEmail: Generated<boolean>;
};
export type OutOfOfficeEntry = {
    id: Generated<number>;
    uuid: string;
    start: Timestamp;
    end: Timestamp;
    notes: string | null;
    showNotePublicly: Generated<boolean>;
    userId: number;
    toUserId: number | null;
    reasonId: number | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type OutOfOfficeReason = {
    id: Generated<number>;
    emoji: string;
    reason: string;
    enabled: Generated<boolean>;
    userId: number | null;
};
export type Payment = {
    id: Generated<number>;
    uid: string;
    appId: string | null;
    bookingId: number;
    amount: number;
    fee: number;
    currency: string;
    success: boolean;
    refunded: boolean;
    data: unknown;
    externalId: string;
    paymentOption: Generated<PaymentOption | null>;
};
export type PlatformAuthorizationToken = {
    id: string;
    platformOAuthClientId: string;
    userId: number;
    createdAt: Generated<Timestamp>;
};
export type PlatformBilling = {
    id: number;
    customerId: string;
    subscriptionId: string | null;
    priceId: string | null;
    plan: Generated<string>;
    billingCycleStart: number | null;
    billingCycleEnd: number | null;
    overdue: Generated<boolean | null>;
    managerBillingId: number | null;
};
export type PlatformOAuthClient = {
    id: string;
    name: string;
    secret: string;
    permissions: number;
    logo: string | null;
    redirectUris: string[];
    organizationId: number;
    bookingRedirectUri: string | null;
    bookingCancelRedirectUri: string | null;
    bookingRescheduleRedirectUri: string | null;
    areEmailsEnabled: Generated<boolean>;
    areDefaultEventTypesEnabled: Generated<boolean>;
    areCalendarEventsEnabled: Generated<boolean>;
    createdAt: Generated<Timestamp>;
};
export type PlatformOAuthClientToUser = {
    A: string;
    B: number;
};
export type Profile = {
    id: Generated<number>;
    uid: string;
    userId: number;
    organizationId: number;
    username: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type RateLimit = {
    id: string;
    name: string;
    apiKeyId: string;
    ttl: number;
    limit: number;
    blockDuration: number;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type RefreshToken = {
    id: Generated<number>;
    secret: string;
    createdAt: Generated<Timestamp>;
    expiresAt: Timestamp;
    platformOAuthClientId: string;
    userId: number;
};
export type ReminderMail = {
    id: Generated<number>;
    referenceId: number;
    reminderType: ReminderType;
    elapsedMinutes: number;
    createdAt: Generated<Timestamp>;
};
export type ResetPasswordRequest = {
    id: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    email: string;
    expires: Timestamp;
};
export type Role = {
    id: string;
    name: string;
    color: string | null;
    description: string | null;
    teamId: number | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    type: Generated<RoleType>;
};
export type RolePermission = {
    id: string;
    roleId: string;
    resource: string;
    action: string;
    createdAt: Generated<Timestamp>;
};
export type Schedule = {
    id: Generated<number>;
    userId: number;
    name: string;
    timeZone: string | null;
};
export type SeatChangeLog = {
    id: string;
    teamId: number;
    changeType: SeatChangeType;
    seatCount: number;
    userId: number | null;
    triggeredBy: number | null;
    changeDate: Generated<Timestamp>;
    monthKey: string;
    operationId: string | null;
    processedInProrationId: string | null;
    metadata: unknown | null;
    createdAt: Generated<Timestamp>;
    teamBillingId: string | null;
    organizationBillingId: string | null;
};
export type SecondaryEmail = {
    id: Generated<number>;
    userId: number;
    email: string;
    emailVerified: Timestamp | null;
};
export type SelectedCalendar = {
    id: string;
    userId: number;
    integration: string;
    externalId: string;
    credentialId: number | null;
    createdAt: Generated<Timestamp | null>;
    updatedAt: Timestamp | null;
    googleChannelId: string | null;
    googleChannelKind: string | null;
    googleChannelResourceId: string | null;
    googleChannelResourceUri: string | null;
    googleChannelExpiration: string | null;
    channelId: string | null;
    channelKind: string | null;
    channelResourceId: string | null;
    channelResourceUri: string | null;
    channelExpiration: Timestamp | null;
    syncSubscribedAt: Timestamp | null;
    syncSubscribedErrorAt: Timestamp | null;
    syncSubscribedErrorCount: Generated<number>;
    syncToken: string | null;
    syncedAt: Timestamp | null;
    syncErrorAt: Timestamp | null;
    syncErrorCount: Generated<number | null>;
    delegationCredentialId: string | null;
    error: string | null;
    lastErrorAt: Timestamp | null;
    watchAttempts: Generated<number>;
    unwatchAttempts: Generated<number>;
    maxAttempts: Generated<number>;
    eventTypeId: number | null;
};
export type SelectedSlots = {
    id: Generated<number>;
    eventTypeId: number;
    userId: number;
    slotUtcStartDate: Timestamp;
    slotUtcEndDate: Timestamp;
    uid: string;
    releaseAt: Timestamp;
    isSeat: Generated<boolean>;
};
export type Session = {
    id: string;
    sessionToken: string;
    userId: number;
    expires: Timestamp;
};
export type Task = {
    id: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    scheduledAt: Generated<Timestamp>;
    succeededAt: Timestamp | null;
    type: string;
    payload: string;
    attempts: Generated<number>;
    maxAttempts: Generated<number>;
    lastError: string | null;
    lastFailedAttemptAt: Timestamp | null;
    referenceUid: string | null;
};
export type Team = {
    id: Generated<number>;
    /**
     * @zod.string.min(1)
     */
    name: string;
    /**
     * @zod.string.min(1)
     */
    slug: string | null;
    logoUrl: string | null;
    calVideoLogo: string | null;
    appLogo: string | null;
    appIconLogo: string | null;
    bio: string | null;
    hideBranding: Generated<boolean>;
    hideTeamProfileLink: Generated<boolean>;
    isPrivate: Generated<boolean>;
    hideBookATeamMember: Generated<boolean>;
    createdAt: Generated<Timestamp>;
    /**
     * @zod.import(["import { teamMetadataSchema } from '../../zod-utils'"]).custom.use(teamMetadataSchema)
     */
    metadata: unknown | null;
    theme: string | null;
    rrResetInterval: Generated<RRResetInterval | null>;
    rrTimestampBasis: Generated<RRTimestampBasis>;
    brandColor: string | null;
    darkBrandColor: string | null;
    bannerUrl: string | null;
    parentId: number | null;
    timeFormat: number | null;
    timeZone: Generated<string>;
    weekStart: Generated<string>;
    isOrganization: Generated<boolean>;
    pendingPayment: Generated<boolean>;
    isPlatform: Generated<boolean>;
    createdByOAuthClientId: string | null;
    smsLockState: Generated<SMSLockState>;
    smsLockReviewedByAdmin: Generated<boolean>;
    /**
     * @zod.import(["import { intervalLimitsType } from '../../zod-utils'"]).custom.use(intervalLimitsType)
     */
    bookingLimits: unknown | null;
    includeManagedEventsInLimits: Generated<boolean>;
    autoOptInFeatures: Generated<boolean>;
};
export type TeamBilling = {
    id: string;
    teamId: number;
    subscriptionId: string;
    subscriptionItemId: string;
    customerId: string;
    status: string;
    planName: string;
    subscriptionStart: Timestamp | null;
    subscriptionTrialEnd: Timestamp | null;
    subscriptionEnd: Timestamp | null;
    billingPeriod: BillingPeriod | null;
    billingMode: Generated<BillingMode>;
    pricePerSeat: number | null;
    paidSeats: number | null;
    highWaterMark: number | null;
    highWaterMarkPeriodStart: Timestamp | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type TeamFeatures = {
    teamId: number;
    featureId: string;
    enabled: boolean;
    assignedAt: Generated<Timestamp>;
    assignedBy: string;
    updatedAt: Timestamp;
};
export type TempOrgRedirect = {
    id: Generated<number>;
    from: string;
    fromOrgId: number;
    type: RedirectType;
    toUrl: string;
    enabled: Generated<boolean>;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type Tracking = {
    id: Generated<number>;
    bookingId: number;
    utm_source: string | null;
    utm_medium: string | null;
    utm_campaign: string | null;
    utm_term: string | null;
    utm_content: string | null;
};
export type TravelSchedule = {
    id: Generated<number>;
    userId: number;
    timeZone: string;
    startDate: Timestamp;
    endDate: Timestamp | null;
    prevTimeZone: string | null;
};
export type User = {
    id: Generated<number>;
    uuid: string;
    username: string | null;
    name: string | null;
    /**
     * @zod.import(["import { emailSchema } from '../../zod-utils'"]).custom.use(emailSchema)
     */
    email: string;
    emailVerified: Timestamp | null;
    bio: string | null;
    avatarUrl: string | null;
    timeZone: Generated<string>;
    weekStart: Generated<string>;
    bufferTime: Generated<number>;
    hideBranding: Generated<boolean>;
    theme: string | null;
    appTheme: string | null;
    created: Generated<Timestamp>;
    trialEndsAt: Timestamp | null;
    lastActiveAt: Timestamp | null;
    defaultScheduleId: number | null;
    completedOnboarding: Generated<boolean>;
    locale: string | null;
    timeFormat: Generated<number | null>;
    twoFactorSecret: string | null;
    twoFactorEnabled: Generated<boolean>;
    backupCodes: string | null;
    identityProvider: Generated<IdentityProvider>;
    identityProviderId: string | null;
    invitedTo: number | null;
    brandColor: string | null;
    darkBrandColor: string | null;
    allowDynamicBooking: Generated<boolean | null>;
    allowSEOIndexing: Generated<boolean | null>;
    receiveMonthlyDigestEmail: Generated<boolean | null>;
    requiresBookerEmailVerification: Generated<boolean | null>;
    /**
     * @zod.import(["import { userMetadata } from '../../zod-utils'"]).custom.use(userMetadata)
     */
    metadata: unknown | null;
    verified: Generated<boolean | null>;
    role: Generated<UserPermissionRole>;
    organizationId: number | null;
    locked: Generated<boolean>;
    movedToProfileId: number | null;
    isPlatformManaged: Generated<boolean>;
    smsLockState: Generated<SMSLockState>;
    smsLockReviewedByAdmin: Generated<boolean>;
    referralLinkId: string | null;
    creationSource: CreationSource | null;
    autoOptInFeatures: Generated<boolean>;
};
export type user_eventtype = {
    A: number;
    B: number;
};
export type UserFeatures = {
    userId: number;
    featureId: string;
    enabled: boolean;
    assignedAt: Generated<Timestamp>;
    assignedBy: string;
    updatedAt: Timestamp;
};
export type UserFilterSegmentPreference = {
    id: Generated<number>;
    userId: number;
    tableIdentifier: string;
    segmentId: number | null;
    systemSegmentId: string | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type UserHolidaySettings = {
    id: Generated<number>;
    userId: number;
    countryCode: string | null;
    disabledIds: string[];
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type UserPassword = {
    hash: string;
    userId: number;
};
export type VerificationToken = {
    id: Generated<number>;
    identifier: string;
    token: string;
    expires: Timestamp;
    expiresInDays: number | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    teamId: number | null;
    secondaryEmailId: number | null;
};
export type VerifiedEmail = {
    id: Generated<number>;
    userId: number | null;
    teamId: number | null;
    email: string;
};
export type VerifiedNumber = {
    id: Generated<number>;
    userId: number | null;
    teamId: number | null;
    phoneNumber: string;
};
export type VideoCallGuest = {
    id: string;
    bookingUid: string;
    email: string;
    name: string;
    joinedAt: Timestamp | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type Watchlist = {
    id: string;
    type: WatchlistType;
    value: string;
    description: string | null;
    isGlobal: Generated<boolean>;
    organizationId: number | null;
    action: Generated<WatchlistAction>;
    source: Generated<WatchlistSource>;
    lastUpdatedAt: Generated<Timestamp>;
};
export type WatchlistAudit = {
    id: string;
    type: WatchlistType;
    value: string;
    description: string | null;
    action: Generated<WatchlistAction>;
    changedAt: Generated<Timestamp>;
    changedByUserId: number | null;
    watchlistId: string | null;
};
export type WatchlistEventAudit = {
    id: string;
    watchlistId: string;
    eventTypeId: number;
    actionTaken: WatchlistAction;
    timestamp: Generated<Timestamp>;
};
export type Webhook = {
    id: string;
    userId: number | null;
    teamId: number | null;
    eventTypeId: number | null;
    platformOAuthClientId: string | null;
    /**
     * @zod.string.url()
     */
    subscriberUrl: string;
    payloadTemplate: string | null;
    createdAt: Generated<Timestamp>;
    active: Generated<boolean>;
    eventTriggers: WebhookTriggerEvents[];
    appId: string | null;
    secret: string | null;
    platform: Generated<boolean>;
    time: number | null;
    timeUnit: TimeUnit | null;
    version: Generated<string>;
};
export type WebhookScheduledTriggers = {
    id: Generated<number>;
    jobName: string | null;
    subscriberUrl: string;
    payload: string;
    startAfter: Timestamp;
    retryCount: Generated<number>;
    createdAt: Generated<Timestamp | null>;
    appId: string | null;
    webhookId: string | null;
    bookingId: number | null;
};
export type WorkspacePlatform = {
    id: Generated<number>;
    /**
     * @zod.string.min(1)
     */
    slug: string;
    /**
     * @zod.string.min(1)
     */
    name: string;
    description: string;
    /**
     * @zod.import(["import { serviceAccountKeySchema } from '../../zod-utils'"]).custom.use(serviceAccountKeySchema)
     */
    defaultServiceAccountKey: unknown;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    enabled: Generated<boolean>;
};
export type WrongAssignmentReport = {
    id: string;
    bookingUid: string;
    reportedById: number | null;
    correctAssignee: string | null;
    additionalNotes: string;
    teamId: number | null;
    status: Generated<WrongAssignmentReportStatus>;
    reviewedById: number | null;
    reviewedAt: Timestamp | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type DB = {
    _PlatformOAuthClientToUser: PlatformOAuthClientToUser;
    _user_eventtype: user_eventtype;
    AccessCode: AccessCode;
    AccessToken: AccessToken;
    Account: Account;
    Agent: Agent;
    ApiKey: ApiKey;
    App: App;
    AssignmentReason: AssignmentReason;
    Attendee: Attendee;
    Attribute: Attribute;
    AttributeOption: AttributeOption;
    AttributeSyncFieldMapping: AttributeSyncFieldMapping;
    AttributeSyncRule: AttributeSyncRule;
    AttributeToUser: AttributeToUser;
    AuditActor: AuditActor;
    Availability: Availability;
    avatars: Avatar;
    Booking: Booking;
    BookingAudit: BookingAudit;
    BookingDenormalized: BookingDenormalized;
    BookingInternalNote: BookingInternalNote;
    BookingReference: BookingReference;
    BookingReport: BookingReport;
    BookingSeat: BookingSeat;
    BookingTimeStatus: BookingTimeStatus;
    BookingTimeStatusDenormalized: BookingTimeStatusDenormalized;
    CalAiPhoneNumber: CalAiPhoneNumber;
    CalendarCache: CalendarCache;
    CalendarCacheEvent: CalendarCacheEvent;
    CalVideoSettings: CalVideoSettings;
    Credential: Credential;
    CreditBalance: CreditBalance;
    CreditExpenseLog: CreditExpenseLog;
    CreditPurchaseLog: CreditPurchaseLog;
    DelegationCredential: DelegationCredential;
    Deployment: Deployment;
    DestinationCalendar: DestinationCalendar;
    DSyncData: DSyncData;
    DSyncTeamGroupMapping: DSyncTeamGroupMapping;
    EventType: EventType;
    EventTypeCustomInput: EventTypeCustomInput;
    EventTypeTranslation: EventTypeTranslation;
    Feature: Feature;
    Feedback: Feedback;
    FilterSegment: FilterSegment;
    HashedLink: HashedLink;
    HolidayCache: HolidayCache;
    Host: Host;
    HostGroup: HostGroup;
    HostLocation: HostLocation;
    InstantMeetingToken: InstantMeetingToken;
    IntegrationAttributeSync: IntegrationAttributeSync;
    InternalNotePreset: InternalNotePreset;
    ManagedOrganization: ManagedOrganization;
    Membership: Membership;
    MonthlyProration: MonthlyProration;
    NotificationsSubscriptions: NotificationsSubscriptions;
    OAuthClient: OAuthClient;
    OrganizationBilling: OrganizationBilling;
    OrganizationOnboarding: OrganizationOnboarding;
    OrganizationSettings: OrganizationSettings;
    OutOfOfficeEntry: OutOfOfficeEntry;
    OutOfOfficeReason: OutOfOfficeReason;
    Payment: Payment;
    PlatformAuthorizationToken: PlatformAuthorizationToken;
    PlatformBilling: PlatformBilling;
    PlatformOAuthClient: PlatformOAuthClient;
    Profile: Profile;
    RateLimit: RateLimit;
    RefreshToken: RefreshToken;
    ReminderMail: ReminderMail;
    ResetPasswordRequest: ResetPasswordRequest;
    Role: Role;
    RolePermission: RolePermission;
    Schedule: Schedule;
    SeatChangeLog: SeatChangeLog;
    SecondaryEmail: SecondaryEmail;
    SelectedCalendar: SelectedCalendar;
    SelectedSlots: SelectedSlots;
    Session: Session;
    Task: Task;
    Team: Team;
    TeamBilling: TeamBilling;
    TeamFeatures: TeamFeatures;
    TempOrgRedirect: TempOrgRedirect;
    Tracking: Tracking;
    TravelSchedule: TravelSchedule;
    UserFeatures: UserFeatures;
    UserFilterSegmentPreference: UserFilterSegmentPreference;
    UserHolidaySettings: UserHolidaySettings;
    UserPassword: UserPassword;
    users: User;
    VerificationToken: VerificationToken;
    VerifiedEmail: VerifiedEmail;
    VerifiedNumber: VerifiedNumber;
    VideoCallGuest: VideoCallGuest;
    Watchlist: Watchlist;
    WatchlistAudit: WatchlistAudit;
    WatchlistEventAudit: WatchlistEventAudit;
    Webhook: Webhook;
    WebhookScheduledTriggers: WebhookScheduledTriggers;
    WorkspacePlatform: WorkspacePlatform;
    WrongAssignmentReport: WrongAssignmentReport;
};
