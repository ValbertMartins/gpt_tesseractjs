import Tesseract from "tesseract.js"

interface Data {
  text: string
}

export async function getTransformedText(image: File, language: string = "por") {
  const { data } = await Tesseract.recognize(image, language)
  const { text } = data

  return text
}
