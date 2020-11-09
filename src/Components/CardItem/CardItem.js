import React from 'react';
import { Card, CardContent, Typography, CardActions, CardActionArea, CardMedia } from '@material-ui/core'
import './CardItem.scss';
import item1 from '../../Assets/Images/item1.jpg'



const CardItem = (props) => {
    return (
        <div className='intro'>
            <Card >
                <CardActionArea>
                     <CardMedia component="img" height='140'
                        image={props.product.imageUrl} />

                    <CardContent className='introduce'>
                        <Typography className='text-warning' gutterBottom variant='h5' component='h2'>{props.product.title}</Typography>
                        <Typography variant='h7' component='p'>{props.product.description}</Typography>
                        <Typography variant='h7' component='p'>
                            Made In : {props.product.country}
                        </Typography>
                        <Typography className='text-danger' variant='h6' component='p'>
                            Remaining of it : {props.product.stock}
                        </Typography>
                    </CardContent>

                    <CardActions className='link'>
                        <button className='btn btn-danger w-50'>BUY NOW</button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </div>


    )
}

export default CardItem