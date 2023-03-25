import { ChatCompletionResponseMessage } from "openai"

export interface ChatResponse {
  message: ChatCompletionResponseMessage
}
export interface GenericTypeError {
  name: string
  message: string
}
