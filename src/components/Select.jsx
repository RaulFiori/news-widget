import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Api from '../api/news';
import { setSources, selectSource } from '../ducks/newsState';
import { sourceShape } from '../prop-types/news-types';

const lightGrey = '#e6e6e6';
const darkGrey = '#9e9e9e';
const primaryColor = '#009dff';

const StyledSelect = styled.select`
  border: none;
  border-bottom: 1px solid ${lightGrey};
  color: ${primaryColor};
  font-family: 'Roboto';
  background-color: white;
`;

const Option = styled.option`
  padding: 8px;
  color: ${darkGrey};
`;

class Select extends Component {
  componentDidMount() {
    Api.getSources().then(({ sources }) => this.props.setSources(sources));
  }

  hasSources = () => {
    const { sources } = this.props;
    return sources && sources.length > 0;
  };

  changeFilter = event => {
    const {
      target: { value }
    } = event;
    console.log('on event: ', value);
    this.props.selectSource(value);
  };

  render() {
    const { sources, selectedSource } = this.props;
    return this.hasSources() ? (
      <StyledSelect
        value={selectedSource || ''}
        onChange={this.changeFilter}
        placeholder="Filtrar por fonte"
      >
        <Option disabled selected value="">
          Filtrar por fonte
        </Option>
        {sources.map(({ id, name }) => (
          <Option key={id} value={id}>
            {name}
          </Option>
        ))}
      </StyledSelect>
    ) : (
      <div>Loading...</div>
    );
  }
}

Select.propTypes = {
  sources: PropTypes.arrayOf(sourceShape).isRequired,
  selectedSource: PropTypes.string
};

Select.defaultProps = {
  selectedSource: null
};

const mapStateToProps = ({ newsState: { sources, selectedSource } }) => ({
  sources,
  selectedSource
});

const mapDispatchToProps = {
  setSources,
  selectSource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Select);
