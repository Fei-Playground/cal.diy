/**
 * Fixtures for DB-less preview mode (MOCK_DB=1).
 *
 * `fixtures` is keyed by Prisma model name (the delegate, e.g. `user`,
 * `eventType`, `booking`). For each model you can provide:
 *   - `list`: array returned by findMany / createManyAndReturn / count
 *   - `one`:  object returned by findUnique / findFirst (defaults to list[0])
 *
 * Anything not listed here falls back to [] / null, so the app boots with
 * empty states. Add entries to make a specific page render real content.
 */

const now = "2026-01-01T00:00:00.000Z";

export const mockUser = {
  id: 1,
  uuid: "00000000-0000-0000-0000-000000000001",
  username: "preview",
  name: "Preview User",
  email: "preview@cal.local",
  emailVerified: now,
  bio: null,
  avatarUrl: null,
  timeZone: "UTC",
  weekStart: "Sunday",
  locale: "en",
  theme: null,
  appTheme: null,
  defaultScheduleId: 1,
  completedOnboarding: true,
  identityProvider: "CAL",
  role: "USER",
  organizationId: null,
  locked: false,
  movedToProfileId: null,
  metadata: {},
  createdDate: now,
  // Relations that session enrichment / findUnlockedUserForSession select.
  // Keep arrays as [] and to-one relations as null so `.filter`/spreads don't throw.
  selectedCalendars: [],
  destinationCalendar: null,
  profiles: [],
  teams: [],
  schedules: [],
  credentials: [],
  password: null,
  twoFactorEnabled: false,
  trialEndsAt: null,
  hideBranding: false,
  brandColor: null,
  darkBrandColor: null,
  timeFormat: 12,
  allowDynamicBooking: true,
  allowSEOIndexing: true,
  receiveMonthlyDigestEmail: false,
  requiresBookerEmailVerification: false,
  identityProviderId: null,
};

export const fixtures: Record<string, { list?: unknown[]; one?: unknown }> = {
  user: { one: mockUser, list: [mockUser] },
  // Add per-page fixtures below as you discover what each route queries, e.g.:
  // eventType: { list: [{ id: 1, title: "30 Min Meeting", slug: "30min", length: 30 }] },
  // schedule:  { list: [{ id: 1, name: "Working Hours", userId: 1 }] },
};

/**
 * Fake authenticated session returned by getServerSession in mock mode,
 * so pages don't redirect to /auth/login.
 */
export const mockSession = {
  hasValidLicense: true,
  expires: "2099-01-01T00:00:00.000Z",
  user: {
    id: mockUser.id,
    uuid: mockUser.uuid,
    name: mockUser.name,
    username: mockUser.username,
    email: mockUser.email,
    emailVerified: mockUser.emailVerified,
    email_verified: true,
    completedOnboarding: true,
    role: mockUser.role,
    image: null,
    belongsToActiveTeam: false,
    org: undefined,
    orgAwareUsername: mockUser.username,
    locale: "en",
    profile: {
      id: null,
      upId: `usr-${mockUser.id}`,
      username: mockUser.username,
      organizationId: null,
      organization: null,
      name: mockUser.name,
      avatarUrl: null,
      startTime: 0,
      endTime: 1440,
      bufferTime: 0,
    },
  },
  profileId: null,
  upId: `usr-${mockUser.id}`,
};
