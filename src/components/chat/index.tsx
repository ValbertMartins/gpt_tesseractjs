import React, { useEffect, useState } from "react"
import { fetchResponseData } from "@/utils/fetchResponseData"
import { ChatResponse } from "@/interfaces"
import Loading from "../loading"

interface Props {
  inputText: string
}

const Chat = ({ inputText }: Props) => {
  const [chatResponse, setChatResponse] = useState<ChatResponse | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (inputText.length > 0) {
      setLoading(true)
      fetchResponseData(inputText).then(responseData => {
        setChatResponse(responseData)
        setLoading(false)
      })
    }
  }, [inputText])

  return (
    <div className="m-4">
      {loading ? (
        <Loading />
      ) : (
        <p className="text-purple-300">{chatResponse?.message.content} ✔</p>
      )}
    </div>
  )
}

export default Chat
