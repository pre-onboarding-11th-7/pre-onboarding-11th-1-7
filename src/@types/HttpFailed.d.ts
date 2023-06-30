declare module "http" {
  interface HttpFailed {
    statusCode: number;
    message: string;
    error?: string;
  }
}
