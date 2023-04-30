import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  boxMenuContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: '1rem'
  },
  boxMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#6363ff',
    margin: '-1rem',
    height: '40px',
    paddingTop: '20px',
    paddingLeft: '1rem',
    marginTop: '5rem',
    color: '#FFF'
  },
  linkText: {
    color: '#FFF',
    marginRight: '1rem',
    textDecorationLine: 'none'
  },
  logoText: {
    fontSize: '30px',
    color: '#FFF',
    marginTop: '-0.5rem',
    marginLeft: '1rem'
  }
}));
