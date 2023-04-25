import { Box, Button, Container, Image, Input, Notification, PasswordInput, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useStyles } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { httpPostMethod } from '../../../Api'
import { LOGIN } from '../../../Api/constants'
import {useAuth} from '../../../Hooks/useAuth';
const wallpaper = require('../../../Assets/img/loginWallpaper.avif')

const Login = () => {
  const {classes} = useStyles();
  const {dispatch} = useAuth();
  const navigate = useNavigate();
  const [isErrorMessage, setErrorMessage] = useState({
    isVisible: false,
    message: ''
  });

  useEffect(() => {
    localStorage.clear();
  },[]);

  const { handleSubmit, register, formState: {errors} } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
  });

  const onSubmit = async(data) => {
    const {response} = await httpPostMethod(LOGIN, {
      username: data.email,
      password: data.password
    });
    if(response?.data?.message){
      setErrorMessage({
        isVisible: true,
        message: response?.data?.message
      })
    }else{
      dispatch({
        type: 'LOGIN',
        payload: {
          email: response.email,
          token: response.token
        }
      });
      navigate('/');
    }
  }

  return (
    <Container className={classes.mainContainer}>
      <Box className={classes.boxFormContainer}> 
        <Text className={classes.title}>Bienvenido/a!</Text>
        <Text className={classes.subtitle}>Inicia sesión para comenzar a comprar</Text>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('email', { required: true })} className={classes.input} placeholder='Email' />
          {errors && errors?.email?.type === 'required' ? <Text className={classes.errorText}>
          Campo requerido
          </Text>: null}
          <PasswordInput {...register('password', { required: true })} className={classes.input} placeholder='Contraseña' />
          {errors && errors?.password?.type === 'required' ? <Text className={classes.errorText}>
          Campo requerido
          </Text> : null}
          <Text>No tenes cuenta? <Link to='/registro'>Registrate ahora!</Link></Text>
          <Button className={classes.submitButton} type='submit'>
            Ingresar
          </Button>
        </form>
      </Box>
      <Image width={'50rem'} src={wallpaper} />
      {isErrorMessage.isVisible && (
        <Notification 
          className={classes.notification}
          title={isErrorMessage.message}
          onClose={() => setErrorMessage({
            ...isErrorMessage,
            isVisible: false
          })}
        />
      )}
    </Container>
  )
}

export default Login