import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../../Components/Header'
import { ProductsList } from '../Components/ProductsList'
import {httpGetMethod} from '../../../Api/index';
import { PRODUCTS } from '../../../Api/constants';
import { Box, Loader, Text } from '@mantine/core';
import { useStyles } from './styles';
import Footer from '../../../Components/Footer';

const Products = () => {
  const {classes} = useStyles();
  const [productList, setProductList] = useState([]);

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
        </Box>
        {productList.length > 0 ? (
          <Box className={classes.boxProductListContainer}>
            <ProductsList products={productList} />
          </Box>
        ):<Loader className={classes.loader} />}
      </Box>
      <Footer />
    </>
  )
}

export default Products