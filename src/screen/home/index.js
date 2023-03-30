import * as React from 'react';
import {Container, Box, Grid, Typography, Button, Link, Divider} from '@mui/material'
import image from '~/assets/images/slide_index_1.webp'
import flashSaleImg from '~/assets/images/flsale.png'
import ListItems from '~/components/ListItems'
const Home = () => {
    const items = [
        {
            id: "1",
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
            ],
            itemSizes: ["M", "L", "XL", "XXL"]
        },
        {
            id: "2",
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
            ],
            itemSizes: ["M", "L", "XL", "XXL"]
        },
        {
            id: "3",
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
            ],
            itemSizes: ["M", "L", "XL", "XXL"]
        },
        {
            id: "4",
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
            ],
            itemSizes: ["M", "L", "XL", "XXL"]
        },
    ]

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

                <ListItems props={items}/>

                <Grid 
                     container
                     justifyContent="center"
                     alignItems="center"
                     sx={{
                        marginTop: 5,
                        marginBottom: 5,
                    }}
                     >
                        <Button variant="outlined">Xem thêm</Button>
                </Grid>
                </Box>
                <Box 
                component="img"
                sx={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                }}
                src={image}
                />
                <Divider 
                    sx={{
                        marginTop: 5,
                        marginBottom: 5,
                        fontSize: "20px",
                        '::after': {
                            borderTop:"double"
                        },
                        '::before': {
                            borderTop:"double"
                        },
                    }}
                >BLOG</Divider>

                <Grid container spacing={2}>
                    {
                        items.map((item, index) => {
                            return (
                                <Grid item xs={3} key={index}>
                                <Link 
                                href="#"
                                sx={{
                                    color: "#000",
                                    textDecoration:"none",
                                    '&hover': {
                                        textDecoration:"none",
                                    }
                                }}
                                >
                                <Box
                                    component="img"
                                    sx={{
                                        height: "200px",
                                        width: "100%",
                                        objectFit:"cover"
                                    }}
                                    src={image}
                                />
                                <Typography 
                                variant='h3'
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "600"
                                }}
                                >
                                    5 Sai Lầm 90% Nam Giới Đều Mắc Phải Khi Chọn Áo Khoác Chống Nắng
                                </Typography>
                                </Link>
                                <Typography 
                                variant='body2'
                                sx={{
                                    transform: 'skewX(-15deg)'
                                }}
                                >
                                     21/06/2021 lúc 17:30PM</Typography>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Áo khoác chống nắng là item không thể thiếu trong tủ đồ giúp các chàng vượt qua mùa nắng nóng. Thể nhưng, nếu không tránh 5 sai lầm bên dưới, chiếc áo sẽ phản tác dụng gây nên những khó...
                                </Typography>
                                </Grid> 
                            )
                        })
                    }
                </Grid>

        </Container>
    )
}

export default Home