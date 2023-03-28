import React, { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"
import { fetchResponseData } from "@/utils/fetchResponseData"
import { ChatResponse } from "@/interfaces"
import Loading from "../loading"

interface Props {
  inputText: string
}

const Chat = ({ inputText }: Props) => {
  const [chatResponse, setChatResponse] = useState<ChatResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (inputText.length > 0) {
      setLoading(true)
      fetchResponseData(inputText)
        .then(responseData => {
          setChatResponse(responseData)
          setLoading(false)
        })
        .catch(promiseError => setError(promiseError))
        .finally(() => setLoading(false))
    }
  }, [inputText])

  return (
    <div
      className="mx-4 mt-10"
      role="container"
    >
      {loading ? (
        <Loading />
      ) : (
        <div>
          {chatResponse && (
            <div className="flex items-start">
              <img
                src="./ChatGPT_logo.svg"
                alt="chat gpt logo"
                width={30}
              />

              <div className="text-sky-500 mt-2 ml-5 font-normal">
                <Typewriter
                  onInit={typewriter => {
                    typewriter.changeDelay(50).typeString(chatResponse.message.content).start()
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {error && !loading && (
        <div
          className="text-xs text-red-600 text-center"
          role={error.message}
        >
          {error.message}
        </div>
      )}
    </div>
  )
}

export default Chat
