import { Box, Button, Text } from '@mantine/core'
import React from 'react'
import { useStyles } from './styles'

const ProductInfo = ({data}) => {
  const {classes} = useStyles();

  const getCategories = () => {
    return (
      <></>
    )
  }

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
        <Text>
          Cateogoría: {data.categories.length > 0 ? getCategories() : 'Sin cateogoría'}
        </Text>
      </Box>
      <Button disabled={data.categories.length > 0} className={classes.buttonAddToCart}>
        Añadir al carrito
      </Button>
    </Box>
  )
}

export default ProductInfo