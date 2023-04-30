import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  boxContainer: {
    marginLeft: '4rem'
  },
  productName: {
    fontSize: '30px',
    fontWeight: 'bold'
  },
  description: {
    marginTop: '1rem', 
    marginBottom: '2rem'
  },
  buttonAddToCart: {
    marginTop: '2rem'
  },
  stockInput: {
    marginTop: '2rem'
  },
  notification: {
    position: 'absolute',
    top: '3.5rem',
    right: 0
  }
}));
