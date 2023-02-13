import { Button, Grid, styled } from '@mui/material';

export const FormContainer = styled(Grid)`
  width: 100%;
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 100%;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 40%;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 40%;
  }
`;

export const ButtonForm = styled(Button)({
  background: '#0876DD',
  color: '#000000',
  boxShadow: '0 10px 20px -10px',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#3c52b2',
  },
});
