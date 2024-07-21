import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'

const ContactForm = ({ isMobile }) => {
    return (
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
                        Magnam eum
                    </Typography>
                    <Typography
                        fontFamily='Asap'
                        color='#344767'
                        sx={{ fontSize: 14 }}>Distinctio exercitationem veritatis</Typography>
                    <TextField
                        fullWidth
                        label="Name"
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
                        label="Omnis unde..."
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
                        Soluta temporibus!
                    </Button>
                </Card>
            </Box>
        </Box>
    )
}

export default ContactForm