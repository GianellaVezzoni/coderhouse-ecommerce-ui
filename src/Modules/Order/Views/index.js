import React, { useEffect, useState } from 'react'
import { useStyles } from './styles'
import { useParams } from 'react-router-dom';
import Header from '../../../Components/Header';
import {httpGetMethod} from '../../../Api';
import { ORDER } from '../../../Api/constants';
import { Box, Loader, Text } from '@mantine/core';

const Order = () => {
  const {orderId} = useParams();
  const {classes} = useStyles();
  const [orderInfo, setOrderInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getOrderData = async () => {
    setIsLoading(true);
    const response = await httpGetMethod(`${ORDER}/${orderId}`);
    setOrderInfo(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getOrderData();
  },[])
  return (
    <>
      <Header />
        {!isLoading ? (
          <Box className={classes.boxMainContainer}>
            <Text className={classes.title}>ORDEN GENERADA</Text>
            <Box>
              <Text className={classes.detail}>Detalle:</Text>
              <Text>
                Id: #{orderInfo?.orderNumber}
              </Text>
              <Text>
                Estado: {orderInfo?.status === 'generated' ? 'Generada' : 'Pendiente'}
              </Text>
              <Text>
                Email comprador: {orderInfo?.email}
              </Text>
            </Box>
            <Box>
              <Text className={classes.thankfullMessage}>
                Muchas gracias por comprar en RAPPI SHOP!
              </Text>
            </Box>
          </Box>
        ):(
          <Loader />
        )}
    </>
  )
}

export default Order