// pages/index.js
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useState } from 'react';
import UserTable from '../components/UserTable';
import LoadingButton from '@mui/lab/LoadingButton';
import Image from 'next/image';
import ParticlesComponent from '@/components/Particles';
import { Alert, Box, Modal, Snackbar, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
export const metadata = {
  title: 'smart-x.uz',
  description: 'smart-X kursi oquvchilari reytingi',
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90%',
    sm: 500,
  },
  bgcolor: 'background.paper',
  border: '2px solid #502B84',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

function HomePage() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = React.useState(false);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const handleClickSnack = (newState) => {
    setState({ ...newState, open: true });
  };
  useEffect(() => {
    const hasRun = localStorage.getItem('hasRun');
    if (!hasRun) {
      const timer = setTimeout(() => {
        setOpen(true);
        console.log('This will run after 1 second!');
        localStorage.setItem('hasRun', 'true');
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, []);
  const handleCloseSnack = () => {
    setState({ ...state, open: false });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch('/api/bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, number }),
    });
    if (!response.ok) {
      console.error('Failed to send data to bot');
      return;
    }

    // Clear the form
    setLoading(false);
    setOpen(false);
    handleClickSnack({ vertical: 'top', horizontal: 'center' });
    setName('');
    setNumber('');
  };

  const { vertical, horizontal } = state;
  return (
    <>
      <ParticlesComponent />
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={state.open}
          onClose={handleCloseSnack}
          key={vertical + horizontal}
          autoHideDuration={5000}
        >
          <Alert
            onClose={handleCloseSnack}
            severity="success"
            sx={{ width: '100%' }}
            variant="filled"
          >
            Buyurmangiz qabul qilindi! Tez orada siz bilan bog&apos;lanamiz!
          </Alert>
        </Snackbar>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <h2>Kursga buyurtma berish</h2>
              <h3 style={{ cursor: 'pointer' }} onClick={() => setOpen(false)}>
                <CloseIcon />
              </h3>
            </Box>
            <form onSubmit={handleSubmit} className="popup-form">
              <TextField
                id="standard-basic"
                label="Ism Familiya"
                variant="standard"
                value={name}
                color="secondary"
                onChange={(e) => setName(e.target.value)}
                required
              />

              <TextField
                color="secondary"
                id="standard-basic"
                label="Telefon raqam"
                variant="standard"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />

              <LoadingButton
                type="submit"
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
                style={{
                  backgroundColor: '#502B84',
                  marginTop: '1rem',
                }}
              >
                <span>Yuborish</span>
              </LoadingButton>
            </form>
          </Box>
        </Modal>
      </div>
      <nav className={'nav'}>
        <div className={'navContent'}>
          <Image
            className={'logoPhone'}
            alt="logo-x"
            src="/x-logo.png"
            width={60}
            height={60}
          />
          <Image
            className={'logoDesktop'}
            alt="logo-x"
            priority={true}
            src="/logo-desktop.png"
            width={170}
            height={60}
          />
          <div className={'links'}>
            <h1 onClick={handleOpen} className={'nav_link'}>
              Kursga buyurtma berish
            </h1>

            <Link href="/about" className={'nav_link'}>
              Biz haqimizda
            </Link>
          </div>
        </div>
      </nav>

      <main className={'main'}>
        <UserTable />
      </main>
    </>
  );
}

export default HomePage;
