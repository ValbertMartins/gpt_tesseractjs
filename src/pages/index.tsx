import Chat from "@/components/chat"
import DragAndDrop from "@/components/dragdrop"
import { GetServerSideProps } from "next"
import { useState } from "react"

export default function Home(props: { value: number }) {
  const [textTransformed, setTextTransformed] = useState<string>("")
  console.log(textTransformed)
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
