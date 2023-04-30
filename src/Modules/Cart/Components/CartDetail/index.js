import React, { useContext, useEffect, useState } from 'react'
import { useStyles } from './styles'
import { ActionIcon, Box, Button, Container, Loader, Table, Text } from '@mantine/core';
import { CartContext } from '../../../../Context/CartContext';
import { IconArrowLeft, IconX } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { httpPostMethod } from '../../../../Api';
import { CREATE_ORDER } from '../../../../Api/constants';
import {useAuth} from '../../../../Hooks/useAuth';

const CartDetail = () => {
  const {classes} = useStyles();
  const context = useContext(CartContext);
  const {userId} = useAuth();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true)
    const producstList = context.cart;
    setProducts(producstList);
    setIsLoading(false);
  },[]);

  const rows = products?.map((element) => {
    const productItem = element?.item || element?.data;
    return(
      <tr key={productItem.name}>
      <td>{productItem.name}</td>
      <td>{productItem.description}</td>
      <td>{element.quantity}</td>
      <td>${productItem.price}</td>
      <td>
        <ActionIcon onClick={() => context.removeProductFromCart(element)}>
          <IconX color='red' />
        </ActionIcon>
      </td>
    </tr>
    )
  });

  const createOrder = async() => {
    setIsLoading(true);
    const productsList = products?.map(item => {
      const prod = item?.item || item?.data;
      return ({
        id: prod.id,
        quantity: item.quantity
      })
    })

    const obj = {
      userId: userId,
      products: productsList
    }
    const {response} = await httpPostMethod(CREATE_ORDER, obj);
    setProducts([]);
    context.deleteCart();
    navigate(`/orden/${response.data.id}`);
    setIsLoading(false);
  }

  return (
    <Container>
      {!isLoading ? (
        <Box>
        {products?.length > 0 ? (
          <Table striped withBorder highlightOnHover withColumnBorders>
            <thead>
              <tr>
                <th>Nombre del producto</th>
                <th>Descripcion</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        ):(
          <>
            <Text className={classes.emptyCartText}>El carrito se encuentra vacío</Text>
            <Button className={classes.goBackButton} onClick={() => navigate('/')}>
              <IconArrowLeft />
              Volver a productos
            </Button>
          </>
        )}
        <Box className={classes.buttonsContainer}>
          {products?.length > 0 && 
          <>
            <Button variant='gradient' onClick={() => createOrder()}>
              Finalizar compra
            </Button>
            <Button 
              variant='outline' 
              className={classes.deleteCartButton} 
              onClick={() => {
                context.deleteCart();
                setProducts([]);
              }}
            >
              Eliminar carrito
            </Button>
          </>
          }
        </Box>
      </Box>
      ):(
        <Loader className={classes.loader} />
      )}
    </Container>
  )
}

export default CartDetail