import {Link, Stack} from '@mui/material'

const menuItems = ['marketplace', 'resource', 'about']
const MenuItems = () => {
  return (
    <Stack direction="row" spacing={5} alignItems="center">
      {menuItems.map((menuItem, i) => (
        <Link
          key={i}
          sx={{textTransform: 'capitalize', color: 'black'}}
          component="button"
          underline="hover"
        >
          {menuItem}
        </Link>
      ))}
    </Stack>
  )
}

export default MenuItems
