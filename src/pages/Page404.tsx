import { Link as RouterLink } from 'react-router-dom'
import { Button, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(12, 0),
}))

export const Page404 = () => {
  return (
    <Container>
      <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Typography variant='h3' paragraph>
          Sorry, page not found!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
          sure to check your spelling.
        </Typography>

        <Button to='/home' size='large' variant='contained' component={RouterLink}>
          Go to Home
        </Button>
      </ContentStyle>
    </Container>
  )
}
