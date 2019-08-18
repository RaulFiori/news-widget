import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NewsWidget = props => {
  const { page } = props;
  return <div>Página {page}</div>;
};

NewsWidget.propTypes = {
  // news: PropTypes.arrayOf().isRequired,
  page: PropTypes.number.isRequired
};

const mapStateToProps = ({ newsState: { page } }) => ({ page });

export default connect(mapStateToProps)(NewsWidget);
