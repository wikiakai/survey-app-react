import React from 'react'
import { Button, Box } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { useNavigate } from 'react-router-dom'

const ResetButton = () => {
  const navigate = useNavigate()

  const handleReset = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <Box>
      <Button
        variant="outlined"
        startIcon={<RestartAltIcon />}
        color="error"
        onClick={handleReset}
      >
        Restart
      </Button>
    </Box>
  )
}

export default ResetButton
