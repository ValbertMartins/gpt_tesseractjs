import { ChatResponse } from "@/interfaces"
import axios from "axios"

export async function fetchResponseData(text: string) {
  const response = await axios.post<ChatResponse>(`/api/getResponse`, {
    message: text,
  })

  return response.data
}
