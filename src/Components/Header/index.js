import { ActionIcon, Box, Text } from '@mantine/core'
import React from 'react'
import {menu} from './menuList';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { IconUserCircle } from '@tabler/icons-react';

const Header = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.boxMainContainer}>
      <Text className={classes.logoText}>RAPPI SHOP</Text>
      <Box className={classes.boxMenuContainer}>
        {menu.map(item => (
          <Link key={item.route} to={item.route}>
            <Text className={classes.linkText}>
              {item.name}
            </Text>
          </Link>
        ))}
      </Box>
      <ActionIcon>
          <IconUserCircle color='#FFF' fontSize={50} />
        </ActionIcon>
    </Box>
  )
}

export default Header