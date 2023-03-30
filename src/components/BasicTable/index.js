import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Typography, Box, Grid, Button} from '@mui/material';

import image from '~/assets/images/slide_index_1.webp'


const items = [
    {
        itemName: "Áo Thể Thao Nam For Run TS",
        itemColor: "Đen",
        itemSize: "M",
        itemImage: image,
        itemPrice: 95,
    }
    
];

export default function BasicTable() {

    const [quantity, setQuantity] = React.useState(0)
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sản phẩm</TableCell>
            <TableCell align="center">Đơn giá</TableCell>
            <TableCell align="center">Số lượng</TableCell>
            <TableCell align="center">Thành tiền</TableCell>
            <TableCell align="center"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.itemName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{width: "400px"}} component="th" scope="row">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3}>
                    <Box 
                        component="img"
                        sx={{
                            height: "100%",
                            width: "100%",
                        }}
                        src={image}
                    />
                    </Grid>
                    <Grid item xs={9} > 
                        <Typography varian="body2">
                            {item.itemName}
                        </Typography>
                        <Typography varian="body2">
                            {item.itemColor} / {item.itemSize}
                        </Typography>
                    </Grid>
                </Grid>
               
              </TableCell>
              <TableCell align="center">{item.itemPrice},000 đ</TableCell>
              <TableCell align="center">
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Button 
                sx={{
                    minWidth: "40px",
                    height: "40px",
                    padding:"5px"
                }}
                variant="outlined"
                onClick={() => {
                    if (quantity !== 0) {
                        setQuantity(quantity - 1);
                    }
                }}>
                    -
                </Button>
                <Typography variant="body2" sx={{ml: "10px", mr: "10px"}}>
                {quantity}
                </Typography>
                <Button 
                 sx={{
                    minWidth: "40px",
                    height: "40px",
                    padding:"5px"
                }}
                variant="outlined"
                onClick={() => {
                        setQuantity(quantity + 1);
                }}>
                    +
                </Button>
                </Grid>
              </TableCell>
              <TableCell align="center">{quantity === 0 ? 0 : `${item.itemPrice * quantity},000 đ`}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}