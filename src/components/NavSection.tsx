import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { alpha, styled, useTheme } from '@mui/material/styles'
import { ReactNode } from 'react'
import { matchPath, NavLink as RouterLink, useLocation } from 'react-router-dom'

const ListItemStyle = styled((props: any) => <ListItemButton disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
  })
)

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

// ----------------------------------------------------------------------

type NavConfigItem = {
  title: string
  path: string
  icon: ReactNode
}

interface NavItemProps {
  item: NavConfigItem
  active: any
}

function NavItem({ item, active }: NavItemProps) {
  const theme = useTheme()

  const isActiveRoot = active(item.path)

  const { title, path, icon } = item

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
    </ListItemStyle>
  )
}

interface NavSectionProps {
  navConfig: NavConfigItem[]
}

export const NavSection = ({ navConfig }: NavSectionProps) => {
  const { pathname } = useLocation()

  const match = (path: string) => (path ? !!matchPath({ path, end: false }, pathname) : false)

  return (
    <Box>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  )
}
