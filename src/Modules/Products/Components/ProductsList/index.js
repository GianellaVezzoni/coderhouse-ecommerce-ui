import React from 'react';
import { ActionIcon, Box, Button, Grid, Image, Text, Tooltip } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import {useStyles} from './styles';
import { useNavigate } from 'react-router-dom';
import {useCart} from '../../../../Hooks/useCart';
const imageDefault = require('../../../../Assets/img/defaultImageProduct.jpg')

export const ProductsList = ({products}) => {
  const {classes} = useStyles();
  const navigate = useNavigate();
  const {dispatch} = useCart();

  return (
    <Grid>
      {
        products?.map(item => (
          <Grid.Col span={3} key={item.id} className={classes.gridItem}>
            <Image width={300} height={300} src={item.image === '' ? imageDefault : item.image} />
            <Text className={classes.productName}>
              {item.name}
            </Text>
            <Box className={classes.boxBottomContentContainer}>
              <Text className={classes.priceText}>
                Precio: ${item.price}
              </Text>
             <Tooltip label='Añadir al carrito'>
                <ActionIcon
                  onClick={() => {
                    dispatch({
                      type: 'ADD_PRODUCTS',
                      payload: {
                        products: item
                      }
                    });
                  }}
                >
                  <IconPlus color='red' />
                </ActionIcon>
             </Tooltip>
            </Box>
            <Button variant='light' onClick={() => navigate(`/detalle-producto/${item._id}`)}>
              Ver detalle
             </Button>
          </Grid.Col>
        ))
      }
    </Grid>
  )
}
