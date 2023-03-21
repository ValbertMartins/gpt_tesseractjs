import { getTransformedText } from "@/services/tesseract/getTransformedText"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"

interface Props {
  setTextTransformed: Dispatch<SetStateAction<string>>
  textTransformed: string
}

const DragAndDrop = ({ setTextTransformed, textTransformed }: Props) => {
  const { getInputProps, getRootProps, acceptedFiles, isDragAccept } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  })

  const preview = acceptedFiles.length > 0 ? acceptedFiles[0] : null

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const image = acceptedFiles[0]
      getTransformedText(image, "por").then(text => setTextTransformed(text))
    }
  }, [acceptedFiles])

  console.log(isDragAccept)
  return (
    <div
      {...getRootProps({})}
      className="rounded-md border-dashed border-purple-200 border-2 flex justify-center"
    >
      <input {...getInputProps()} />
      {preview ? <img src={URL.createObjectURL(preview)} /> : "drop files here"}
    </div>
  )
}

export default DragAndDrop
