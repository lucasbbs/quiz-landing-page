
import Box from '@mui/material/Box';
import { Facebook as FacebookIcon, Instagram as InstagramIcon } from "@mui/icons-material";
import Image from 'next/image';
import { Button, Grid, List, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import Link from 'next/link';

const Footer = ({handleSubscribe, emailBottom, setEmailBottom, isMobile, isBigScreen}) => {
    return (
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
                <img style={{ marginLeft: 32, marginRight: 32, height: '100%', width: 125 }} width={250} height={78.13} src={'/quizedulogo.png'} alt='quizedu' />
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
                                variant='body2'>Minus reiciendis provident ut voluptate!</Typography>
                            <Box
                                display='flex'
                                gap={5}
                            >
                                <TextField
                                    label="Email"
                                    placeholder='Write your email address here'
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
                                    onClick={() => handleSubscribe(emailBottom)}
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
                                    Velit
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
                                    Accusamus voluptas:
                                </Typography>
                                <List>
                                    <ListItemButton
                                        sx={{
                                            fontFamily: 'Asap',
                                            py: 0
                                        }}
                                        LinkComponent={Link}
                                        href='#'>
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
                                                lineHeight: 1.625,
                                                color: "black"
                                            }}
                                            primary="Facebook" />
                                    </ListItemButton>
                                    <ListItemButton LinkComponent={Link} href='#' sx={{ py: 0 }}>
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
                                                lineHeight: 1.625,
                                                color: "black"
                                            }}
                                            primary="Instagram" />
                                    </ListItemButton>
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
                    textAlign='center'>{(new Date()).getFullYear()} All rights reserved</Typography>
            </Box>
        </Box>
    )
}

export default Footer