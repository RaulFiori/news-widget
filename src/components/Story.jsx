import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { storyShape } from '../prop-types/news-types';

const Container = styled.div`
  border-bottom: 2px solid #a4a4a4;
  padding: 16px;
  padding-left: 0px;
`;

const Title = styled.a`
  text-align: left;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0;
  color: #4e4e4e;
  opacity: 1;
  text-decoration: none;
`;

const Caption = styled.span`
  color: #a4a4a4;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0;
  margin-right: 20px;
`;

const Chip = styled.div`
  background: #d8d8e4 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  padding: 4px;
  color: white;
`;

const Story = props => {
  const {
    story: {
      title,
      publishedAt,
      url,
      source: { name }
    }
  } = props;
  return (
    <Container>
      <Title href={url} rel="noopener noreferrer" target="_blank">
        {title}
      </Title>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
        <Caption>{moment(publishedAt).format('DD/MM/YYYY')}</Caption>
        <Chip>{name}</Chip>
      </div>
    </Container>
  );
};

Story.propTypes = {
  story: storyShape.isRequired
};

export default Story;
