import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close'
import { Button, Fade, IconButton, Modal, TextField, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

const ModalComponent = ({loading, handleSubscribe, email, setEmail, isMobile}) => {
    const [displayPopUp, setDisplayPopUp] = useState(false)

    useEffect(() => {
        if (loading) return;
        let returningUser = localStorage.getItem("seenPopUp") === 'true';
        const animationTimeout = setTimeout(() => {
          setDisplayPopUp(!returningUser);
        }, 1000);
    
        return () => clearTimeout(animationTimeout);
    
      }, [loading]);

    const closePopUp = () => {
        localStorage.setItem("seenPopUp", String(true));
        setDisplayPopUp(false);
      };
    
return (
    displayPopUp ? (<Modal
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
                  Minus reiciendis provident ut voluptate!
                </Typography>
                <Typography
                  fontFamily='Asap'
                  fontSize='1.25rem'
                  color='#344767'
                  minWidth={isMobile ? 'calc(100vw - 64px)' : { sm: 400 }} maxWidth={800} textAlign='center' width='75vw'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, animi rem? Laborum velit beatae libero et maxime repellendus magni exercitationem totam consectetur ipsam, adipisci, quod sunt a aspernatur provident pariatur!
                </Typography>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  handleSubscribe(email)
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
          </Modal>): null
)}




export default ModalComponent