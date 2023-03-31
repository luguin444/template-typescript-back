import HttpError from './http-error';

class UnprocessableEntityError extends HttpError {
  constructor(message) {
    super(422, message, 'UnprocessableEntityError');
    this.message = message;
    this.name = 'UnprocessableEntityError';
    this.status = 422;
  }
}

export default UnprocessableEntityError;
