import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import { Calendar } from '../components/Calendar'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'

export const SuuBar = () => {
  const [selectValue, setSelectValue] = useState('участок №4')

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string)
  }

  return (
    <Box>
      <Typography mb={2.5} component='h1' variant='h4'>
        Асыл Жекшенбеков
      </Typography>
      <Typography component='p' variant='h6' mb={4}>
        Книга № 1819232103
      </Typography>
      <FormControl sx={{ minWidth: 200, mb: 2.5 }}>
        <Select value={selectValue} onChange={handleChange}>
          <MenuItem value='участок №4'>участок №4</MenuItem>
        </Select>
      </FormControl>
      <Calendar />
    </Box>
  )
}
