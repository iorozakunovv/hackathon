import { Box, Button, Stack, TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

export const Login = () => {
  const [username, setUserName] = useState('996555123224')
  const [password, setPassword] = useState('test1234')

  const loginSubmit = (e: any) => {
    e.preventDefault()
    const payload = {
      phone: username,
      password,
    }
    axios('https://dyikan.herokuapp.com/api-user/login/', {
      method: 'post',
      data: payload,
    }).then(({ data }) => localStorage.setItem('tokens', JSON.stringify(data.tokens)))
  }

  return (
    <Box>
      <Stack component='form' onSubmit={loginSubmit}>
        <TextField value={username} onChange={(e) => setUserName(e.target.value)} />
        <TextField value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type='submit'>submit</Button>
      </Stack>
    </Box>
  )
}
