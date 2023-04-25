import { Box, Button, Container, Image, Input, Modal, PasswordInput, Text } from '@mantine/core'
import React, { useState } from 'react'
import { useStyles } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { httpPostMethod } from '../../../Api'
import { IconCheck, IconCircleXFilled } from '@tabler/icons-react'
import { REGISTER } from '../../../Api/constants'
const wallpaper = require('../../../Assets/img/loginWallpaper.avif')

const Register = () => {
  const {classes} = useStyles();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);
  const [isModalVisible, setModalVisible] = useState({
    isVisible: false,
    message: ''
  });

  const { handleSubmit, register, formState: {errors}, watch, setError } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      repeatPassword: ''
    },
  });

  const onSubmit = async(data) => {
    if(data.password !== data.repeatPassword){
      setErrorMessage(true);
    }else{
      const {response} = await httpPostMethod(REGISTER, {
        username: data.email,
        name: data.name,
        phone: data.phone,
        password: data.password
      });
      setModalVisible({
        isVisible: true,
        message: response.data.message
      });
    }
  }

  return (
    <Container className={classes.mainContainer}>
      <Box className={classes.boxFormContainer}> 
        <Text className={classes.title}>Crea tu cuenta ahora!</Text>
       <form onSubmit={handleSubmit(onSubmit)}>
          <Box className={classes.boxInputsContainer}>
            <Box>
              <Input {...register('name', { required: true })} className={classes.input} placeholder='Nombre completo' />
              {errors && errors?.name?.type === 'required' ? <Text className={classes.errorText}>
                Campo requerido
                </Text>: null}
            </Box>
            <Box>
              <Input {...register('phone', { required: true })} className={classes.input} placeholder='Telefono' />
              {errors && errors?.phone?.type === 'required' ? <Text className={classes.errorText}>
              Campo requerido
              </Text>: null}
            </Box>
          </Box>
          <Box className={classes.boxEmailInputContainer}>
            <Input {...register('email', { required: true })} className={classes.emailInput} placeholder='Email' />
              {errors && errors?.email?.type === 'required' ? <Text className={classes.errorText}>
              Campo requerido
            </Text>: null}
          </Box>
          <Box className={classes.boxInputsContainer}>
            <Box>
              <PasswordInput {...register('password', { required: true })} placeholder='Contraseña' className={classes.input} />
              {errors && errors?.password?.type === 'required' ? <Text className={classes.errorText}>
                Campo requerido
              </Text>: null}
            </Box>
            <Box>
              <PasswordInput {...register('repeatPassword', { required: true })} placeholder='Repetir contraseña' className={classes.input} />
              {errors && errors?.repeatPassword?.type === 'required' ? <Text className={classes.errorText}>
                Campo requerido
              </Text>: null}
            </Box>
          </Box>
            <Text className={classes.textLink}>Ya tenes cuenta? <Link to='/'>Inicia sesión!</Link></Text>
            <Button className={classes.submitButton} type='submit'>
              Ingresar
            </Button>
       </form>
      </Box>
      <Image width={'50rem'} src={wallpaper} />
      {errorMessage && (
        <Modal opened={errorMessage} centered onClose={() => setErrorMessage(false)}>
          <IconCircleXFilled size={40} className={classes.iconModal} />
          <Text className={classes.modalTitle}>Las contraseñas deben coincidir</Text>
        </Modal>
      )}
      {isModalVisible.isVisible && (
        <Modal opened={isModalVisible.isVisible} centered onClose={() => {
          setModalVisible({
            ...isModalVisible,
            isVisible: false
          });
          navigate('/login');
        }}>
          <IconCheck size={40} className={classes.iconModal} />
        <Text className={classes.modalTitle}>Usuario registrado con exito!</Text>
      </Modal>
      )}
    </Container>
  )
}

export default Register