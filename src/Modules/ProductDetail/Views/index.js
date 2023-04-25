import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../../Components/Header'
import { useParams } from 'react-router-dom';
import {httpGetMethod} from '../../../Api/index';
import { PRODUCT } from '../../../Api/constants';
import { Box, Image, Loader } from '@mantine/core';
import ProductInfo from '../Components/ProductInfo';
import { useStyles } from './styles';
const productImage = require('../../../Assets/img/defaultImageProduct.jpg');

const ProductDetail = () => {
  const {productId} = useParams();
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {classes} = useStyles();

  const getData = useCallback(async()=> {
    setIsLoading(true);
    const response = await httpGetMethod(`${PRODUCT}/${productId}`);
    setProductData(response?.data);
    setIsLoading(false);
  },[]);

  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <Header />
      {!isLoading && productData !== null ? (
        <Box className={classes.boxMainContainer}>
        <Image width={800} height={800} src={productData?.image || productImage} />
        <ProductInfo data={productData} />
      </Box>
      ):(
        <Loader className={classes.loader} />
      )}
    </>
  )
}

export default ProductDetail