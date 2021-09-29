import { useSelector } from 'react-redux';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import Fade from '@mui/material/Fade';
import Post from './Post/Post'
import useStyles from './styles'
import Hidden from '@material-ui/core/Hidden';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        <div style={{ position: 'relative' }}>
            <Hidden xsDown>
                <div style={{ position: 'absolute', top: '0', left: '0' }}>
                    {!posts.length ?
                        <div className={classes.quoteWrapper}>
                            <Typography className={classes.quote} variant='h3' align='center'>"Art enables us to find ourselves and lose ourselves at the same time.” – Thomas Merton</Typography>
                        </div> :
                        <div className={classes.elementToFadeInAndOut}>
                            <div className={classes.quoteWrapper}>
                                <Typography className={classes.quote} variant='h3' align='center'>"Art enables us to find ourselves and lose ourselves at the same time.” – Thomas Merton</Typography>
                            </div>
                        </div>
                    }
                </div>
            </Hidden>
            <Fade in timeout={35000}>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
            </Fade>
        </div>
    )
}

export default Posts