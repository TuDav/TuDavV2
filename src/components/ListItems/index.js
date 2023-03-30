import * as React from 'react';
import {Box, Grid, Typography, Button, Link} from '@mui/material'
import image from '~/assets/images/slide_index_1.webp'
import BasicRating from '~/components/BasicRating'

function ListItems ({props}) {
   const items = props
    return (
        <Grid container spacing={2}>
        {
            items.map((item, index) => {
                return(
                    <Grid item xs={3} key={index}>
                        <Link href="#" underline="none" color="#000">
                            <Box
                            component="img"
                            sx={{
                                height: "auto",
                                width: "100%",
                                objectFit:"cover"
                            }}
                            src={image}
                            />
                                <Typography variant='body1' align='center'>
                                    {item.itemName}
                                </Typography>
                                <Typography variant='body1' align='center'>
                                    {item.itemPrice}
                                </Typography>
                        </Link>
                        <Grid   
                            container
                            justifyContent="center"
                            alignItems="center">
                                <BasicRating key={index}/>
                        </Grid>
                        <Grid
                        container
                        justifyContent="center"
                        alignItems="center">
                            <Button href="#" variant="contained">Xem ngay</Button>
                        </Grid>
                    </Grid>
                )
            })
        }

    </Grid> 
    )
}

export default ListItems