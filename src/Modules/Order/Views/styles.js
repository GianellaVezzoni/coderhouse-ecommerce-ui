import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  boxMainContainer: {
    marginTop: '10rem',
    marginBottom: '10rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    fontSize: '30px',
    marginBottom: '5rem'
  },
  thankfullMessage: {
    fontSize: '20px',
    marginTop: '5rem'
  },
  detail: {
    fontSize: '18px',
    fontWeight: 'bold'
  }
}));
