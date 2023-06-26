import {Dialog, styled} from '@mui/material'

export const DialogStyled = styled(Dialog)(
  ({top, content_style}) => `
    top:${top};
    .MuiBackdrop-root{
        top:${top};
    }
    .MuiDialog-container{
        display:flex;
        justify-content:center;
        align-items:${content_style.alignItems ?? 'center'};
    }
    .MuiDialog-paper{
        flex-grow:1;
        margin:0;
        display:block;
        max-width:${content_style.maxWidth ?? 'calc(100% - 64px)'};
        max-height:${content_style.maxHeight ?? 'calc(100% - 64px)'};
        height:${content_style.height ?? 'unset'};
        box-shadow:${content_style.boxShadow ?? 'none'};
        border-radius:${content_style.borderRadius ?? 0};
        background:${content_style.bg ?? 'white'};
    }
`
)
