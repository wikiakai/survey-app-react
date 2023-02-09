import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Done = () => {
  const navigate = useNavigate()

  const handleReset = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <div>
      Done
      <Button onClick={handleReset}>Restart</Button>
    </div>
  )
}

export default Done
