import { Box, Button, Notification, Text, TextInput } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { useStyles } from './styles'
import { CartContext } from '../../../../Context/CartContext';
import { useEffect } from 'react';

const ProductInfo = ({data}) => {
  const {classes} = useStyles();
  const context = useContext(CartContext);
  const [quantityValue, setQuantityValue] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if(showNotification){
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  },[]);

  return (
    <Box className={classes.boxContainer}>
      <Text className={classes.productName}>{data?.name}</Text>
      <Text className={classes.description}>{data?.description}</Text>
      <Box>
        <Text>
          Precio: ${data.price}
        </Text>
        <Text>
          Cantidad disponible: {data.stock}
        </Text>
        <TextInput 
          type='number'
          placeholder='Ingrese la cantidad que desea comprar'
          onChange={(e) => {
            const value = e.target.value
            if(typeof value === Number && (value > 0 || value <= data.stock)){
              setQuantityValue(e.target.value);
            }
          }}
          className={classes.stockInput}
          label='Cantidad'
        />
      </Box>
      <Button onClick={() => {
        context.addProductToCart({data, quantity: 1});
        setShowNotification(true);
      }} disabled={data.stock === 0 | quantityValue > 0} className={classes.buttonAddToCart}>
        Añadir al carrito
      </Button>
      {showNotification && (
        <Notification onClose={() => 
          setShowNotification(false)} 
          className={classes.notification}
          title={`${quantityValue > 1 ? 'Producto' : 'Productos'} agregado al carrito`} 
        />
      )}
    </Box>
  )
}

export default ProductInfo