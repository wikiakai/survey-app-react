import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ResetButton from '../components/ResetButton'
import Wrapper from '../components/Wrapper'

const Done = () => {
  const navigate = useNavigate()

  const [arr, setArr] = React.useState([])
  const handleReset = () => {
    localStorage.clear()
    navigate('/')
  }

  useEffect(() => {
    const A1 = localStorage.getItem('q1')
    const A2 = localStorage.getItem('q2')
    const A3 = localStorage.getItem('q3')
    const A4 = localStorage.getItem('q4')
    const A5 = localStorage.getItem('q5')
    const A6 = localStorage.getItem('q6')
    const A7 = localStorage.getItem('q7')
    const A8 = localStorage.getItem('q8')
    const A9 = localStorage.getItem('q9')
    const A10 = localStorage.getItem('q10')

    setArr([A1, A2, A3, A4, A5, A6, A7, A8, A9, A10])
    console.log(arr)
  }, [])

  return (
    <Box
      sx={{
        padding: '90px',
        backgroundColor: '#ffea00',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {arr[0] === null ? (
        <Typography variant="h3" fontSize="32px">
          Jawabanmu belum ada
        </Typography>
      ) : (
        <>
          <Typography variant="h3" fontSize="32px">
            Survey telah selesai, terima kasih
          </Typography>
          <Typography variant="h5" fontSize="28px">
            Jawabanmu:{' '}
          </Typography>

          <Stack>
            {arr.map((a) => (
              <Typography>{a}</Typography>
            ))}
          </Stack>
        </>
      )}
      <ResetButton />
    </Box>
  )
}

export default Done
