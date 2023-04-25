import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  boxMainContainer: {
    marginTop: '4rem',
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '2rem'
  },
  loader: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    marginTop: '4rem'
  }
}));
