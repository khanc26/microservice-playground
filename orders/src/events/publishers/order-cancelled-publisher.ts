import { Subjects, Publisher, OrderCancelledEvent } from '@khaitpromaxticket/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
