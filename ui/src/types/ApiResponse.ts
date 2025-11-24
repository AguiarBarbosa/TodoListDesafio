import type { HttpStatusCode } from "axios";

export interface ApiResponse<T> {
  success: boolean;
  statusCode: HttpStatusCode;
  message: string;
  data: T;
}
