import Chat from "@/components/chat"
import DragAndDrop from "@/components/dragdrop"
import { useState } from "react"

export default function Home() {
  const [textTransformed, setTextTransformed] = useState<string>("")
  return (
    <main className="max-w-5xl mx-auto my-10">
      <DragAndDrop
        setTextTransformed={setTextTransformed}
        textTransformed={textTransformed}
      />
      <Chat inputText={textTransformed} />
    </main>
  )
}
