import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import VideosSection from '../VideoPlayer'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

const VideoSlider = ({sliderRef, isBigScreen, handleSlide}) => {
  return (
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
                    Itaque dolorum numquam dolorem, molestiae autem fuga nihil fugiat.
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
  )
}

export default VideoSlider