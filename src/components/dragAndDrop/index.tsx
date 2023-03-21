import React, { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"

const DragAndDrop = () => {
  const [image, setImage] = useState<File | null>(null)
  const [textTransformed, setTextTrasformed] = useState("")

  const { getInputProps, getRootProps, acceptedFiles, fileRejections } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  })

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setImage(acceptedFiles[0])
    }
  }, [acceptedFiles])

  return (
    <div {...getRootProps()}>
      drop files here
      <input {...getInputProps()} />
      {image && <img src={URL.createObjectURL(image)} />}
    </div>
  )
}

export default DragAndDrop
