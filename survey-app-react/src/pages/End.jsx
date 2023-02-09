import React from 'react'
import ResetButton from '../components/ResetButton'
import { Box } from '@mui/material'

const End = () => {
  return (
    <Box
      sx={{
        padding: '90px',
        background: '#000',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
        color: '#fff',
      }}
    >
      End, waktumu habis
      <ResetButton />
    </Box>
  )
}

export default End
