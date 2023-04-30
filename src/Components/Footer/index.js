import { Box, Text } from '@mantine/core'
import React from 'react'
import { useStyles } from './styles';

const Footer = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.boxMainContainer}>
      <Text>RAPI SHOP 2023. Todos los derechos reservados</Text>
    </Box>
  )
}

export default Footer