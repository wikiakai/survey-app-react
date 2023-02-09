import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Welcome
      <Link to="/survey">Take survey</Link>
    </Box>
  )
}

export default Welcome
