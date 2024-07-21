/* eslint-disable @next/next/no-img-element */
import { Box, Card, Typography } from '@mui/material'
import { useEffect, useRef } from 'react'
import './styles.css'
import testimonial1 from './testimonial1.jpg'
import testimonial2 from './testimonial2.jpg'
import testimonial3 from './testimonial3.jpg'
import testimonial4 from './testimonial4.jpg'
import testimonial5 from "./testimonial5.jpg";
import Image from 'next/image'
import { FormatQuote } from '@mui/icons-material';
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
        name: 'Anna Mitchell',
        title: 'Lawyer',
        quote: `Quo veniam beatae ullam, numquam cupiditate architecto, soluta impedit vero explicabo distinctio earum voluptatibus maiores vitae hic magnam exercitationem necessitatibus aut minus.`
    },
    {
        id: 2,
        image: testimonial2,
        name: 'Julian Rice',
        title: 'Accountant',
        quote: `Velit, molestias quam. Sit aliquam illum minima voluptatum in amet! Maxime quia et beatae corporis, iure dolores consequatur natus voluptatibus velit cum?`
    },
    {
        id: 3,
        image: testimonial3,
        name: 'Mark Lee',
        title: 'Business Analyst',
        quote: `Quae voluptas eveniet voluptate commodi non, nam consequuntur unde laudantium, quod libero tenetur dolor nostrum earum at velit facilis natus fugit facere.`
    },
    {
        id: 4,
        image: testimonial4,
        name: 'Martha Gilbert',
        title: 'Data Architect',
        quote: `Exercitationem optio delectus adipisci, suscipit vero neque autem accusamus! Saepe totam blanditiis deserunt nesciunt esse nulla temporibus aliquid? Asperiores itaque cum nobis!`
    },
    {
        id: 5,
        image: testimonial5,
        name: 'Nevaeh Johnson',
        title: 'Full Stack Developer',
        quote: 'Quisquam itaque ratione, repellendus dolor inventore nobis mollitia repudiandae asperiores. Magni rerum atque odit recusandae, vero soluta dolor amet. Ipsum, incidunt inventore.'
    }
]

const Slider = ({ isMediumScreen, isMobile }) => {

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
                {/* @ts-ignore */}
                <swiper-container ref={swiperRef} init="false"> {/*@ts-ignore */}
                    {people.map(person => <swiper-slide key={person.id} class="slide">
                        <Slide
                            isMediumScreen={isMediumScreen}
                            isMobile={isMobile}
                            id={person.id}
                            quote={person.quote}
                            image={person.image}
                            name={person.name}
                            title={person.title}
                        />{/*@ts-ignore */}
                    </swiper-slide>)}{/*@ts-ignore */}
                </swiper-container>
            </Box>
        </Box>
    )
}

type SlideProps = {
    id: number,
    quote: string,
    image: string,
    name: string,
    title: string
    isMobile: boolean
    isMediumScreen: boolean
}

const Slide = ({ id, quote, image, name, title, isMobile, isMediumScreen }: SlideProps) => {
    return (
        <article key={id}>
            <Box
                marginX='auto'
                sx={{
                    paddingTop: 20,
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

export default Slider