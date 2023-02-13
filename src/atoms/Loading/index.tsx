import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { FC } from 'react';

interface PropsModal {
  open: boolean;
}

const style = {
  position: 'absolute' as 'absolute',
  display: 'grid',
  placeItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100vh',
  p: 4,
};

const Loading: FC<PropsModal> = ({ open }) => {
  return (
    <>
      <Modal
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Fade
            in={true}
            style={{
              transitionDelay: open ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        </Box>
      </Modal>
    </>
  );
};

export default Loading;
