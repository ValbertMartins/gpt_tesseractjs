import { generateResponse } from "@/services/gpt"
import { NextApiRequest, NextApiResponse } from "next"

export default async function getResponseChatGPT(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(400).json({ message: "invalid route" })

  if (!req.body.message) return res.status(400).json({ message: "message required" })

  const responseMessage = await generateResponse(req.body.message)

  return res.status(200).json({ message: responseMessage })
}
