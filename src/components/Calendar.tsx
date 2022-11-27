import { Box, Button, Stack } from '@mui/material'
import { useState } from 'react'
import ReactCalendar from 'react-calendar'

const TODAY = new Date()

export const Calendar = () => {
  const [calendarValue, setCalendarValue] = useState<Date>(TODAY)
  const [choosenDate, setChoosenDate] = useState<Date[]>([])

  const onCancel = () => {
    setCalendarValue(TODAY)
  }

  const onSave = () => {
    setChoosenDate([...choosenDate, calendarValue])
    //fetch calendarValue
  }

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
          cancel
        </Button>
        <Button variant='contained' onClick={onSave}>
          save
        </Button>
      </Stack>
    </Box>
  )
}
