import { ChatResponse } from "@/interfaces"
import axios, { AxiosError } from "axios"

export async function fetchResponseData(text: string) {
  try {
    const response = await axios.post<ChatResponse>(`/api/getResponse`, {
      message: text,
    })

    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message)
    } else {
      throw new Error((error as Error).message)
    }
  }
}
