import * as React from 'react';
import {useState} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import image from '~/assets/images/slide_index_1.webp'
import flashSaleImg from '~/assets/images/flsale.png'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Home = () => {



    const [selectedColor, setSelectedColor] = useState(null);

    const handleOnClick = (e) => {
        setSelectedColor(e.currentTarget.id)
        }
    const items = [
        {
            itemName: "Áo thể theo Polo Z93",
            itemPrice: "95,000 đ",
            itemColors:[
                {   
                    name: "color1",
                    src: image
                },
                {
                    name: "color2",
                    src: image
                },
                {
                    name: "color3",
                    src: image
                },
            ]
        }
    ]
    console.log(selectedColor)

    return (
        <Container>
            <Box 
            component="img"
            sx={{
                height: "100%",
                width: "100%",
            }}
            src={image}
            />
            <Box
             component="img"
             sx={{
              height: 100,
              width: 170,
             }}
             src={flashSaleImg}
            />
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Box
                       component="img"
                       sx={{
                        height: "90%",
                        width: "100%",
                       }}
                       src={image}
                      />
                      <Grid item xs={12}>
                        <Typography variant='body1' align='center'>
                            Áo thể thao Polo Z93
                        </Typography>
                        <Typography variant='body1' align='center'>
                            95,000 đ
                        </Typography>
                        <Grid
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            container
                        >
                            {
                                items[0].itemColors.map((itemColor, index) => {
                                    return (
                                        <Button
                                        key={index}
                                        id={index}
                                        variant="contained"
                                        onClick={handleOnClick}
                                        sx={{
                                        backgroundColor: selectedColor === index.toString() ? "red" : "#ccc",
                                        minWidth: 20,
                                        width: 20,
                                        borderRadius: "50%",
                                    }}>
                                    <Box
                                        component="img"
                                        sx={{
                                            minWidth: 20,
                                            height: 20,
                                            width: 20,
                                            borderRadius: "50%"
                                           }}
                                        src={itemColor.src}
                                    />
                                    </Button>
                                    )
                                }) 
                            }
                           
                           
                        </Grid>
                      </Grid>
                    </Grid>
                </Grid> 
            </Box>
            
        </Container>
    )
}

export default Home