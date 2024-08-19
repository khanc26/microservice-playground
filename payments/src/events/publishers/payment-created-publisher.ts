import { Subjects, Publisher, PaymentCreatedEvent } from '@khaitpromaxticket/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
