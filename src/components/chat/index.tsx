import React from "react"

interface Props {
  inputText: string
}

const Chat = ({ inputText }: Props) => {
  return <div className="m-4">{inputText}</div>
}

export default Chat
