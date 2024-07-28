import { Publisher, OrderCreatedEvent, Subjects } from '@khaitpromaxticket/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
