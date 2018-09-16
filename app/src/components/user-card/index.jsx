import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Grow from '@material-ui/core/Grow';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const styles = {
  card: {
  },
  cardAction: {
    width: '100%',
  },
  cardContent: {
    textAlign: 'center',
  },
  avatar: {
    margin: 10,
    marginBottom: 20,
  },
  bigAvatar: {
    width: 100,
    height: 100,
    margin: 'auto',
  },
};

function UserCard(props) {
  const { user, classes } = props;

  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Grow in={true}>
        <Card className={classes.card}>
          <CardActionArea className={classes.cardAction}>
            <CardContent className={classes.cardContent}>
              <Avatar
                alt={`${user.name.first} ${user.name.last}`.toUpperCase()}
                src={user.picture.large}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <Typography gutterBottom variant="headline" component="h2">
                {`${user.name.first} ${user.name.last}`.toUpperCase()}
              </Typography>
              <Typography component="h4">
                {`${user.location.city}, ${user.location.state}`.toUpperCase()}
              </Typography>
              <Typography component="h5">
                {user.email}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Add to favorites">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grow>
    </Grid>
  );
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCard);
