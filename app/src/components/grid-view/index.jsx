import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Pager from './pager'
import UserCard from '../user-card';
import { setPage } from '../../actions/setting-action';
import { fetchUsers } from '../../actions/users-action';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  grid: {
  },
});

class GridView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions, size } = this.props;

    if (this.props.match.params.page) {
      const { page } = this.props.match.params;
      actions.fetchUsers(page, size);
    } else {
      actions.setPage(1);
      actions.fetchUsers(1, size);
    }
  }

  componentWillReceiveProps(next) {
    const { page } = next.match.params;
    const nextPage = parseInt(page);

    const { actions } = this.props;

    if (page !== undefined && this.props.page !== nextPage) {
      actions.setPage(nextPage);
      actions.fetchUsers(nextPage, this.props.size);
    } else if (this.props.size !== next.size) {
      actions.fetchUsers(this.props.page, next.size);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Pager />
        <Grid container spacing={24} align="center" className={classes.grid}>
          {this.props.users.map((user) => (
            <UserCard user={user} key={user.login.uuid} />
          ))}
        </Grid>
        <Pager />
      </div>
    );
  }
}

GridView.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    page: state.setting.page,
    size: state.setting.size,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ fetchUsers, setPage }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(GridView));
