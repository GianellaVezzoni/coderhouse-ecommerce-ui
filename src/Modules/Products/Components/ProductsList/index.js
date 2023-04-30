import React, { useContext } from 'react';
import { ActionIcon, Box, Button, Grid, Image, Text, Tooltip } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import {useStyles} from './styles';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../../Context/CartContext';
const imageDefault = require('../../../../Assets/img/defaultImageProduct.jpg')

export const ProductsList = ({products}) => {
  const context = useContext(CartContext);
  const {classes} = useStyles();
  const navigate = useNavigate();

  return (
    <Grid>
      {
        products?.map(item => (
          <Grid.Col span={3} key={item.id} className={classes.gridItem}>
            <Image width={300} height={300} src={!item.image ? imageDefault : item.image} />
            <Text className={classes.productName}>
              {item.name}
            </Text>
            <Box className={classes.boxBottomContentContainer}>
              <Text className={classes.priceText}>
                Precio: ${item.price}
              </Text>
             <Tooltip label='Añadir al carrito'>
                <ActionIcon
                  onClick={() => context.addProductToCart({item, quantity: 1})}
                >
                  <IconPlus color='red' />
                </ActionIcon>
             </Tooltip>
            </Box>
            <Button variant='light' onClick={() => navigate(`/detalle-producto/${item.id}`)}>
              Ver detalle
             </Button>
          </Grid.Col>
        ))
      }
    </Grid>
  )
}
