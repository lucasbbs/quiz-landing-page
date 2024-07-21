import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const SubscribeSection = ({isMobile, email, setEmail, handleSubscribe}) => {
  return (
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
                Nihil, velit officiis quas aperiam facere non.
              </Typography>
              <Typography color="#344767" lineHeight='1.625rem' fontSize='1.25rem' minWidth={isMobile ? 'calc(100vw - 64px)' : { sm: 400 }} maxWidth={800} textAlign='center' width='90vw'>
                Voluptate dicta soluta magni quo doloremque dolore eveniet ducimus. Quos, cum nemo doloribus a magnam quod consectetur voluptas iste aut suscipit temporibus.
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
                  onClick={() => handleSubscribe(email)}
                  variant='contained'
                >Incidunt!</Button>
              </Box>
            </Box>
          </Box>
  )
}

export default SubscribeSection