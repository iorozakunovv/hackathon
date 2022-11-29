import { Box, Button, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import ReactCalendar from 'react-calendar'
import axios from 'axios'

const TODAY = new Date()

export const Calendar = () => {
  const [calendarValue, setCalendarValue] = useState<Date>(TODAY)
  const [choosenDate, setChoosenDate] = useState<Date[]>([])

  const tokens = localStorage.getItem('tokens')
  const accessToken = tokens ? JSON.parse(tokens).access : ''

  const onCancel = () => {
    setCalendarValue(TODAY)
  }

  const onSave = async () => {
    setChoosenDate([...choosenDate, calendarValue])

    if (!accessToken) return
    // надо отключить корс на бэке
    try {
      const response = axios({
        method: 'post',
        url: 'https://dyikan.herokuapp.com/api-plot/book-channel/create/',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          plot: 1,
          date: `${calendarValue.getFullYear()}-${calendarValue.getMonth() + 1}-${
            calendarValue.getDate() + 1
          }`,
        },
      })
      console.log('onSave ~ response', response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    axios('https://dyikan.herokuapp.com/api-plot/book-channel/list/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((data) => console.log(data, 'book'))
      .catch((err) => console.log(err))
  }, [])

  return (
    <Box width='fit-content'>
      <ReactCalendar
        onChange={setCalendarValue}
        value={calendarValue}
        tileDisabled={({ activeStartDate, date, view }: any) => {
          if (!choosenDate) return
          return choosenDate.find((el) => el.getTime() === date.getTime())
        }}
      />
      <Stack flexDirection='row' gap={2} justifyContent='flex-end' mt={2}>
        <Button variant='contained' onClick={onCancel}>
          Cancel
        </Button>
        <Button variant='contained' onClick={onSave}>
          Save
        </Button>
      </Stack>
    </Box>
  )
}
