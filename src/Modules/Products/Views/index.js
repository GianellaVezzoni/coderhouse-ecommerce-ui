import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../../Components/Header'
import { ProductsList } from '../Components/ProductsList'
import {httpGetMethod} from '../../../Api/index';
import { PRODUCTS } from '../../../Api/constants';
import { Box, Button, Loader, Text } from '@mantine/core';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const {classes} = useStyles();
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  const getData = useCallback(async() => {
    const response = await httpGetMethod(PRODUCTS, {});
    setProductList(response?.data);
  },[]);

  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <Header />
      <Box className={classes.boxGridContainer}>
        <Box className={classes.topContentContainer}>
          <Text className={classes.sectionTitle}>Productos</Text>
          <Button
            onClick={() => navigate('/administrar-productos')}
          >
            Administrar productos
          </Button>
        </Box>
        {productList.length > 0 ? (
          <ProductsList products={productList} />
        ):<Loader className={classes.loader} />}
      </Box>
    </>
  )
}

export default Products