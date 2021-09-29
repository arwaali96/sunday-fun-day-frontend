import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  quoteWrapper: {
    background: 'beige',
    padding: '50px',
  },
  quote: {
    // color: 'rgba(163,9,22, 1)',
    color: 'black',
    fontFamily: 'Marker Felt',
  },
}));