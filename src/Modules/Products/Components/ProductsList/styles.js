import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  productName: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '1rem'
  },
  boxBottomContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '70%'
  },
  gridItem: {
    boxShadow: '1px 2px 9px #6F6F6F',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginLeft: '1rem',
    marginBottom: '1rem'
  },
  priceText: {
    fontSize: '20px',
    fontWeight: 'initial'
  }
}));
