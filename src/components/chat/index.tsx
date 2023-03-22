import React, { useEffect, useState } from "react"
import { fetchResponseData } from "@/utils/fetchResponseData"
import { ChatResponse } from "@/interfaces"
import Loading from "../loading"
import Image from "next/image"
interface Props {
  inputText: string
}

const Chat = ({ inputText }: Props) => {
  const [chatResponse, setChatResponse] = useState<ChatResponse | null>(null)
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   if (inputText.length > 0) {
  //     setLoading(true)
  //     fetchResponseData(inputText).then(responseData => {
  //       setChatResponse(responseData)
  //       setLoading(false)
  //     })
  //   }
  // }, [inputText])

  return (
    <div className="mx-4 mt-10">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex">
          <Image
            src="./ChatGPT_logo.svg"
            alt=""
            width={30}
            height={30}
          />

          <p className="text-purple-300 mt-10 ml-5">
            {chatResponse?.message.content} Periféricos - Interface - Controlador - Driver -
            Porta de E/S - Barramento.
          </p>
        </div>
      )}
    </div>
  )
}

export default Chat
