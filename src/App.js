// Components from @material-ui/core
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import activity from './images/activity.webp'
import funday from './images/funday.png'
import useStyles from './styles'

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Container maxwidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Hidden xsDown>
                    <Typography className={classes.heading} variant='h2' align='center'>sunday</Typography>
                </Hidden>
                <img className={classes.image1} src={funday} alt='fun' height='60' />
                <Hidden xsDown>
                    <Typography className={classes.heading} variant='h2' align='center'>day</Typography>
                </Hidden>
                <img className={classes.image} src={activity} alt='activity' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App