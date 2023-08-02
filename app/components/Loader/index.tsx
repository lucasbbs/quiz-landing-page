import Box from '@mui/material/Box';
import '../../styles.css'

const Loader = () => {
return (
    <Box
        position='absolute'
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex= {1000}
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
            backgroundColor: 'light-blue'
        }}
    >
        <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="170.49px" height="177px" viewBox="0 0 170.49 177" overflow="inherit" xmlSpace="preserve">
            <polygon className="hex" points="16.623,87 0,58.5 16.623,30 49.868,30 66.49,58.5 49.868,87 " style={{"fill":"#8fdc9c"}} />
            <polygon className="hex" points="68.623,57 52,28.5 68.623,0 101.868,0 118.49,28.5 101.868,57 " style={{"fill":"#00b9f8"}} />
            <polygon className="hex" points="120.623,87 104,58.5 120.623,30 153.868,30 170.49,58.5 153.868,87 " style={{"fill":"#cb6efe" }}/>
            <polygon className="hex" points="120.623,147 104,118.5 120.623,90 153.868,90 170.49,118.5 153.868,147 " style={{"fill":"#f54c5b" }}/>
            <polygon className="hex" points="68.623,177 52,148.5 68.623,120 101.868,120 118.49,148.5 101.868,177 " style={{"fill":"#ff8445" }}/>
            <polygon className="hex" points="16.623,147 0,118.5 16.623,90 49.868,90 66.49,118.5 49.868,147 " style={{"fill":"#ffe12a"}} />   
        </svg>

    </Box>
)}




export default Loader