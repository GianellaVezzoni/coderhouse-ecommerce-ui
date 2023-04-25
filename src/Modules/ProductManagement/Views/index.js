import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../../Components/Header/index';
import { Box, Table, Text } from '@mantine/core';
import {httpGetMethod} from '../../../Api/index';
import { PRODUCTS } from '../../../Api/constants';

const ProductManagement = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = useCallback(async() => {
    const response = await httpGetMethod(PRODUCTS);
    setProductList(response);
  },[]);

  useEffect(() => {
    getProducts();
  },[]);

  const rows = productList?.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
    console.log('productList ', productList)
  return (
    <>
      <Header />
      <Box>
        <Table>
          <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
            </tr>
          </thead>
          {productList.length > 0 ? (
            <tbody>{rows}</tbody>
          ):(
            <tbody>
              <Text>No se encontraron resultados</Text>
            </tbody>
          )}
        </Table>
      </Box>
    </>
  )
}

export default ProductManagement