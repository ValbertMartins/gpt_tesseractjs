import { Configuration, OpenAIApi } from "openai"

interface ApiError {
  response: {
    statusText: string
  }
}

export async function generateResponse(text: string) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })

  try {
    const openai = new OpenAIApi(configuration)
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: text }],
    })
    const responseMessage = completion.data.choices[0].message
    return responseMessage
  } catch (error) {
    const err = error as ApiError
    throw new Error(err.response.statusText)
  }
}
