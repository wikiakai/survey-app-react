import {
  Box,
  Stack,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  CircularProgress,
} from '@mui/material'
import setItem from '../helpers/localStorage'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Survey = () => {
  const QUESTIONS = [
    {
      q: 'Apakah hewan favoritmu?',
      opt1: 'Kucing',
      opt2: 'Anjing',
      opt3: 'Lumba-luma',
    },
    {
      q: 'Apakah makanan favoritmu?',
      opt1: 'Gado-gado',
      opt2: 'Soto',
      opt3: 'Pecel',
    },
    {
      q: 'Apakah olahraga favoritmu?',
      opt1: 'Renang',
      opt2: 'Volly',
      opt3: 'Sepakbola',
    },
    {
      q: 'Apakah bahasa favoritmu?',
      opt1: 'Javascript',
      opt2: 'Dart',
      opt3: 'PHP',
    },
    {
      q: 'Apakah kamu suka berbelanja?',
      opt1: 'Ya',
      opt2: 'Tidak',
      opt3: 'tidak yakin',
    },
    {
      q: 'Apakah game favoritmu?',
      opt1: 'Dota 2',
      opt2: 'Mobile legends',
      opt3: 'Lato-lato',
    },
    {
      q: 'Siapakah olahragawan favoritmu?',
      opt1: 'Lionel Messi',
      opt2: 'Cristiano Ronaldo',
      opt3: 'Fajar Sadboy',
    },
    {
      q: 'Berapa banyak kamu jajan sehari?',
      opt1: '10.000',
      opt2: '20.000',
      opt3: '50.000',
    },
    {
      q: 'Berapa lama kamu tidur sehari?',
      opt1: '8 Jam',
      opt2: '12 Jam',
      opt3: '5 Jam',
    },
    {
      q: 'Apa kendaraan pribadimu?',
      opt1: 'Motor',
      opt2: 'Mobil',
      opt3: 'Kuda',
    },
  ]

  const [value, setValue] = React.useState('')
  const [page, setPage] = React.useState(1)
  const [lock, setLock] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [timer, setTimer] = React.useState(150)

  const navigate = useNavigate()
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSend = () => {
    if (page === 9) {
      navigate('/done')
    } else {
      setLoading(true)
      setPage(page + 1)
      localStorage.setItem(`progressPage`, page + 1)
      localStorage.setItem(`q${page}`, value)
      setValue('')
      setTimeout(() => {
        setLoading(false)
      }, 1000)
      clearTimeout()
    }
  }

  useEffect(() => {
    const progressPage = localStorage.getItem('progressPage')
    if (progressPage) {
      setPage(JSON.parse(progressPage))
    } else {
      setPage(1)
    }
  }, [page])

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1)
    }, 1000)
    if (timer === 0) {
      navigate('/end')
    }
    clearTimeout()
  }, [timer])

  return (
    <Box
      sx={{
        width: '800px',
        height: '600px',
        backgroundColor: '#03a9f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing="10"
        >
          <Box>
            <Typography variant="h4">Question {page}/10</Typography>
          </Box>
          <Box>
            <Typography>{QUESTIONS[page].q}</Typography>
            <Typography>Your time: {timer}</Typography>
          </Box>
          <Box>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={QUESTIONS[page].opt1}
                  control={<Radio />}
                  label={QUESTIONS[page].opt1}
                />
                <FormControlLabel
                  value={QUESTIONS[page].opt2}
                  control={<Radio />}
                  label={QUESTIONS[page].opt2}
                />
                <FormControlLabel
                  value={QUESTIONS[page].opt3}
                  control={<Radio />}
                  label={QUESTIONS[page].opt3}
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleSend}
              disabled={value === ''}
            >
              {lock ? 'Lock' : 'Send'}
            </Button>
          </Box>
        </Stack>
      )}
    </Box>
  )
}

export default Survey
