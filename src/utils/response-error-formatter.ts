type ResponseError = {
  name: string;
  message: string;
};

export class ResponseErrorFormatter {
  static format(error: Error): ResponseError {
    return {
      name: error.name,
      message: error.message
    };
  }
}
