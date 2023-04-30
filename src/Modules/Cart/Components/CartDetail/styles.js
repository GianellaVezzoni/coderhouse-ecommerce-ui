import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  loader: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    marginTop: '1rem'
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '3rem'
  },
  deleteCartButton: {
    marginLeft: '1rem',
    borderColor: 'red',
    color: 'red'
  },
  emptyCartText: {
    fontSize: 20,
    textAlign:'center'
  },
  goBackButton: {
    marginTop: '2rem'
  }
}));
