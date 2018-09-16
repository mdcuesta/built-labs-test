import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { setPageSize } from '../../actions/setting-action';

function Pager(props) {
  const { page, size, history, actions } = props;

  return (
    <TablePagination
      rowsPerPageOptions={[12, 24, 48]}
      rowsPerPage={size}
      labelRowsPerPage="Items per page"
      labelDisplayedRows={({from, to}) => `${from}-${to}`}
      onChangePage = {(e, page) => history.push({
          pathname: `/page/${page + 1}`,
        })
      }
      onChangeRowsPerPage={(e) => actions.setPageSize(e.target.value)}
      page={page - 1}
      count={5000}
      component="div"
    />
  );
}

Pager.propTypes = {
  page: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => {
  return {
    page: state.setting.page,
    size: state.setting.size,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ setPageSize }, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pager));
