import * as React from 'react';
import {Container, Box, Grid, Typography, Button, Link, Divider} from '@mui/material'
import image from '~/assets/images/slide_index_1.webp'
import BasicBreadcrumbs from '~/components/BasicBreadcrumbs'
import StandardImageList from '~/components/StandardImageList'
import BasicSelect from '~/components/BasicSelect'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import ListItems from '~/components/ListItems'

function Products () {
    const [model, setModel] = React.useState()
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

    const [quantity, setQuantity] = React.useState(0)
  
    return (
        <Container>
            <Grid container >
                <BasicBreadcrumbs />
            </Grid>
            <Grid container sx={{mt: 2, height: 400, overflow:"hidden"}}  spacing={2}>
                <Grid item xs={1} sx={{height: "100%"}} >
                   <StandardImageList />
                </Grid>
                <Grid item xs={5}>
                <Box 
                component="img"
                sx={{
                    height: "100%",
                    width: "100%",
                }}
                src={image}
                />
                </Grid>
                <Grid item xs={4}>
                   <Typography variant="h4">
                    ÁO THỂ THAO BÓNG CHÀY CỔ TRỤ TS
                   </Typography>
                   <Grid 
                   container
                   alignItems="center"  
                    >
                    <Typography variant="button" display="block" gutterBottom sx={{textDecoration: "line-through"}}> 
                    192,000₫    
                    </Typography>
                   <Typography variant="h6">
                    109,000₫
                   </Typography>
                   <Typography variant="h6">
                   -43%
                   </Typography>
                    </Grid>
                    <Typography>Màu sắc</Typography>
                        <BasicSelect  />
                    <Typography>Kích thước</Typography>
                        <BasicSelect />
                    <Typography>Số lượng</Typography>
                        <Grid container>
                            <Button
                            onClick={() => {
                                if (quantity !== 0 ){
                                    setQuantity(quantity - 1);
                                }
                            }}
                            >
                            -
                            </Button>  
                            <Typography>
                            {quantity}
                            </Typography>  
                            <Button
                            onClick={() => {
                                setQuantity(quantity + 1)
                            }}
                            >
                            + 
                            </Button>
                        </Grid> 
                        <Button>Thêm vào giỏ</Button>
                        <Button>Mua ngay</Button>
                </Grid>
                 {/*s  */}
                <Grid item xs={2}>
                    <Grid container >
                        <Grid 
                            item
                            xs={3}
                            sx={{display: 'flex',}}
                            alignItems="center" 
                        >
                            <LocalShippingIcon fontSize="large"/>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant='h6' sx={{fontWeight: "600"}}>
                            Giao hàng miễn phí
                            </Typography>
                            <Typography>
                            Với đơn hàng trên 200K
                            </Typography>
                        </Grid>
                        <Divider sx={{width: "100%"}}/>
                    </Grid>
                    <Grid container >
                        <Grid 
                            item
                            xs={3}
                            sx={{display: 'flex',}}
                            alignItems="center" 
                        >
                            <LocalShippingIcon fontSize="large"/>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant='h6' sx={{fontWeight: "600"}}>
                            Giao hàng miễn phí
                            </Typography>
                            <Typography>
                            Với đơn hàng trên 200K
                            </Typography>
                        </Grid>
                         <Divider sx={{width: "100%"}}/>
                    </Grid>
                    <Grid container >
                        <Grid 
                            item
                            xs={3}
                            sx={{display: 'flex',}}
                            alignItems="center" 
                        >
                            <LocalShippingIcon fontSize="large"/>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant='h6' sx={{fontWeight: "600"}}>
                            Giao hàng miễn phí
                            </Typography>
                            <Typography>
                            Với đơn hàng trên 200K
                            </Typography>
                        </Grid>
                    
                    </Grid>
                </Grid>
            </Grid>


                <Typography variant="h4" sx={{mt: 4, mb: 2}} align='center'>
                    <Divider>
                        Sản phẩm bán chạy
                    </Divider>
                </Typography>

                <ListItems props={items}/>
                <Grid container spacing={2} sx={{mt: 2}}>
                    <Typography variant='h5'>
                                Mô tả sản phẩm
                    </Typography>
                    <Typography variant='body2' >
                        The standard Lorem Ipsum passage, used since the 1500s <br/>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                        Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                        1914 translation by H. Rackham
                        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

                        Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                    </Typography>

                </Grid>
                <Typography variant="h4" sx={{mt: 4, mb: 2}} align='center'>
                    <Divider>
                        Sản phẩm tương tự
                    </Divider>
                </Typography>
                <ListItems props={items}/>
                <Typography variant="h4" sx={{mt: 4, mb: 2}} align='center'>
                    <Divider>
                       Cảm ơn bạn đã ghé thăm shop ^^
                    </Divider>
                </Typography>
        </Container>
    )
}

export default Products