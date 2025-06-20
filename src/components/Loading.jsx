import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <ClipLoader size={40} color={"#EC1C24"} />
    </div>
  )
}

export default Loading