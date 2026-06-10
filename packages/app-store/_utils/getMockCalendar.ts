import type {
  Calendar,
  EventBusyDate,
  IntegrationCalendar,
  NewCalendarEventType,
} from "@calcom/types/Calendar";
import type { CredentialForCalendarService } from "@calcom/types/Credential";

/**
 * DB-less preview mode (MOCK_DB=1): a fake calendar adapter returned by
 * getCalendar() in place of any real app-store calendar service. It lets the
 * app behave as if one calendar is connected — without OAuth or any external
 * API call:
 *   - getAvailability() returns [] → no busy times → every slot is bookable
 *   - createEvent/updateEvent return a synthetic event (booking "lands" in the calendar)
 *   - listCalendars() exposes a single mock calendar in Settings → Calendars
 */
let eventCounter = 0;

export function getMockCalendar(credential: CredentialForCalendarService): Calendar {
  const credentialId = credential.id ?? 1;
  const email = "preview@cal.local";
  const externalId = "preview@cal.local";
  const integration = "google_calendar";

  const makeEvent = (): NewCalendarEventType => {
    eventCounter += 1;
    return {
      uid: `mock-cal-event-${credentialId}-${eventCounter}`,
      id: `mock-cal-event-${credentialId}-${eventCounter}`,
      type: integration,
      password: "",
      url: "",
      additionalInfo: {},
    };
  };

  return {
    getCredentialId: () => credentialId,
    async createEvent() {
      return makeEvent();
    },
    async updateEvent() {
      return makeEvent();
    },
    async deleteEvent() {
      return;
    },
    async getAvailability(): Promise<EventBusyDate[]> {
      // No busy times: the whole working window is open for booking.
      return [];
    },
    async listCalendars(): Promise<IntegrationCalendar[]> {
      return [
        {
          externalId,
          integration,
          name: "Preview Calendar",
          primary: true,
          readOnly: false,
          email,
          primaryEmail: email,
          credentialId,
        },
      ];
    },
  };
}
