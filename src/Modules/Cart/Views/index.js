import React from 'react'
import Header from '../../../Components/Header'
import { Box, Text } from '@mantine/core'
import CartDetail from '../Components/CartDetail'
import { useStyles } from './styles'

const Cart = () => {
  const {classes} = useStyles();

  return (
    <>
      <Header />
      <Box className={classes.boxContainer}>
        <Text className={classes.title}>
          Carrito
        </Text>
        <CartDetail />
      </Box>
    </>
  )
}

export default Cart