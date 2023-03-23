import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import image from '~/assets/images/slide_index_1.webp'

const Home = () => {
    console.log(image)
    return (
        <Container>
            <Box 
            component="img"
            sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            display: "none"
            }}
            src={image}
            />
            <img src={image}/>
        </Container>
    )
}

export default Home