import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@khaitpromaxticket/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
