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
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ResetButton from '../components/ResetButton'
import { pink } from '@mui/material/colors'
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
  const [loading, setLoading] = React.useState(false)
  const [timer, setTimer] = React.useState(15)

  const navigate = useNavigate()
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSend = () => {
    if (page === 10) {
      localStorage.setItem(`q${page}`, value)
      navigate('/done')
    } else {
      setTimer(15)
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
    setTimer(15)
    const progressPage = localStorage.getItem('progressPage')
    if (progressPage) {
      setPage(JSON.parse(progressPage))
    } else {
      setPage(1)
    }
  }, [page])

  useEffect(() => {
    const myTimer = setInterval(() => {
      setTimer(timer - 1)
    }, 1000)

    if (timer === 0) {
      navigate('/end')
    }
    return () => clearInterval(myTimer)
  }, [timer])

  return (
    <Box
      sx={{
        padding: '90px',
        background: 'hsla(148, 89%, 78%, 1)',
        background:
          'linear-gradient(270deg, hsla(148, 89%, 78%, 1) 0%, hsla(210, 81%, 22%, 1) 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: '-4px 0px 55px 17px rgba(17,163,157,0.41)',
      }}
    >
      {loading ? (
        <CircularProgress color="warning" />
      ) : (
        <>
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              gap: '15px',
              mb: '70px',
            }}
          >
            <Box>
              <Typography
                variant="h4"
                color="white"
                fontSize="28px"
                fontWeight="600"
              >
                Q{page}/10
              </Typography>
              <Typography color="white" fontSize="28px">
                {QUESTIONS[page - 1].q}
              </Typography>
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
                    sx={{
                      color: '#fff',
                    }}
                    value={QUESTIONS[page - 1].opt1}
                    control={
                      <Radio
                        sx={{
                          color: '#fff',
                          '&.Mui-checked': {
                            color: pink[600],
                          },
                        }}
                      />
                    }
                    label={QUESTIONS[page - 1].opt1}
                  />
                  <FormControlLabel
                    sx={{
                      color: '#fff',
                    }}
                    value={QUESTIONS[page - 1].opt2}
                    control={
                      <Radio
                        sx={{
                          color: '#fff',
                          '&.Mui-checked': {
                            color: pink[600],
                          },
                        }}
                      />
                    }
                    label={QUESTIONS[page - 1].opt2}
                  />
                  <FormControlLabel
                    sx={{
                      color: '#fff',
                    }}
                    value={QUESTIONS[page - 1].opt3}
                    control={
                      <Radio
                        sx={{
                          color: '#fff',
                          '&.Mui-checked': {
                            color: pink[600],
                          },
                        }}
                      />
                    }
                    label={QUESTIONS[page - 1].opt3}
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box
              sx={{
                mt: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <Button
                variant={value === '' ? 'outlined' : 'contained'}
                color="secondary"
                onClick={handleSend}
                disabled={value === ''}
              >
                {page === 10 ? 'Submit' : 'Next'}
              </Button>
              <Typography
                fontStyle="italic"
                color={timer < 10 ? pink[600] : '#fff'}
              >
                Your time: {timer}
              </Typography>
            </Box>
          </Stack>

          <ResetButton />
        </>
      )}
    </Box>
  )
}

export default Survey
