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
    background: 'rgba(219, 210, 178, 1)',
    padding: '50px',
    margin: '15px 0',
  },
  quote: {
    color: 'black',
    fontFamily: 'Marker Felt',
  },
  elementToFadeInAndOut: {
    opacity: '0',
    animation: '$fade 6s linear',
  },
  "@keyframes fade": {
    "0%": { opacity: 1 },
    "100%": { opacity: 0 },
  }
}));