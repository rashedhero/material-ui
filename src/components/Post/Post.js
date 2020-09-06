import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
 

const Post = (props) => {
    const {id, title,body}=props.post;
    const classes = useStyles();
    return (
    
    <div className='card'>
        <Card className={classes.root}>
        <CardActionArea>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             {id}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
        <Button variant="contained" color="secondary"><Link to={`/post/${id}`}>See Info</Link></Button>
         
        </CardActions>
      </Card>



      </div>
     
       
    );
};

export default Post;