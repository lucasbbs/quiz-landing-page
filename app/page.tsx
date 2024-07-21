"use client";
import { animated, useSpring } from '@react-spring/web'
import './fonts/styles.css'
import validator from 'validator'
import { useEffect, useRef, useState } from "react";
import { SnackbarProvider, closeSnackbar, enqueueSnackbar } from 'notistack'
import Grid from "@mui/material/Grid";
import { Box, Button, ThemeProvider, Typography, useMediaQuery } from '@mui/material';
import { theme } from './theme';

import DefaultNavbar from "./components/DefaultNavbar";
import Slider from './components/Slider';
import Loader from './components/Loader';
import ModalComponent from './components/Modal';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import HexagonsHeader from './components/HexagonsHeader';
import VideoSlider from './components/VideoSlider';
import SubscribeSection from './components/SubscribeSection';
import ContactForm from './components/ContactForm';
import HexagonsFooter from './components/HexagonsFooter';
import SEOSection from './components/SEOSection';

function Number({ n }: { n: number }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 }
  },
  )
  return <animated.span>{number.to(n => n.toFixed(0))}</animated.span>
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [emailBottom, setEmailBottom] = useState('')
  
  useEffect(() => {
    (async () => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 3200);
      return () => clearTimeout(timer);
    })()
  }, [])

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSlide = (direction: string): void => {
    if (!sliderRef.current) {
      return;
    }
    if (direction === 'left') {
      sliderRef.current.scrollLeft -= 200;
    }
    else {
      sliderRef.current.scrollLeft += 200;
    }
  };

  function handleSubscribe(email: string): void {

    if (!email || !validator.isEmail(email)) {
      enqueueSnackbar('You must provide an email', {
        variant: 'error',
        anchorOrigin: { vertical: "top", horizontal: "center" },
        action: (key) => (
          <Button style={{ color: "white" }} size="small" onClick={() => closeSnackbar(key)}>
            &#10006;
          </Button>
        ),
      })
      return
    }
    enqueueSnackbar('Thank you for signing up!', {
      variant: 'success',
      anchorOrigin: { vertical: "top", horizontal: "center" },
      action: (key) => (
        <Button style={{ color: "white" }} size="small" onClick={() => closeSnackbar(key)}>
          &#10006;
        </Button>
      ),
    })
    setEmail('')
    setEmailBottom('')
  }
  const isBigScreen = useMediaQuery('(min-width:1280px)')
  const isMediumScreen = useMediaQuery('(max-width:600px)')
  const isMobile = useMediaQuery('(max-width:499px)')


  return (loading ? <Loader /> :
    <div style={{ backgroundColor: "#dff5fd" }}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3} />
        <DefaultNavbar
          isMobile={isMobile}
          routes={[]}
          action={{
            type: "internal",
            route: "/authentication/sign-up",
            label: "Accusamus voluptas",
            clickButton: () => { },
            color: "error",
          }}
        />
        <ModalComponent handleSubscribe={handleSubscribe} loading={loading} email={email} setEmail={setEmail} isMobile={isMobile} />
        <Box
          height="100%"
          paddingTop={isMobile ? 15 : 10}
          overflow='hidden'
        >
          <Grid
            container
            mx='auto'
            height='fit-content'
          >
            <Box
              display='flex'
              gap={2}
              alignItems='end'
              height={200}
              width='100vw'
              justifyContent='center'
            >
              <Typography style={{
                color: '#F44335'
              }} color="error" variant='h1' fontSize='3rem' fontWeight={700} fontFamily='Asap' mt={4} textAlign='center'>Consectetur adipisicing elit:{' '}
                <Number n={4000} />
              </Typography>
            </Box>
            <MainContent handleSubscribe={handleSubscribe} setEmail={setEmail} email={email} isMobile={isMobile} isBigScreen={isBigScreen} />
          </Grid>
          <HexagonsHeader />
          <VideoSlider sliderRef={sliderRef} isBigScreen={isBigScreen} handleSlide={handleSlide} />
          <Slider isMediumScreen={isMediumScreen} isMobile={isMobile} />
          <SubscribeSection email={email} setEmail={setEmail} handleSubscribe={handleSubscribe} isMobile={isMobile} />
          <ContactForm isMobile={isMobile} />
          <HexagonsFooter isBigScreen={isBigScreen} />
          <SEOSection />
          <Footer handleSubscribe={handleSubscribe} emailBottom={emailBottom} setEmailBottom={setEmailBottom} isMobile={isMobile} isBigScreen={isBigScreen} />
        </Box>
      </ThemeProvider>
    </div >

  );
}
