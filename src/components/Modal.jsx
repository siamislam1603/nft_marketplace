import CloseIcon from '@mui/icons-material/Close'
import {DialogContent, DialogTitle, IconButton, Stack} from '@mui/material'
import {DialogStyled} from '../styles'

const Modal = ({
  open,
  onClose,
  children,
  title,
  modalContentStyle,
  maskTop,
  modalHeaderVisible,
}) => {
  const contentStyle = modalContentStyle ?? {}
  return (
    <DialogStyled
      top={maskTop ?? 0}
      open={open}
      onClose={onClose}
      content_style={contentStyle}
      style={{
        transformOrigin: 'bottom',
      }}
    >
      {modalHeaderVisible ? (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          borderBottom={'1px solid #eee'}
        >
          <DialogTitle>{title}</DialogTitle>
          <IconButton sx={{mr: 3}} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      ) : null}
      <DialogContent>{children}</DialogContent>
    </DialogStyled>
  )
}

export default Modal
