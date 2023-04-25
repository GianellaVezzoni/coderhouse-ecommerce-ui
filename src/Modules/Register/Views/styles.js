import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '98.5vw',
    margin: '-1rem',
    alignItems: 'center',
    backgroundColor: 'lightsalmon',
    height: '101vh',
    overflow: 'hidden'
  },
  boxFormContainer: {
    display:'flex',
    justifyContent:'center',
    flexDirection: 'column',
    width: '40%',
    marginLeft: '5rem'
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#000',
    marginBottom: '2rem'
  },
  boxInputsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxEmailInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '122%',
  },
  input: {
    marginBottom: '0.5rem',
    width: '19rem',
    marginLeft: '1rem',
  },
  emailInput: {
    width: '80%', 
    marginBottom: '0.5rem',
    marginLeft: '1rem',
  },
  submitButton: {
    width: '20%',
    alignSelf:'center',
    marginTop: '1rem',
    marginLeft: '1rem'
  },
  textLink: {
    marginLeft: '1rem'
  },
  errorText: {
    color: 'red',
    marginTop: '-0.5rem',
    fontSize: '15px',
    marginLeft:'1rem'
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: '20px'
  },
  iconModal: {
    display: 'flex',
    width: '100%'
  }
}));
