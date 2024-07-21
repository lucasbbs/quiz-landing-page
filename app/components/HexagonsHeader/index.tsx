import { Box } from '@mui/material'
import React from 'react'
import { Hexagon, HexGrid, Layout, Pattern } from 'react-hexgrid'

const HexagonsHeader = () => {
    return (
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
                    <Pattern id="pat-1" link="https://raw.githubusercontent.com/lucasbbs/quiz-landing-page/main/Sp%C3%B8rgsma%CC%8AlNY2.png-1.png" size={{ x: 15, y: 13 }} />
                    <Pattern id="pat-2" link="https://raw.githubusercontent.com/lucasbbs/quiz-landing-page/main/Sp%C3%B8rgsma%CC%8AlNY2.png-2.png" size={{ x: 15, y: 13 }} />
                    <Pattern id="pat-3" link="https://raw.githubusercontent.com/lucasbbs/quiz-landing-page/main/Sp%C3%B8rgsma%CC%8AlNY2.png-3.png" size={{ x: 15, y: 13 }} />
                    <Pattern id="pat-4" link="https://raw.githubusercontent.com/lucasbbs/quiz-landing-page/main/Sp%C3%B8rgsma%CC%8AlNY2.png-4.png" size={{ x: 15, y: 13 }} />
                    <Pattern id="pat-5" link="https://raw.githubusercontent.com/lucasbbs/quiz-landing-page/main/Sp%C3%B8rgsma%CC%8AlNY2.png-5.png" size={{ x: 15, y: 13 }} />
                    <Pattern id="pat-6" link="https://raw.githubusercontent.com/lucasbbs/quiz-landing-page/main/Sp%C3%B8rgsma%CC%8AlNY2.png-6.png" size={{ x: 15, y: 13 }} />
                </Layout>
            </HexGrid>

            {/* <img src={subjectsHexagonsLandingPage} alt="subjects hexagons" style={{objectFit: 'cover',
      objectPosition: '100% 0'}} /> */}
        </Box>
    )
}

export default HexagonsHeader