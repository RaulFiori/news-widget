import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Api from '../api/news';
import Story from './Story';
import { storyShape } from '../prop-types/news-types';
import {
  updateTotal,
  setNews,
  addNews,
  incrementPage
} from '../ducks/newsState';
import Select from './Select';

const primaryColor = '#009dff';

const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e6e6e6;
  opacity: 1;
  padding: 32px;
  min-width: 25%;
  min-height: 50vh;
`;

const Title = styled.span`
  color: ${primaryColor};
  text-align: left;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0;
  text-decoration: underline;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: ${primaryColor};
  color: white;
  padding: 8px;
  border-radius: 4px;
  border: none;
  font-family: 'Roboto';
  margin-top: 24px;
  &:disabled {
    background-color: grey;
  }
`;

class NewsWidget extends React.Component {
  componentDidMount() {
    this.loadInitialNews();
  }

  componentDidUpdate(prevProps) {
    const { page, selectedSource } = this.props;
    const { page: oldPage, selectedSource: oldSource } = prevProps;

    if (page !== oldPage) {
      this.loadNews();
    } else if (selectedSource !== oldSource) {
      this.loadInitialNews();
    }
  }

  loadInitialNews = () => {
    const { page, country, selectedSource } = this.props;
    Api.getNews(page, country, selectedSource).then(result => {
      const { articles, totalResults } = result;
      this.props.updateTotal(totalResults);
      this.props.addNews(articles);
    });
  };

  loadNews = () => {
    const { page, country, selectedSource } = this.props;

    Api.getNews(page, country, selectedSource).then(result => {
      const { articles } = result;

      this.props.addNews(articles);
    });
  };

  loadMore = () => this.props.incrementPage();

  hasNews = news => news && news.length > 0;

  canLoadMore = (totalPages, page) => page < totalPages;

  render() {
    const { news, totalPages, page } = this.props;
    return (
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title>Noticias</Title>
          <Select />
        </div>

        {this.hasNews(news) ? (
          news.map(story => <Story key={story.title} story={story} />)
        ) : (
          <div>Loading...</div>
        )}
        <Button
          onClick={this.loadMore}
          disabled={!this.canLoadMore(totalPages, page)}
        >
          Mostrar mais
        </Button>
      </Card>
    );
  }
}

NewsWidget.propTypes = {
  news: PropTypes.arrayOf(storyShape.isRequired).isRequired,
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  selectedSource: PropTypes.string,
  country: PropTypes.string.isRequired
};

NewsWidget.defaultProps = {
  selectedSource: null
};

const mapStateToProps = ({
  newsState: { news, totalPages, page, country, selectedSource }
}) => ({
  news,
  totalPages,
  page,
  country,
  selectedSource
});

const mapDispatchToProps = {
  updateTotal,
  setNews,
  addNews,
  incrementPage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsWidget);
