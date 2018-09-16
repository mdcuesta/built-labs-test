import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-infinite-scroller';

import UserCard from '../user-card';
import { fetchUsers, emptyUsers } from '../../actions/users-action';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    overflow: 'auto',
  },
  grid: {
    marginTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  progress: {
    margin: 'auto',
    width: 80,
    height: 80,
  },
});

const SCROLL_PAGE_SIZE = 24;

class ScrollView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };

    this.onLoadMore = this.onLoadMore.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.emptyUsers();
  }

  onLoadMore(page) {
    const { actions, loading } = this.props;
    if (loading) {
      return;
    }
   
    actions.fetchUsers(page, SCROLL_PAGE_SIZE, true);
  }

  render() {
    const { classes, loading } = this.props;

    return (
      <div className={classes.root}>
        <InfiniteScroll
          pageStart={1}
          loadMore={this.onLoadMore}
          hasMore={!loading}
        >
          <Grid container spacing={24} align="center" className={classes.grid}>
            {this.props.users.map((user) => (
              <UserCard user={user} key={user.login.uuid} />
            ))}
            <CircularProgress className={classes.progress} color="secondary" />
          </Grid>
        </InfiniteScroll>
      </div>
    );
  }
}

ScrollView.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    loading: state.loadProgress.show,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      emptyUsers,
      fetchUsers,
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ScrollView));
