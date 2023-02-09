import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Wrapper from '../components/Wrapper'
const Welcome = () => {
  return (
    <Box
      sx={{
        padding: '90px',
        backgroundColor: '#4dabf5',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: '#fff',
          fontSize: '32px',
          fontWeight: '600',
        }}
      >
        Welcome
      </Typography>

      <Link to="/survey">Take survey</Link>
    </Box>
  )
}

export default Welcome
