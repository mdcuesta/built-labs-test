import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';

function ProgressBar(props) {
  if (props.show) {
    return (
      <LinearProgress color="secondary" variant="indeterminate" />
    )
  } else {
    return (
      <LinearProgress color="primary" variant="determinate" value={100} />
    )
  }
}

ProgressBar.propTypes = {
  show: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    show: state.loadProgress.show,
  };
};

ProgressBar = connect(mapStateToProps)(ProgressBar);

export default ProgressBar;
