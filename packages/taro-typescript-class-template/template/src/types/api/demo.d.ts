declare namespace Login {
  interface LoginParams {
    jsCode: string;
  }

  interface LoginResponse extends Http.Response {
    data: {
      useName: string
    }
  }
}