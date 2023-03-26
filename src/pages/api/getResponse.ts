import { generateResponse } from "@/services/gpt"
import { NextApiRequest, NextApiResponse } from "next"

export default async function getResponseChatGPT(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(400).json({ message: "invalid route" })

  if (!req.body.message || typeof req.body.message !== "string")
    return res.status(400).json({ message: "message required" })

  try {
    const responseMessage = await generateResponse(req.body.message)
    return res.status(200).json({ message: responseMessage })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message })
    }
    return res.status(400).json({ message: "unknown error" })
  }
}
