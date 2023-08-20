/* eslint-disable @next/next/no-img-element */
import { Box, Card, Icon, useMediaQuery, Button, Typography, IconButton } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import './styles.css'
import testimonial1 from './Line Hornbæk.png'
import testimonial2 from './Mikkel Ilve.jpg'
import testimonial3 from './Maria Vedsted.jpg'
import testimonial4 from './Peter Elsbo.jpg'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, FormatQuote } from '@mui/icons-material';
import { register } from "swiper/element/bundle";
register();

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules

const people: any[] = [
    {
        id: 1,
        image: testimonial1,
        name: 'Line Hornbæk',
        title: 'Lærer',
        quote: `Det er virkelig smart og ligetil.
        Med få klik kan jeg sammensætte en quiz
        som eleverne elsker.`
    },
    {
        id: 2,
        image: testimonial2,
        name: 'Mikkel Ilve',
        title: 'Lærer',
        quote: `SÅ mange muligheder med SÅ mange gode 
        quizspørgsmål!`
    },
    {
        id: 3,
        image: testimonial3,
        name: 'Maria Vedsted',
        title: 'Lærer',
        quote: `Quiz og brætspil er en fantastisk måde
        at arbejde med mundtlighed på, og eleverne
        hygger sig virkelig.`
    },
    {
        id: 4,
        image: testimonial4,
        name: 'Peter Elsbo',
        title: 'Lærer',
        quote: `En fantastisk blanding af det digitale og det analoge`
    },
]

export const Slider = () => {

    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            rewind: true,
            navigation: true,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            //add this
            injectStyles: [
                `
          .swiper-button-next,
          .swiper-button-prev {
            heightL 270px;
            background-color: transparent;
            background-position: center;
            background-size: 20px;
            background-repeat: no-repeat;
            padding: 0px 8px;
            border-radius: 100%;
            border: 2px solid #344767;
          }

          .swiper-button-prev {
            background-image: url("/chevron-left.svg");
          }

          .swiper-button-next {
            background-image: url("/chevron-right.svg");
          }
          
          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }
      `,
            ],
        };
        //@ts-ignore
        Object.assign(swiperContainer, params);
        //@ts-ignore
        swiperContainer.initialize();
    }, []);

    return ( 
        //@ts-ignore
        <swiper-container ref={swiperRef} init="false"> {/*@ts-ignore */}
            {people.map(person => <swiper-slide key={person.id} class="slide">
                <Slide 
                    id={person.id}
                    quote={person.quote}
                    image={person.image}
                    name={person.name}
                    title={person.title}
                />{/*@ts-ignore */}
                </swiper-slide>)}{/*@ts-ignore */}
        </swiper-container>
    )
}

type SlideProps = {
    id: number,
    quote: string,
    image: string,
    name: string,
    title: string
}

const Slide = ({id, quote, image, name, title}: SlideProps) => {
    const isMediumScreen = useMediaQuery('(max-width:760px)')
    const isMobile = useMediaQuery('(max-width:499px)')
    return (
        <article key={id}>
            <Box
                marginX='auto'
                sx={{
                    paddingTop:20,
                    minWidth: isMobile ? 300 : isMediumScreen ? 350 : 400,
                    maxWidth: isMobile ? 300 : isMediumScreen ? 380 : 450,

                }}
            >
                <Card
                    sx={{
                        position: 'relative',
                        border: '5px solid #dff5fe',
                        minHeight: 180,
                        padding: 5,
                        display: 'flex',
                    }}
                >
                    <FormatQuote
                        sx={{
                            color: '#a1d6ef',
                            position: 'absolute',
                            left: 0, top: 0
                        }}
                        fontSize='large'
                    ></FormatQuote>
                    <Typography
                        textAlign='center'
                        sx={{
                            fontSize: isMediumScreen ? 14 : 16,
                            marginY: 'auto'
                        }}
                        fontFamily='Asap'
                        color='#344767'
                    >{quote}</Typography>
                </Card>
            </Box>
            <Box
                marginTop={5}
                justifyContent='center'
                display='flex'
                gap={2}
            >
                <Image style={{ borderRadius: '50%', width: 100, border: '2px solid red' }} width={100} height={100} src={image} alt="name" />
                <Box
                    sx={{ textAlign: 'left' }}
                    width={170}
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='flex-end'
                >
                    <Box>
                        <Typography color='#344767' fontFamily='Asap' fontWeight={700} fontSize='1.5rem' variant='h4'>{name}</Typography>
                        <Typography color='#344767' fontFamily='Asap' fontSize={16}>{title}</Typography>
                    </Box>
                </Box>
            </Box>
        </article>
    )
}
