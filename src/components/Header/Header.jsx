import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import UploadIcon from '@mui/icons-material/Upload'
import {
  Button,
  Container,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {useRef, useState} from 'react'
import {RiSearch2Line} from 'react-icons/ri'
import Modal from '../Modal'
import MenuItems from './MenuItems'
import {CompanyNameStyled, NavbarStyled, SearchFieldStyled} from './styles'

const Header = () => {
  const theme = useTheme()
  const [modalVisible, setModalVisible] = useState(false)
  const headerRef = useRef(null)
  const handleModalClose = () => {
    setModalVisible(false)
  }
  return (
    <>
      <NavbarStyled ref={headerRef} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{py: 3}}>
            <CompanyNameStyled>nfters</CompanyNameStyled>
            {useMediaQuery(theme.breakpoints.up('lg')) ? <MenuItems /> : null}
            <Stack
              flexGrow={1}
              direction="row"
              justifyContent="end"
              alignItems="center"
              spacing={3}
            >
              <SearchFieldStyled elevation={0} component="form">
                <InputBase sx={{ml: 1, flex: 1}} placeholder="Search" />
                <IconButton type="button" sx={{p: '10px'}}>
                  <RiSearch2Line />
                </IconButton>
              </SearchFieldStyled>
              <Button
                variant="contained"
                className="btns"
                sx={{color: 'white'}}
                startIcon={<UploadIcon />}
              >
                Upload
              </Button>
              <Button variant="outlined" className="btns" color="primary">
                Connect Wallet
              </Button>
            </Stack>
            <IconButton sx={{p: 0}} onClick={() => setModalVisible(!modalVisible)}>
              {modalVisible ? <CloseIcon sx={{fontSize: 35}} /> : <MenuIcon sx={{fontSize: 35}} />}
            </IconButton>
          </Toolbar>
        </Container>
      </NavbarStyled>

      <Modal
        open={modalVisible}
        onClose={handleModalClose}
        maskTop={(headerRef?.current?.clientHeight ?? 0) + 1 + 'px'}
        modalContentStyle={{maxWidth: '100%',maxHeight:'80px',height:'80px',alignItems:'start'}}
      >
        <Container maxWidth="xl">
          <MenuItems />
        </Container>
      </Modal>
    </>
  )
}

export default Header
