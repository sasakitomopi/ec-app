'use client'

import React from 'react'
import { ClipLoader } from 'react-spinners'
import './css/style.css'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const LoadingSpinner = () => {
  const size = 50
  const color = '#123abc'
  return (
    <div className='spinner-container flex items-center justify-center min-h-screen'>
      <ClipLoader size={size} color={color} />
    </div>
  )
}

export default LoadingSpinner
