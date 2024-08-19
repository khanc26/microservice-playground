import { Publisher, Subjects, TicketCreatedEvent } from '@khaitpromaxticket/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
