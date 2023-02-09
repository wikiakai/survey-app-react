import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          mb: '20px',
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography>
          This App created by <b>wikiakai</b>
        </Typography>
        <a href="https://github.com/wikiakai/survey-app-react" target="_blank">
          documentation
        </a>
      </Box>
    </Box>
  )
}

export default Welcome
