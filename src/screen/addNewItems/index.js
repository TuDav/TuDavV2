import { useEffect, useState } from "react";
import {Container, 
    Box, 
    Grid, 
    Typography, 
    Button, 
    Link, 
    Divider, 
    InputLabel, 
    Input, 
    FormHelperText, 
    TextField, 
    FormControlLabel,
    Checkbox,
    FormControl} from '@mui/material'
import image from '~/assets/images/slide_index_1.webp'
import flashSaleImg from '~/assets/images/flsale.png'
import ListItems from '~/components/ListItems'
import BasicBreadcrumbs from '~/components/BasicBreadcrumbs'
import FileUpload from '~/components/FileUpload'
import ControlledCheckbox from '~/components/ControlledCheckbox'
import BasicTable from '~/components/BasicTable'


function AddNewItems () {
    const [model, setModel] = useState()

    const itemSizes = ["M", "L", "XL", "XXL"]
    const itemColors = [
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
    const handleSetModel = (key, value) => {
        // const modelTerm = {...model}
        // modelTerm[key] = value
        // setModel(modelTerm)
        // console.log(model)
    }
  
    return (
        <Container>
            <BasicBreadcrumbs />
            <Typography variant="h3" textAlign="center">
                Thêm sản phẩm mới
            </Typography>

            

            <FormControl sx={{width: "100%"}}>
                <Box>
                    <TextField
                     id="outlined-basic" fullWidth  label="Tên sản phẩm" variant="outlined" onBlur={handleSetModel("name")} />
                </Box>
                <Box>
                    <TextField id="outlined-basic" fullWidth  label="Giá" variant="outlined" />
                </Box>
                <Box>
                    <Typography variant="body2" textAlign="left">
                        Sizes
                    </Typography>
                    {
                        itemSizes.map((itemSize, i) => {
                            return(
                                <FormControlLabel 
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }} 
                                control={<Checkbox defaultChecked />}
                                label={itemSize}
                                value={itemSize}
                            />
                            )
                        })
                    }
                </Box>
                <Box>
                    <Typography variant="body2" textAlign="left">
                        Colors
                    </Typography>
                    {
                        itemColors.map((itemColor, i) => {
                            return (
                                <FormControlLabel 
                                key={i}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                }} 
                                control={<Checkbox defaultChecked />}
                                label={<Box component="img" src={itemColor.src} sx={{width: 100, height: 100}} />}
                                value={itemColor.name}
                            />
                            )
                        })
                    }
                   
                </Box>

                <Box>
                    <Typography variant="body2" textAlign="left">
                        Images
                    </Typography>
                    <FileUpload />
                </Box>

                <Button variant="contained" type="submit">Tạo sản phẩm</Button>
            </FormControl>
        </Container>
    )
}

export default AddNewItems