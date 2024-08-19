import { Publisher, Subjects, TicketUpdatedEvent } from '@khaitpromaxticket/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
