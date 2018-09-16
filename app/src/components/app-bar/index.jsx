import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import GridIcon from '@material-ui/icons/GridOn';
import ListIcon from '@material-ui/icons/ListSharp';
import { Link } from 'react-router-dom';

import ProgressBar from '../progress-bar';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    color: '#fff',
  },
};

function ButtonAppBar(props) {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar >
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            BuiltLabs Sample
          </Typography>
          <Tooltip title="Grid View">
            <Link to="/" className={classes.link}>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Grid View">
                <GridIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Scroll View">
            <Link to="/scroll" className={classes.link}>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Scroll View">
                <ListIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </Toolbar>
        <ProgressBar />
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
