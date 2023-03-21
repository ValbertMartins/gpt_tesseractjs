import React from "react"

interface Props {
  inputText: string
}

const Chat = ({ inputText }: Props) => {
  console.log(inputText)
  return (
    <div>
      chat
      {inputText}
    </div>
  )
}

export default Chat
