import { Box } from '@mui/material'
import React, { Children } from 'react'

const Wrapper = ({}) => {
  const { children } = this.props
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
      {children}
    </Box>
  )
}

export default Wrapper
