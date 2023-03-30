import * as React from 'react';
import {Container, Grid, Typography} from '@mui/material'
import BasicBreadcrumbs from '~/components/BasicBreadcrumbs'
import BasicTable from '~/components/BasicTable'
function Cart () {
    return (
        <Container>
            <BasicBreadcrumbs />
            <Typography variant="h3" textAlign="center">
                Giỏ hàng của bạn
            </Typography>
            <Typography variant="body2" textAlign="left">
                Bạn có 1 sản phẩm trong giỏ hàng
            </Typography>

            <Grid container>
                <BasicTable/>
            </Grid>
        </Container>
    )
}

export default Cart