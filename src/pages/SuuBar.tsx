import {
  Box,
  Button,
  Divider,
  FormControl,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material'
import { Calendar } from '../components/Calendar'
import { useEffect, useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import axios from 'axios'
import Grid from '@mui/material/Unstable_Grid2'

export const SuuBar = () => {
  const [selectValue, setSelectValue] = useState('участок №4')

  const [list, setList] = useState({
    address: '',
    book_price: 0,
    id: 0,
    land_area: 0,
    reqid: '0',
    water_volume: 0,
  })

  const tokens = localStorage.getItem('tokens')
  const accessToken = tokens ? JSON.parse(tokens).access : ''

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string)
  }

  useEffect(() => {
    if (!accessToken) return
    axios('https://dyikan.herokuapp.com/api-plot/list/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then(({ data }) => {
      axios(`https://dyikan.herokuapp.com/api-plot/info/${data[0].id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(({ data }) => setList(data))
    })
  }, [accessToken])

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid md={6} xs={12}>
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
        </Grid>
        <Grid md={6} xs={12} alignSelf='end'>
          <Paper sx={{ p: 3 }}>
            <Typography variant='h6' mb={2}>
              Информация
            </Typography>
            <Typography variant='subtitle1' mb={2}>
              Connect with one of our available wallet providers or create a new one.
            </Typography>
            <Divider />
            <Stack flexDirection='row' justifyContent='space-between' paddingY={2}>
              <Typography>Участок</Typography>
              <Typography>{list?.land_area} га</Typography>
            </Stack>
            <Divider />
            <Stack flexDirection='row' justifyContent='space-between' paddingY={2}>
              <Typography>Объем воды</Typography>
              <Typography>{list?.water_volume} м3</Typography>
            </Stack>
            <Divider />
            <Stack flexDirection='row' justifyContent='space-between' paddingY={2}>
              <Typography>Стоимость </Typography>
              <Typography>{list?.book_price} сом</Typography>
            </Stack>
            <Divider />
            <Button fullWidth variant='contained' sx={{ mt: 2 }}>
              Оплатить
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
