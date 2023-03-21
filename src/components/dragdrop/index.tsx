import { getTransformedText } from "@/services/tesseract/getTransformedText"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"

interface Props {
  setTextTransformed: Dispatch<SetStateAction<string>>
  textTransformed: string
}

const DragAndDrop = ({ setTextTransformed, textTransformed }: Props) => {
  const { getInputProps, getRootProps, acceptedFiles, isDragAccept, isDragReject } =
    useDropzone({
      maxFiles: 1,
      accept: {
        "image/*": [".jpeg", ".png"],
      },
    })

  const preview = acceptedFiles.length > 0 ? URL.createObjectURL(acceptedFiles[0]) : null

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const image = acceptedFiles[0]
      getTransformedText(image, "por").then(text => setTextTransformed(text))
    } else {
      setTextTransformed("")
    }
  }, [acceptedFiles])

  return (
    <div
      {...getRootProps({})}
      className={`rounded-md mx-4 border-dashed border-purple-200 border-2 flex justify-center items-center transition-all min-h-sm  ${
        isDragAccept && "bg-purple-200"
      } ${isDragReject && "bg-red-600 "}`}
    >
      <input {...getInputProps()} />
      {preview ? (
        <img
          src={preview}
          className="w-full"
        />
      ) : (
        <p
          className={`text-2xl font-semibold transition-all text-purple-300 ${
            isDragAccept && "text-white"
          }`}
        >
          Drag and drop or browse
        </p>
      )}
    </div>
  )
}

export default DragAndDrop
