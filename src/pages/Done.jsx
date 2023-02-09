import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ResetButton from '../components/ResetButton'
import { QUESTIONS } from '../data'

const Done = () => {
  const navigate = useNavigate()

  const [arr, setArr] = React.useState([])

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

  const buildMap = (keys, values) => {
    const map = new Map()
    for (let i = 0; i < keys.length; i++) {
      map.set(keys[i], values[i])
    }
    return map
  }

  return (
    <Box
      sx={{
        padding: '90px',
        background: 'hsla(339, 100%, 55%, 1)',
        background:
          'linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {arr[0] === null ? (
        <Typography variant="h3" fontSize="32px" color="#fff">
          Jawabanmu belum ada
        </Typography>
      ) : (
        <>
          <Typography variant="h3" fontSize="32px" color="#fff">
            Survey telah selesai, terima kasih
          </Typography>
          <Typography variant="h5" fontSize="28px" color="#fff">
            Jawabanmu:{' '}
          </Typography>

          <Stack direction="column">
            {QUESTIONS.map((a, index) => (
              <>
                <Typography fontSize="26px" color="#fff">
                  {a.q}
                </Typography>
                <Typography fontSize="22px" color="#1a237e">
                  {arr[index]}
                </Typography>
              </>
            ))}
          </Stack>
        </>
      )}
      <ResetButton />
    </Box>
  )
}

export default Done
