import { Box } from '@mui/material'
import React from 'react'
import { Hexagon, HexGrid, Layout, Pattern, Text } from 'react-hexgrid'

const HexagonsFooter = ({ isBigScreen }) => {
    return (
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

                        <Pattern id="blue" link="https://raw.githubusercontent.com/lucasbbs/quiz-landing-page/main/blue.png" size={{ x: 18, y: 18 }} />
                        <Pattern id="green" link="https://raw.githubusercontent.com/lucasbbs/quiz-landing-page/main/green.png" size={{ x: 18, y: 18 }} />
                        <Pattern id="orange" link="https://raw.githubusercontent.com/lucasbbs/quiz-landing-page/main/orange.png" size={{ x: 18, y: 18 }} />
                        <Pattern id="purple" link="https://raw.githubusercontent.com/lucasbbs/quiz-landing-page/main/purple.png" size={{ x: 18, y: 18 }} />
                        <Pattern id="red" link="https://raw.githubusercontent.com/lucasbbs/quiz-landing-page/main/red.png" size={{ x: 18, y: 18 }} />
                        <Pattern id="yellow" link="https://raw.githubusercontent.com/lucasbbs/quiz-landing-page/main/yellow.png" size={{ x: 18, y: 18 }} />
                    </Layout>
                </HexGrid>
            </Box>
        </Box>
    )
}

export default HexagonsFooter