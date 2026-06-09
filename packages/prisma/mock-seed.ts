/**
 * Seed data for DB-less preview mode (MOCK_DB=1).
 *
 * Written into the in-memory prismock store once at startup (./mock-client.ts).
 * prismock executes real query semantics, so this single coherent dataset
 * feeds every route: the logged-in user, their schedule/availability, a couple
 * of event types, and a sample booking. Add more entities here to populate
 * additional pages — keep ids stable and relations consistent.
 *
 * Each create is best-effort: a failure on one entity is logged and skipped so
 * the rest of the seed (and the app boot) still proceeds.
 */
const now = new Date("2026-01-01T00:00:00.000Z");
const later = new Date("2026-06-01T10:00:00.000Z");
const laterEnd = new Date("2026-06-01T10:30:00.000Z");

const USER_ID = 1;
const SCHEDULE_ID = 1;

async function tryCreate(label: string, fn: () => Promise<unknown>) {
  try {
    await fn();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(`[MOCK_DB] seed skip ${label}:`, (e as Error)?.message);
  }
}

export async function seedMockDb(pm: any): Promise<void> {
  await tryCreate("user", () =>
    pm.user.create({
      data: {
        id: USER_ID,
        username: "preview",
        name: "Preview User",
        email: "preview@cal.local",
        emailVerified: now,
        bio: "Preview account running on mock data.",
        timeZone: "UTC",
        weekStart: "Sunday",
        locale: "en",
        defaultScheduleId: SCHEDULE_ID,
        completedOnboarding: true,
        identityProvider: "CAL",
        role: "USER",
        timeFormat: 12,
        allowDynamicBooking: true,
        createdDate: now,
        metadata: {},
      },
    })
  );

  await tryCreate("schedule", () =>
    pm.schedule.create({
      data: { id: SCHEDULE_ID, userId: USER_ID, name: "Working Hours", timeZone: "UTC" },
    })
  );

  // Mon–Fri 09:00–17:00 (startTime/endTime are minutes-from-midnight DateTimes in Cal.com).
  await tryCreate("availability", () =>
    pm.availability.create({
      data: {
        id: 1,
        scheduleId: SCHEDULE_ID,
        userId: USER_ID,
        days: [1, 2, 3, 4, 5],
        startTime: new Date("1970-01-01T09:00:00.000Z"),
        endTime: new Date("1970-01-01T17:00:00.000Z"),
      },
    })
  );

  await tryCreate("eventType:30min", () =>
    pm.eventType.create({
      data: {
        id: 1,
        title: "30 Min Meeting",
        slug: "30min",
        description: "A quick 30 minute meeting.",
        length: 30,
        userId: USER_ID,
        position: 0,
        hidden: false,
        scheduleId: SCHEDULE_ID,
        metadata: {},
      },
    })
  );

  await tryCreate("eventType:60min", () =>
    pm.eventType.create({
      data: {
        id: 2,
        title: "60 Min Meeting",
        slug: "60min",
        description: "An in-depth 60 minute meeting.",
        length: 60,
        userId: USER_ID,
        position: 1,
        hidden: false,
        scheduleId: SCHEDULE_ID,
        metadata: {},
      },
    })
  );

  await tryCreate("booking", () =>
    pm.booking.create({
      data: {
        id: 1,
        uid: "preview-booking-0001",
        title: "30 Min Meeting between Preview User and Sample Guest",
        description: null,
        startTime: later,
        endTime: laterEnd,
        userId: USER_ID,
        eventTypeId: 1,
        status: "accepted",
        createdAt: now,
      },
    })
  );

  await tryCreate("attendee", () =>
    pm.attendee.create({
      data: {
        id: 1,
        bookingId: 1,
        name: "Sample Guest",
        email: "guest@example.com",
        timeZone: "UTC",
      },
    })
  );
}
