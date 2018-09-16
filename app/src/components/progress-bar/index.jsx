import React from 'react';
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

const mapStateToProps = (state) => {
  return {
    show: state.loadProgress.show,
  };
};

ProgressBar = connect(mapStateToProps)(ProgressBar);

export default ProgressBar;
