import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: '260px',
    backgroundSize: 'contain'
  },
  cardContent: {
    height: '90px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));