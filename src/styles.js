import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.down('xs')]: {
            borderRadius: 15,
            margin: '30px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            borderRadius: 15,
            margin: '30px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        [theme.breakpoints.up('md')]: {
            borderRadius: 15,
            margin: '30px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image1: {
        [theme.breakpoints.down('xs')]: {
            width: '95px',
            height: '60px',
        },
        [theme.breakpoints.up('sm')]: {
            margin: '0 15px',
            width: '95px',
            height: '60px',
        }
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('xs')]: {
        mainContainer: {
            flexDirection: 'column-reverse'
        }
    }
}));