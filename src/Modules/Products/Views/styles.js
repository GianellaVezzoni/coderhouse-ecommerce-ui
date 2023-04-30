import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  boxGridContainer: {
    marginTop: '2rem',
    marginLeft: '2rem'
  },
  sectionTitle: {
    fontSize: '30px',
    marginBottom: '2rem',
    alignSelf: 'flex-end',
    display: 'flex'
  },
  loader: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%'
  },
  topContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '2rem'
  },
  boxProductListContainer: {
    marginBottom: '5rem',
    justifyContent: 'center'
  }
}));
