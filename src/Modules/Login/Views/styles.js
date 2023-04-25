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
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginBottom: '2rem'
  },
  input: {
    marginBottom: '0.5rem',
  },
  submitButton: {
    width: '20%',
    alignSelf:'center',
    marginTop: '1rem'
  },
  notification: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  errorText: {
    color: 'red',
    marginTop: '-0.5rem',
    fontSize: '15px',
  }
}));
