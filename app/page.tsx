"use client";
import { animated, useSpring } from '@react-spring/web'
import './fonts/styles.css'
import validator from 'validator'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close'
import { useCallback, useEffect, useRef, useState } from "react";
import { SnackbarProvider, closeSnackbar, enqueueSnackbar } from 'notistack'
import { ArrowBack, ArrowForward } from '@mui/icons-material';

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
// Material Dashboard 2 PRO React TS examples components
import DefaultNavbar from "./components/DefaultNavbar";

// Material Dashboard 2 PRO React page layout routes
// import pageRoutes from "page.routes";

// Material Dashboard 2 PRO React context
import { Box, Button, Card, Fade, Icon, IconButton, Input, List, ListItemButton, ListItemIcon, ListItemText, Modal, Rating, TextField, ThemeProvider, Typography, useMediaQuery } from '@mui/material';
import { getTotalNumberOfQuizzes, subscribeNewsLetter } from './services';
import { Hexagon, HexGrid, Layout, Pattern, Text } from 'react-hexgrid';
import VideosSection from './components/VideoPlayer';
import { Slider } from './components/Slider';
import Loader from './components/Loader';

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


import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { theme } from './theme';

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [hasClickedOnCreateAccount, setHasClickedOnCreateAccount] = useState(false)
  const [email, setEmail] = useState('')
  const [emailBottom, setEmailBottom] = useState('')
  const [totalNumberOfQuizzes, setTotalNumberOfQuizzes] = useState(0)
  const [displayPopUp, setDisplayPopUp] = useState(false);

  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // const handleMessage = useCallback(
  //   (message: string, type: VariantType) => {
  //     enqueueSnackbar(message, {
  //       
  //       variant: type,
  //       action: (key) => (
  //         <Button style={{ color: "white" }} size="small" onClick={() => closeSnackbar(key)}>
  //           &#10006;
  //         </Button>
  //       ),
  //     });
  //   },
  //   [enqueueSnackbar, closeSnackbar]
  // );

  const closePopUp = () => {
    // setting key "seenPopUp" with value true into localStorage
    localStorage.setItem("seenPopUp", String(true));
    // setting state to false to not display pop-up
    setDisplayPopUp(false);
  };

  useEffect(() => {
    // getting value of "seenPopUp" key from localStorage
    if (loading) return;
    let returningUser = localStorage.getItem("seenPopUp") === 'true';
    const animationTimeout = setTimeout(() => {
      setDisplayPopUp(!returningUser);
    }, 1000);

    return () => clearTimeout(animationTimeout);

  }, [loading]);

  useEffect(() => {
    (async () => {
      setTotalNumberOfQuizzes(await getTotalNumberOfQuizzes())
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

  async function handleSubscrtibe(email: string): Promise<void> {

    if (!email || !validator.isEmail(email)) {
      console.log('Du skal skrive en email')
      enqueueSnackbar('Du skal skrive en email', {
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

    await subscribeNewsLetter(email)
    enqueueSnackbar('Tak for din tilmelding!', {
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
          routes={[]}
          action={{
            type: "internal",
            route: "/authentication/sign-up",
            label: "Opret dig gratis",
            clickButton: setHasClickedOnCreateAccount,
            color: "error",
          }}
        />{displayPopUp && (
          <Modal
            open={true}
            onClose={closePopUp}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Fade in={true} style={{
              transitionDelay: '1000ms'
            }}>
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                height='fit-content'
                mx='auto'
                p={8}
                position='absolute'
                top='50%'
                left='50%'
                sx={{
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#f4feff',
                  outline: 'none',
                }}
                maxWidth={'85vw'}
              >
                <Typography
                  fontFamily='Asap'
                  fontSize='3rem'
                  lineHeight={1.25}
                  color='#344767'
                  fontWeight='regular' variant="h1" textAlign='center' maxWidth={850} width='75vw'>
                  Få mest ud af QuizEdu: få seneste nyt
                </Typography>
                <Typography
                  fontFamily='Asap'
                  fontSize='1.25rem'
                  color='#344767'
                  minWidth={isMobile ? 'calc(100vw - 64px)' : { sm: 400 }} maxWidth={800} textAlign='center' width='75vw'>
                  Værktøjer er bedst når de bliver brugt: så få tips og tricks, og inspiration direkte i indbakken og deltag automatisk i QuizEdus sjove konkurrencer.
                </Typography>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  handleSubscrtibe(email)
                  closePopUp()
                }}>
                  <Box
                    sx={{
                      width: '75vw',
                      maxWidth: 500
                    }}
                    display='flex'
                    marginTop={4}
                    marginBottom={1}
                    gap={2}
                  >
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      placeholder='Skriv din mailadresse her'
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 45
                      }}
                      sx={{
                        borderRadius: 45,
                        '& fieldset': {
                          borderRadius: 45,
                        },
                      }}
                      type='email'
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                    <Button
                      sx={{
                        color: '#ffffff',
                        borderRadius: 45,
                        padding: '0.625rem 1.5rem',
                        backgroundColor: '#f44335',
                        fontFamily: 'Asap',
                        fontWeight: 700,
                        fontSize: 12,
                        boxShadow: '0rem 0.1875rem 0.1875rem 0rem rgb(244 67 53 / 15%), 0rem 0.1875rem 0.0625rem -0.125rem rgb(244 67 53 / 20%), 0rem 0.0625rem 0.3125rem 0rem rgb(244 67 53 / 15%)',
                        '&:hover': {
                          backgroundColor: '#f44335',
                          boxShadow: '0rem 0.875rem 1.625rem -0.75rem rgb(244 67 53 / 40%), 0rem 0.25rem 1.4375rem 0rem rgb(244 67 53 / 15%), 0rem 0.5rem 0.625rem -0.3125rem rgb(244 67 53 / 20%)'
                        }
                      }}
                      type='submit'
                      color='error'
                    >Tilmeld</Button>
                  </Box>
                </form>
                <IconButton
                  sx={{
                    backgroundColor: '#dff5fd',
                    '&:hover': {
                      backgroundColor: '#ffffff'
                    }
                  }}
                  style={{
                    position: 'absolute',
                    top: '-35px',
                    right: '-35px',
                    margin: 16,
                    color: '#7b809a'
                  }}
                  onClick={closePopUp}
                >
                  <CloseIcon fontSize='large'></CloseIcon>
                </IconButton>
              </Box>
            </Fade>
          </Modal>
        )
        }
        {
          hasClickedOnCreateAccount ?
            <Box
              display='flex'
              width='100vw'
              height='100vh'
              pt={20}
            >
              <Box
                display='flex'
                flexDirection='column'
                gap={5}
                mx='auto'
                px={4}
                width={665}
                height='fit-content'
                paddingBottom='2em'
              >
                <Typography fontWeight={700} fontSize='1.2em' component='p'>Hejsa med dig :)</Typography>
                <Typography fontWeight={700} fontSize='1.2em' component='p'>Du vil gerne have adgang til QuizEdu? FEDT!</Typography>
                <Typography fontWeight={700} fontSize='1.2em' component='p'>QuizEdu abner først i august 2023; MEN din skole skal faktisk få tidlig adgang OG spare penge!</Typography>
                <Typography fontWeight={700} fontSize='1.2em' component='p'>Når jeres skole køber adgang på denne side af august, får I halv pris (kun 600kr ex moms for 1 år, 365 dage) <br /><Typography sx={{ fontWeight: 700 }} fontSize='1.2em' component='span' color='success'>PLUS</Typography> I får også en Quiz-pakke med i prisen (klik her for at se pakke)</Typography>
                <Typography fontWeight={700} fontSize='1.2em' component='p'>Det eneste du skal gøre for at få dette tilbud er; at skrive til mig: <a style={{ color: '#0563c1' }} href='mailto:jesperalbinus@quizedu.dk?subject=abonnement%20QuizEdu.dk&body=Hej,%20jeg%20er%20interesseret%20i%20at%20abonnere%20på%20QuizEdu.dk'>jesperalbinus@quizedu.dk</a></Typography>
                <Typography fontWeight={700} fontSize='1.2em' component='p'>Glæder mig til at du bliver en del af QuizEdu-familien 😀</Typography>
                <Typography fontWeight={700} fontSize='1.2em' component='p'>Med venlig hilsen</Typography>
                <Typography fontWeight={700} fontSize='1.2em' component='p'>Jesper Albinus, ejer af QuizEdu</Typography>
              </Box>
            </Box> :
            <Box
              // marginX='auto'
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
                  }} color="error" variant='h1' fontSize='3rem' fontWeight={700} fontFamily='Asap' mt={4} textAlign='center'>Antal quiz-spørgsmål lige nu:{' '}
                    <Number n={totalNumberOfQuizzes} />
                    {/* <AnimatedNumber
                    component="span"
                    value={totalNumberOfQuizzes}
                    stepPrecision={0}
                    style={{
                      color: '#F44335',
                      transition: '0.8s ease-out',
                      // fontSize: '1.875rem',
                      lineHeight: 1.375,
                      fontWeight: 700
                    }}
                    duration={1000}
                    formatValue={(n: number) => n} /> */}
                  </Typography>
                </Box>
                {/* <Box
              display='flex'
              flexDirection='column'
              justifyContent='end'
              height='fit-content'
            > */}
                <Grid item xs={12} lg={5}>
                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems={isBigScreen ? 'end' : 'center'}
                    justifyContent='center'
                    width={isBigScreen ? '100%' : '90vw'}
                  >
                    <Box display='flex' justifyContent='center' height={isBigScreen ? 700 : '100%'} flexDirection='column' paddingX={isBigScreen ? 0 : 4} width={isBigScreen ? 400 : '90vw'}>
                      <Typography fontFamily="Asap" fontWeight={700} fontSize='3rem' variant='h3' color='#344767'><span className='text-purple'>Sjovere</span> undervisning <br /> med <span className='text-blue'>faglige</span> Quizkort<span className='text-green'>!</span></Typography>
                      <Typography fontSize='1.25rem' fontFamily='Asap' lineHeight='1.625' color='#344767'>
                        Brug QuizEdu&apos;s 1000vis af quizspørgsmål til at sætte gang i både træning og kreativitet imens hele klassen hygger sig.
                        Tanken er: at vi har spørgsmålene og at dine elever udvikler idéerne til at lave egne brætspil evt. ved at bruge vores <u>brætspilspakke</u>. Opret dig allerede i dag og prøv vores Quizværktøj helt gratis!
                      </Typography>
                      <Box
                        display='flex'
                        marginTop={4}
                        marginBottom={1}
                        gap={2}
                        width={isMobile ? 'calc(100vw - 64px)' : 400}
                        maxWidth={400}
                      >
                        <TextField
                          label="Email"
                          placeholder='Skriv din email her'
                          style={{
                            backgroundColor: 'white',
                            borderRadius: 45
                          }}
                          sx={{
                            borderRadius: 45,
                            '& fieldset': {
                              borderRadius: 45,
                            },
                          }}
                          type='email'
                        />
                        <Button
                          sx={{
                            borderRadius: 45,
                            whiteSpace: 'nowrap',
                            backgroundColor: '#F44335',
                            fontFamily: 'Asap',
                            lineHeight: 1.4,
                            fontWeight: 700,
                            padding: '0.625rem 1.5rem',
                            boxShadow: `0rem 0.1875rem 0.1875rem 0rem rgb(244 67 53 / 15%), 0rem 0.1875rem 0.0625rem -0.125rem rgb(244 67 53 / 20%), 0rem 0.0625rem 0.3125rem 0rem rgb(244 67 53 / 15%)`,
                            '&:hover': {
                              backgroundColor: '#F44335',
                              boxShadow: '0rem 0.875rem 1.625rem -0.75rem rgb(244 67 53 / 40%), 0rem 0.25rem 1.4375rem 0rem rgb(244 67 53 / 15%), 0rem 0.5rem 0.625rem -0.3125rem rgb(244 67 53 / 20%)'
                            }
                          }}
                          color='error'
                          onClick={() => setHasClickedOnCreateAccount(true)}
                          variant='contained'
                        >Opret dig gratis</Button>
                      </Box>

                      <Box
                        display='flex'
                      >
                        <img style={{
                          borderRadius: '50%',
                          border: '2px solid red',
                          marginRight: 4
                        }} src={'/linehonbæk.png'} alt="name" height={80} width={80} />
                        <Box
                          display='flex'
                          flexDirection='column'
                          justifyContent='center'
                        >
                          <Rating value={5} readOnly />
                          <Typography>&quot;Det er virkelig smart&quot;</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={7}>
                  <Box
                    display='flex'
                    flexDirection='column'
                    alignItems={isBigScreen ? 'end' : 'center'}
                    maxWidth={isBigScreen ? 700 : '100vw'}
                  >
                    <img
                      alt='cards landing page illustration??'
                    src={'/cardsLandingPage.png'} style={{
                      objectFit: 'cover',
                      objectPosition: '80% 100%',
                      maxWidth: 700,
                      width: '100%'
                    }} />
                  </Box>
                </Grid>
                {/* </Box> */}


                <Grid item xs={12} lg={6} sx={{ background: `#f4feff` }}>
                  <Box
                    overflow='visible'
                    display='flex'
                    flexDirection='column'
                    alignItems={isBigScreen ? 'end' : 'center'}
                    justifyContent='end'
                    height='fit-content'
                  >
                    <img src={'/cardsColorLandingPage.png'} style={{
                      objectFit: 'cover',
                      objectPosition: '80% 100%',
                      maxWidth: 550,
                      width: isBigScreen ? '100%' : '100%',
                      // height: '100%'
                    }}
                      alt='cards landing page illustration' /></Box>
                </Grid>
                <Grid item xs={12} lg={4} sx={{ background: `#f4feff` }}>
                  <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='end'
                    height='fit-content'
                    width='100vw'
                    sx={{
                      background: `#f4feff`
                    }}
                  >
                    <Box
                      display='flex'
                      flexDirection='column'
                      justifyContent='center'
                      height={isBigScreen ? 400 : '100%'}
                      width={isBigScreen ? 600 : '100vw'}
                      paddingX={4}
                    >
                      {/* <Typography style={{ color: '#5bb3e4' }} variant='p'>Tagline
                </Typography> */}
                      <Typography
                        fontFamily='Asap'
                        fontSize='2.25rem'
                        fontWeight={700}
                        color='#344767'
                        lineHeight='1.3'
                        variant="h2">
                        Lav dine helt egne kategorier og spørgsmål eller brug vores quiz-bibliotek
                      </Typography>
                      <Typography
                        textTransform='none'
                        variant="body1"
                        color='#344767'
                        lineHeight='1.625'
                        fontFamily='Asap'
                        fontSize='1.25rem'
                      >
                        Aldrig har det været lettere at sammensætte en quiz. Og du bestemmer helt selv hvordan du sammensætter spørgsmålene. Du trækker blot kategorierne over på et digitalt kort som du lynhurtigt kan dele med dine elever via en QR-kode; og vupti: så har de alle spørgsmålene på deres telefon eller iPad.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

              </Grid>

              <Box
                display='flex'
                flexDirection='column'
                justifyContent='end'
                marginX='auto'
                marginBottom={-25}
                sx={{
                  backgroundColor: '#f4feff'
                }}
              >
                <HexGrid width={7500} height={450} viewBox="-50 -50 100 100">
                  <Layout size={{ x: 15, y: 15 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                    <Hexagon q={-34} r={16} s={2} fill="pat-5" />
                    <Hexagon q={-33} r={16} s={2} fill="pat-6" />
                    <Hexagon q={-32} r={15} s={2} fill="pat-1" />
                    <Hexagon q={-31} r={15} s={2} fill="pat-2" />
                    <Hexagon q={-30} r={14} s={2} fill="pat-3" />
                    <Hexagon q={-29} r={14} s={2} fill="pat-4" />
                    <Hexagon q={-28} r={13} s={2} fill="pat-5" />
                    <Hexagon q={-27} r={13} s={2} fill="pat-6" />
                    <Hexagon q={-26} r={12} s={2} fill="pat-1" />
                    <Hexagon q={-25} r={12} s={2} fill="pat-2" />
                    <Hexagon q={-24} r={11} s={2} fill="pat-3" />
                    <Hexagon q={-23} r={11} s={2} fill="pat-4" />
                    <Hexagon q={-22} r={10} s={2} fill="pat-5" />
                    <Hexagon q={-21} r={10} s={2} fill="pat-6" />
                    <Hexagon q={-20} r={9} s={2} fill="pat-1" />
                    <Hexagon q={-19} r={9} s={2} fill="pat-2" />
                    <Hexagon q={-18} r={8} s={2} fill="pat-3" />
                    <Hexagon q={-17} r={8} s={2} fill="pat-4" />
                    <Hexagon q={-16} r={7} s={2} fill="pat-5" />
                    <Hexagon q={-15} r={7} s={2} fill="pat-6" />
                    <Hexagon q={-14} r={6} s={2} fill="pat-3" />
                    <Hexagon q={-13} r={6} s={2} fill="pat-2" />
                    <Hexagon q={-12} r={5} s={2} fill="pat-1" />
                    <Hexagon q={-11} r={5} s={2} fill="pat-4" />
                    <Hexagon q={-10} r={4} s={1} fill="pat-5" />
                    <Hexagon q={-9} r={4} s={1} fill="pat-6" />
                    <Hexagon q={-8} r={3} s={1} fill="pat-1" />
                    <Hexagon q={-7} r={3} s={1} fill="pat-2" />
                    <Hexagon q={-6} r={2} s={1} fill="pat-3" />
                    <Hexagon q={-5} r={2} s={1} fill="pat-4" />
                    <Hexagon q={-4} r={1} s={1} fill="pat-5" />
                    <Hexagon q={-3} r={1} s={1} fill="pat-6" />
                    <Hexagon q={-2} r={0} s={1} fill="pat-1" />
                    <Hexagon q={-1} r={0} s={1} fill="pat-2" />
                    <Hexagon q={0} r={-1} s={1} fill="pat-3" />
                    <Hexagon q={1} r={-1} s={0} fill="pat-4" />
                    <Hexagon q={2} r={-2} s={0} fill="pat-5" />
                    <Hexagon q={3} r={-2} s={0} fill="pat-6" />
                    <Hexagon q={4} r={-3} s={0} fill="pat-1" />
                    <Hexagon q={5} r={-3} s={0} fill="pat-2" />
                    <Hexagon q={6} r={-4} s={0} fill="pat-3" />
                    <Hexagon q={7} r={-4} s={0} fill="pat-4" />
                    <Hexagon q={8} r={-5} s={0} fill="pat-5" />
                    <Hexagon q={9} r={-5} s={0} fill="pat-6" />
                    <Hexagon q={10} r={-6} s={0} fill="pat-1" />
                    <Hexagon q={11} r={-6} s={0} fill="pat-2" />
                    <Hexagon q={12} r={-7} s={0} fill="pat-3" />
                    <Hexagon q={13} r={-7} s={0} fill="pat-4" />
                    <Hexagon q={14} r={-8} s={0} fill="pat-5" />
                    <Hexagon q={15} r={-8} s={0} fill="pat-6" />
                    <Hexagon q={16} r={-9} s={0} fill="pat-1" />
                    <Hexagon q={17} r={-9} s={0} fill="pat-2" />
                    <Hexagon q={18} r={-10} s={0} fill="pat-3" />
                    <Hexagon q={19} r={-10} s={0} fill="pat-4" />
                    <Hexagon q={20} r={-11} s={0} fill="pat-5" />
                    <Hexagon q={21} r={-11} s={0} fill="pat-6" />
                    <Hexagon q={22} r={-12} s={0} fill="pat-1" />
                    <Hexagon q={23} r={-12} s={0} fill="pat-2" />
                    <Hexagon q={24} r={-13} s={0} fill="pat-3" />
                    <Hexagon q={25} r={-13} s={0} fill="pat-4" />
                    <Hexagon q={26} r={-14} s={0} fill="pat-5" />
                    <Hexagon q={27} r={-14} s={0} fill="pat-6" />
                    <Hexagon q={28} r={-15} s={0} fill="pat-1" />
                    <Hexagon q={29} r={-15} s={0} fill="pat-2" />
                    <Hexagon q={30} r={-16} s={0} fill="pat-3" />
                    <Hexagon q={31} r={-16} s={0} fill="pat-4" />
                    <Hexagon q={32} r={-17} s={0} fill="pat-5" />
                    <Hexagon q={33} r={-17} s={0} fill="pat-6" />
                    <Hexagon q={34} r={-18} s={0} fill="pat-1" />
                    <Hexagon q={35} r={-18} s={0} fill="pat-2" />
                    <Pattern id="pat-1" link="https://quizcards-docs-dev.s3.eu-west-1.amazonaws.com/site-documents/Sp%C3%B8rgsma%CC%8AlNY2.png-1.png" size={{ x: 15, y: 13 }} />
                    <Pattern id="pat-2" link="https://quizcards-docs-dev.s3.eu-west-1.amazonaws.com/site-documents/Sp%C3%B8rgsma%CC%8AlNY2.png-2.png" size={{ x: 15, y: 13 }} />
                    <Pattern id="pat-3" link="https://quizcards-docs-dev.s3.eu-west-1.amazonaws.com/site-documents/Sp%C3%B8rgsma%CC%8AlNY2.png-3.png" size={{ x: 15, y: 13 }} />
                    <Pattern id="pat-4" link="https://quizcards-docs-dev.s3.eu-west-1.amazonaws.com/site-documents/Sp%C3%B8rgsma%CC%8AlNY2.png-4.png" size={{ x: 15, y: 13 }} />
                    <Pattern id="pat-5" link="https://quizcards-docs-dev.s3.eu-west-1.amazonaws.com/site-documents/Sp%C3%B8rgsma%CC%8AlNY2.png-5.png" size={{ x: 15, y: 13 }} />
                    <Pattern id="pat-6" link="https://quizcards-docs-dev.s3.eu-west-1.amazonaws.com/site-documents/Sp%C3%B8rgsma%CC%8AlNY2.png-6.png" size={{ x: 15, y: 13 }} />
                  </Layout>
                </HexGrid>

                {/* <img src={subjectsHexagonsLandingPage} alt="subjects hexagons" style={{objectFit: 'cover',
                objectPosition: '100% 0'}} /> */}
              </Box>
              <Box
                sx={{ background: `#f4feff` }}
                paddingY={10}
                display='flex'
                flexDirection='column'
                alignItems='center'
              >
                <Box
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                  alignItems='center'
                  width='100vw'
                  maxWidth={1272}
                  sx={{ background: `#f4feff` }}
                  px={4}
                >
                  <Grid container>
                    <Grid item xs={12} lg={9}>
                      <Typography
                        style={{ color: '#5bb3e4' }}
                        fontFamily='Asap'
                        fontSize='1.25rem'
                        variant='body1'>
                        Tagline
                      </Typography>
                      <Typography
                        color='#344767'
                        lineHeight={1.3}
                        fontFamily='Asap'
                        fontSize='2.25rem'
                        fontWeight={700}
                        variant="h2"
                        sx={{ width: isBigScreen ? '100%' : '90vw' }}>
                        Se hvordan QuizEdu kan bruges i din undervisning
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                      <Box
                        display={'flex'}
                        justifyContent={isBigScreen ? 'end' : 'start'}
                        alignItems='center'
                        width={isBigScreen ? '100%' : '90vw'}
                        height='100%'
                        gap={1}
                      >
                        <IconButton style={{ border: '4px solid #7b809a' }} onClick={() => handleSlide('left')}><ArrowBack fontSize='large'></ArrowBack></IconButton>
                        <IconButton style={{ border: '4px solid #7b809a' }} onClick={() => handleSlide('right')}><ArrowForward fontSize='large'></ArrowForward></IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box ref={sliderRef}
                  px={4}
                  overflow='hidden'
                  style={{
                    whiteSpace: 'nowrap',
                    backgroundColor: '#f4feff',
                    boxSizing: 'border-box',
                    display: 'flex',
                    width: '100vw',
                    maxWidth: 1272,
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }} >
                  <VideosSection />
                </Box>
              </Box>
              <Box
                width='100vw'
                sx={{
                  backgroundColor: '#f4feff'
                }}
              >
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  height='700px'
                  width={isMobile ? 420 : isMediumScreen ? '100vw' : 600}
                  marginX='auto'
                  sx={{
                    backgroundColor: '#f4feff'
                  }}
                  position='relative'
                >
                  <Slider />
                </Box>
              </Box>
              <Box

                height={700}
                width='100%'
                sx={{
                  backgroundColor: '#dff5fd'
                }}
              >
                <Box
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                  height={700}
                  width='fit-content'
                  maxWidth={800}
                  mx='auto'
                >
                  <Typography color="#344767" fontSize='3rem' fontWeight={400} variant="h1" textAlign='center' maxWidth={850} width='90vw'>
                    Få mest ud fra QuizEdu: få seneste nyt
                  </Typography>
                  <Typography color="#344767" lineHeight='1.625rem' fontSize='1.25rem' minWidth={isMobile ? 'calc(100vw - 64px)' : { sm: 400 }} maxWidth={800} textAlign='center' width='90vw'>
                    Værktøjer er bedst når de bliver brugt: så få tips og tricks, og inspiration direkte i indbakken.
                  </Typography>
                  <Box
                    display='flex'
                    marginTop={4}
                    marginBottom={1}
                    gap={2}
                    width={isMobile ? 'calc(100vw - 64px)' : 400}
                    maxWidth={400}
                  >
                    <TextField
                      label="Email"
                      placeholder='Skriv din mailadresse her'
                      style={{
                        width: 300,
                        borderRadius: 45,
                      }}
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: 45,
                        '& fieldset': {
                          borderRadius: 45,
                        },
                      }}
                      type='email'
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                    <Button
                      sx={{
                        borderRadius: 45,
                        padding: '0.625rem 1.5rem',
                        backgroundColor: '#f44335',
                        fontFamily: 'Asap',
                        fontWeight: 700,
                        fontSize: 12,
                        boxShadow: '0rem 0.1875rem 0.1875rem 0rem rgb(244 67 53 / 15%), 0rem 0.1875rem 0.0625rem -0.125rem rgb(244 67 53 / 20%), 0rem 0.0625rem 0.3125rem 0rem rgb(244 67 53 / 15%)',
                        '&:hover': {
                          backgroundColor: '#f44335',
                          boxShadow: '0rem 0.875rem 1.625rem -0.75rem rgb(244 67 53 / 40%), 0rem 0.25rem 1.4375rem 0rem rgb(244 67 53 / 15%), 0rem 0.5rem 0.625rem -0.3125rem rgb(244 67 53 / 20%)'
                        }
                      }}
                      color='error'
                      onClick={() => handleSubscrtibe(email)}
                      variant='contained'
                    >Tilmeld</Button>
                  </Box>
                </Box>
              </Box>

              <Box
                height={700}
                width='100vw'
                sx={{
                  backgroundColor: '#f4feff'
                }}
              >
                <Box
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                  height={900}
                  width='fit-content'
                  mx='auto'
                >
                  <Card
                    sx={{
                      marginX: 0,
                      paddingX: '3.6rem',
                      paddingY: '1.5rem',
                      border: '5px solid #84c3e1',
                      width: 'fit-content',
                      minWidth: isMobile ? 350 : 450,
                      maxWidth: 450,
                      height: 'fit-content'
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#005f8f'
                      }}
                      variant='h3'
                      fontFamily='Asap'
                      fontWeight={700}
                      lineHeight={1.625}
                      fontSize={30}
                    >
                      Kontakt os
                    </Typography>
                    <Typography
                      fontFamily='Asap'
                      color='#344767'
                      sx={{ fontSize: 14 }}>Vi svarer altid samme dag</Typography>
                    <TextField
                      fullWidth
                      label="Navn"
                      style={{
                        marginTop: '2rem',
                        backgroundColor: 'white',
                        borderRadius: 45
                      }}
                      sx={{
                        borderRadius: 45,
                        '& fieldset': {
                          borderRadius: 45,
                        },
                      }}
                      type='text'
                    />
                    <TextField
                      fullWidth
                      label="E-mail"
                      style={{
                        marginTop: '1rem',
                        backgroundColor: 'white',
                        borderRadius: 45
                      }}
                      sx={{
                        borderRadius: 45,
                        '& fieldset': {
                          borderRadius: 45,
                        },
                      }}
                      type='email'
                    />
                    <TextField
                      multiline
                      rows={4}
                      fullWidth
                      label="Din besked..."
                      style={{
                        marginTop: '1rem',
                        backgroundColor: 'white',
                        borderRadius: 5
                      }}
                      sx={{
                        borderRadius: 5,
                        '& fieldset': {
                          borderRadius: 5,
                        },
                      }}
                      type='text'
                    />
                    <Button
                      fullWidth
                      sx={{
                        marginTop: '2rem',
                        borderRadius: 45,
                        minWidth: 64,
                        backgroundColor: '#f44335',
                        fontWeight: 700,
                        boxShadow: '0rem 0.1875rem 0.1875rem 0rem rgb(244 67 53 / 15%), 0rem 0.1875rem 0.0625rem -0.125rem rgb(244 67 53 / 20%), 0rem 0.0625rem 0.3125rem 0rem rgb(244 67 53 / 15%)',
                        '&:hover': {
                          backgroundColor: '#f44335',
                          boxShadow: '0rem 0.875rem 1.625rem -0.75rem rgb(244 67 53 / 40%), 0rem 0.25rem 1.4375rem 0rem rgb(244 67 53 / 15%), 0rem 0.5rem 0.625rem -0.3125rem rgb(244 67 53 / 20%)'
                        }
                      }}
                      variant='contained'
                      color='error'>
                      Send besked
                    </Button>
                  </Card>
                </Box>
              </Box>
              <Box
                width={'100vw'}
                height='fit-content'
                sx={{
                  backgroundColor: '#f4feff'
                }}
                py={isBigScreen ? 10 : 0}
                paddingTop={isBigScreen ? 'inherit' : 10}
              >
                <Box
                  width='fit-content'
                  marginX='auto'
                  marginBottom={isBigScreen ? -30 : "-15%"}
                >
                  <HexGrid style={{
                    objectFit: 'none',
                    objectPosition: '50% 50%',
                    maxWidth: 1200,
                    width: '100vw',
                    height: '100%'
                  }} width={1200} height={500} viewBox="-50 -50 100 100">
                    <Layout size={{ x: 18, y: 18 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                      <Hexagon q={-3} r={1} s={1} fill="blue"><Text fill='#ffffff'>?</Text></Hexagon>
                      <Hexagon q={-2} r={0} s={1} fill="red"><Text fill='#ffffff'>?</Text></Hexagon>
                      <Hexagon q={-1} r={0} s={1} fill="yellow"><Text fill='#ffffff'>?</Text></Hexagon>
                      <Hexagon q={0} r={-1} s={1} fill="purple"><Text fill='#ffffff'>?</Text></Hexagon>
                      <Hexagon q={1} r={-1} s={0} fill="green"><Text fill='#ffffff'>?</Text></Hexagon>
                      <Hexagon q={2} r={-2} s={0} fill="orange"><Text fill='#ffffff'>?</Text></Hexagon>
                      <Hexagon q={3} r={-2} s={0} fill="blue"><Text fill='#ffffff'>?</Text></Hexagon>

                      <Pattern id="blue" link="https://quizcards-docs-dev.s3.eu-west-1.amazonaws.com/site-documents/blue.png" size={{ x: 18, y: 18 }} />
                      <Pattern id="green" link="https://quizcards-docs-dev.s3.eu-west-1.amazonaws.com/site-documents/green.png" size={{ x: 18, y: 18 }} />
                      <Pattern id="orange" link="https://quizcards-docs-dev.s3.eu-west-1.amazonaws.com/site-documents/orange.png" size={{ x: 18, y: 18 }} />
                      <Pattern id="purple" link="https://quizcards-docs-dev.s3.eu-west-1.amazonaws.com/site-documents/purple.png" size={{ x: 18, y: 18 }} />
                      <Pattern id="red" link="https://quizcards-docs-dev.s3.eu-west-1.amazonaws.com/site-documents/red.png" size={{ x: 18, y: 18 }} />
                      <Pattern id="yellow" link="https://quizcards-docs-dev.s3.eu-west-1.amazonaws.com/site-documents/yellow.png" size={{ x: 18, y: 18 }} />
                    </Layout>
                  </HexGrid>
                </Box>
              </Box>

              <Box
                // textAlign='center'
                mx='auto'
                width='calc(100vw - 30rem)'
              >
                <Typography
                  fontSize='20px'
                  lineHeight='33px'
                  color='#344767'
                  marginBottom='1rem'
                  fontFamily='Asap'
                  component='p'>
                  Velkommen til{' '}
                  <Typography
                    style={{textDecoration:'underline'}}
                    fontSize='20px'
                    lineHeight='33px'
                    color='#344767'
                    fontFamily='Asap'
                    component='a'
                    target='_blank'
                    href='https://quizedu.dk'>Quizedu.dk</Typography> - dit ultimative quizværktøj til sjovere undervisning og faglig træning! Vores digitale kortbunke giver lærere mulighed for at sammensætte spændende kategorier, som eleverne kan bruge til at træne mundtlighed og udvikle deres faglige færdigheder på en sjov og social måde; nemlig rundt om et brætspil. Med vores omfattende bibliotek af quizspørgsmål kan du skabe en engagerende og interaktiv læringsoplevelse for hele klassen, og der er rig mulighed for at differentiere og lave egne spørgsmål til dine elever, hvor både svar og spørgsmål kan være tekst, billede og lyd.</Typography>
                <Typography
                  fontSize='20px'
                  lineHeight='33px'
                  color='#344767'
                  marginBottom='1rem'
                  fontFamily='Asap'
                  component='p'>
                  Hos QuizEdu har vi 1000vis quizspørgsmål, der dækker et bredt fagligt
                  område, og du er altid velkommen til at komme med forslag til quizspørgsmål, så
                  QuizEdu forbliver relevant og opdateret. Dine elever vil elske at træne
                  forskellige fagområder og udfordre deres viden, mens de har det sjovt; sammen.
                  Vi tror på, at læring er mest effektiv, når den er underholdende og
                  inspirerende, og derfor er vores quizværktøj designet til mundtlighed og social
                  hygge; for vi har selvfølgelig også lavet sjove spørgsmål inden for elevernes egne
                  interesser som kan bruges til at flette ind i de fagfaglige quizzer.
                  Med vores brætspilspakke kan dine elever endda skridtet videre
                  og skabe deres egne brætspil baseret på quizspørgsmål fra vores platform. Tanken
                  med QuizEdu er nemlig at lave såkaldte dynamiske brætspil, som eleverne selv
                  kan sammensætte, men med QuizEdu kan dine også arbejde med brætspilsdesign, eller
                  blot genopfriske gamle brætspil og så bruge vores quizkortbunke til at holde
                  styr på fagligheden.</Typography>
                <Typography
                  fontSize='20px'
                  lineHeight='33px'
                  color='#344767'
                  marginBottom='1rem'
                  fontFamily='Asap'
                  component='p'>
                  QuizEdu er udviklet af Jesper Albinus, der i 2018 startede matematikhjemmesiden{' '}
                  <Typography
                    style={{textDecoration:'underline'}}
                    fontSize='20px'
                    lineHeight='33px'
                    color='#344767'
                    fontFamily='Asap'
                    component='a'
                    target='_blank'
                    href='https://geekster.dk'>Geekster.dk</Typography>, der laver videobaserede quizzer og matematikopgaver. Jespers motto ift. læring er: Kan det gøres sjovt, så SKAL det gøres sjovt, for eleverne skal gå i skole i 10 år og arbejde med noget de ikke selv har valgt. Hvis din skole allerede har adgang til Geekster, så har I faktisk også automatisk adgang til QuizEdu; brug blot din samme mail og adgangskode når du opretter dig her på QuizEdu.
                </Typography>
                <Typography
                  fontSize='20px'
                  lineHeight='33px'
                  color='#344767'
                  marginBottom='1rem'
                  fontFamily='Asap'
                  component='p'>
                  Har din skole ikke adgang til Geekster; så få din skole til at
                  oprette sig allerede i dag og oplev selv, hvor sjov og effektiv færdighedstræning
                  kan være med vores Quizværktøj. Vi tilbyder en gratis prøveperiode, så du kan
                  udforske alle vores funktioner og se, hvordan QuizEdu kan berige din
                  undervisning og dine elevers læring. Tag springet og giv dine elever en
                  læringsoplevelse de selv vil efterspørge.
                  Mvh Jesper Albinus
                </Typography>
              </Box>
              <Box
                sx={{ background: `#dff5fd` }}
              >
                <Box
                  display='flex'
                  flexDirection='column'
                  justifyContent='space-between'
                  width='100vw'

                  maxWidth={1272}
                  minWidth={isMobile ? 'fit-content' : 500}
                  mx='auto'
                >
                  <Image style={{ marginLeft: 32, marginRight: 32, height: '100%', width: 250 }} width={250} height={78.13} src={'/quizedulogo.png'} alt='quizedu' />
                  <Grid sx={{ my: 4 }} container spacing={4}>
                    <Grid sx={{ height: 'fit-content' }} item xs={12} md={6}>
                      <Box
                        mx={isMobile ? 6 : { xs: 2, lg: 0 }}
                        height='fit-content'
                        display='flex'
                        flexDirection='column'
                        gap={2}
                        width={{ xs: 320, sm: 400 }}
                      >

                        <Typography
                          fontFamily='Asap'
                          fontWeight={300}
                          fontSize={'1rem'}
                          color='#344767'
                          variant='body2'>Få mest ud fra QuizEdu: få seneste nyt</Typography>
                        <Box
                          display='flex'
                          gap={5}
                        >
                          <TextField
                            label="Email"
                            placeholder='Skriv din email her'
                            style={{
                              backgroundColor: 'white',
                              width: 300,
                              borderRadius: 45
                            }}
                            sx={{
                              borderRadius: 45,
                              '& fieldset': {
                                borderRadius: 45,
                              },
                            }}
                            type='email'
                            value={emailBottom}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailBottom(e.target.value)}
                          />
                          <Button
                            onClick={() => handleSubscrtibe(emailBottom)}
                            sx={{
                              borderRadius: 45,
                              padding: '0.625rem 1.5rem',
                              backgroundColor: '#f44335',
                              fontFamily: 'Asap',
                              fontWeight: 700,
                              fontSize: 12,
                              boxShadow: '0rem 0.1875rem 0.1875rem 0rem rgb(244 67 53 / 15%), 0rem 0.1875rem 0.0625rem -0.125rem rgb(244 67 53 / 20%), 0rem 0.0625rem 0.3125rem 0rem rgb(244 67 53 / 15%)',
                              '&:hover': {
                                backgroundColor: '#f44335',
                                boxShadow: '0rem 0.875rem 1.625rem -0.75rem rgb(244 67 53 / 40%), 0rem 0.25rem 1.4375rem 0rem rgb(244 67 53 / 15%), 0rem 0.5rem 0.625rem -0.3125rem rgb(244 67 53 / 20%)'
                              }
                            }}
                            variant='contained'
                            color='error'>
                            Tilmeld
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box
                        mx={isMobile ? 4 : 0}
                        display={'flex'}
                        justifyContent={isBigScreen ? 'end' : 'start'}
                        alignItems='center'
                        width={isBigScreen ? '100%' : '90vw'}
                        height='fit-content'
                        gap={1}
                      >

                        <Box>
                          <Typography
                            mx={2}
                            component='b'
                            fontFamily='Asap'
                            fontSize={20}
                            lineHeight={1.625}
                            color='#344767'
                            fontWeight={700}>
                            Følg os på:
                          </Typography>
                          <List>
                            <ListItemButton
                              sx={{
                                fontFamily: 'Asap',
                                py: 0
                              }}
                              LinkComponent={Link}
                              target='_blank'
                              href='https://www.facebook.com/profile.php?id=100089081940552'>
                              <ListItemIcon
                                sx={{
                                  minWidth: '30px',
                                  lineHeight: 1.625,
                                  color: 'rgba(0, 0, 0, 0.54)',
                                  fontSize: '1.25rem'
                                }}><FacebookIcon /></ListItemIcon>
                              <ListItemText
                                primaryTypographyProps={{
                                  fontFamily: 'Asap',
                                  fontSize: '1.25rem',
                                  lineHeight: 1.625
                                }}
                                primary="Facebook" />
                            </ListItemButton>
                            <ListItemButton LinkComponent={Link} target='_blank' href='https://www.instagram.com/quizedu.dk' sx={{ py: 0 }}>
                              <ListItemIcon sx={{
                                minWidth: '30px',
                                lineHeight: 1.625,
                                color: 'rgba(0, 0, 0, 0.54)',
                                fontSize: '1.25rem'
                              }}><InstagramIcon /></ListItemIcon>
                              <ListItemText
                                primaryTypographyProps={{
                                  fontFamily: 'Asap',
                                  fontSize: '1.25rem',
                                  lineHeight: 1.625
                                }}
                                primary="Instagram" />
                            </ListItemButton>
                            {/* <ListItemButton sx={{ py: 0 }}>
                        <ListItemIcon sx={{ minWidth: '30px' }}><TwitterIcon /></ListItemIcon>
                        <ListItemText primary="Twitter" />
                      </ListItemButton>
                      <ListItemButton LinkComponent={Link} target='_blank' href='https://www.linkedin.com/in/jesper-albinus-943620b3/' sx={{ py: 0 }}>
                        <ListItemIcon sx={{ minWidth: '30px' }}><LinkedInIcon /></ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                      </ListItemButton> */}
                          </List>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                  <hr />
                  <Typography
                    fontFamily='Asap'
                    fontSize='1.25rem'
                    lineHeight={1.625}
                    color='#344767'
                    textAlign={'center'}>{(new Date()).getFullYear()} QuizEdu.dk. Alle rettigheder forbeholdes</Typography>
                </Box>
              </Box>
            </Box>
        }
      </ThemeProvider>
    </div >

  );
}
