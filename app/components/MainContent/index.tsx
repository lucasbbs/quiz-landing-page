import { Box, Button, Grid, Rating, TextField, Typography } from '@mui/material'
import React from 'react'

function MainContent({ isBigScreen, isMobile, handleSubscribe, email, setEmail }) {
    return (
        [<Grid key="1" item xs={12} lg={5}>
            <Box
                display='flex'
                flexDirection='column'
                alignItems={isBigScreen ? 'end' : 'center'}
                justifyContent='center'
                width={isBigScreen ? '100%' : '90vw'}
            >
                <Box display='flex' justifyContent='center' height={isBigScreen ? 700 : '100%'} flexDirection='column' paddingX={isBigScreen ? 0 : 4} width={isBigScreen ? 400 : '90vw'}>
                    <Typography fontFamily="Asap" fontWeight={700} fontSize='3rem' variant='h3' color='#344767'><span className='text-purple'>Lorem</span> ipsum dolor <br />  sit <span className='text-blue'>amet</span> consectetur<span className='text-green'>!</span></Typography>
                    <Typography fontSize='1.25rem' fontFamily='Asap' lineHeight='1.625' color='#344767'>
                        Officiis blanditiis facilis deserunt, ipsam et commodi id repellendus nesciunt <u>consequuntur</u> provident ipsa numquam aliquam voluptatibus ratione, tenetur esse quo? Perspiciatis, ipsa!
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
                            placeholder='Write your email address here'
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                        />
                        <Button
                            sx={{
                                borderRadius: 45,
                                whiteSpace: 'nowrap',
                                backgroundColor: '#F44335',
                                fontFamily: 'Asap',
                                lineHeight: 1.4,
                                fontWeight: 600,
                                padding: '0.625rem 1.5rem',
                                boxShadow: `0rem 0.1875rem 0.1875rem 0rem rgb(244 67 53 / 15%), 0rem 0.1875rem 0.0625rem -0.125rem rgb(244 67 53 / 20%), 0rem 0.0625rem 0.3125rem 0rem rgb(244 67 53 / 15%)`,
                                '&:hover': {
                                    backgroundColor: '#F44335',
                                    boxShadow: '0rem 0.875rem 1.625rem -0.75rem rgb(244 67 53 / 40%), 0rem 0.25rem 1.4375rem 0rem rgb(244 67 53 / 15%), 0rem 0.5rem 0.625rem -0.3125rem rgb(244 67 53 / 20%)'
                                }
                            }}
                            color='error'
                            onClick={() => handleSubscribe(email)}
                            variant='contained'
                        >Nesciunt, doloribus minus?</Button>
                    </Box>

                    <Box
                        display='flex'
                    >
                        <img style={{
                            borderRadius: '50%',
                            border: '2px solid red',
                            marginRight: 4
                        }} src={'/testimonial1.jpg'} alt="name" height={80} width={80} />
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                        >
                            <Rating value={5} readOnly />
                            <Typography color='black'>&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit!&quot;</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Grid>,
        <Grid key="2" item xs={12} lg={7}>
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
        </Grid>,
        <Grid key="3" item xs={12} lg={6} sx={{ background: `#f4feff` }}>
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
        </Grid>,
        <Grid key="4" item xs={12} lg={4} sx={{ background: `#f4feff` }}>
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
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Typography
                        textTransform='none'
                        variant="body1"
                        color='#344767'
                        lineHeight='1.625'
                        fontFamily='Asap'
                        fontSize='1.25rem'
                    >
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Box>
            </Box>
        </Grid>]
    )
}

export default MainContent