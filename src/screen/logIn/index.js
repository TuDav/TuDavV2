import * as React from 'react';
import {Container, Box, Grid, Typography, Button, Link, Divider, FormControl, TextField} from '@mui/material'
import image from '~/assets/images/slide_index_1.webp'
import flashSaleImg from '~/assets/images/flsale.png'
import ListItems from '~/components/ListItems'
const LogIn = () => {
  

    return (
        <Container>
            <Typography variant="h4" sx={{mt: 2}}  textAlign="center">
                Đăng nhập
            </Typography>   
                <Grid container justifyContent="center">
                    <FormControl sx={{width: 400}}>
                            <TextField
                            id="outlined-basic" sx={{width: "100%", mt:2}}  label="Tài khoản" variant="outlined"  />
                            <TextField
                            id="outlined-basic" sx={{width: "100%", mt:2}}  label="Mậu khẩu" variant="outlined" type="password" />
                            <Button sx={{mt:2, width: 200, alignItems: "center"}} variant='contained'>Đăng nhập</Button> 
                    </FormControl>
                </Grid>

        </Container>
      
    )
}

export default LogIn