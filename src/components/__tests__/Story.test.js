import React from 'react';
import renderer from 'react-test-renderer';
import Story from '../Story';

const mockStory = {
  title: 'Some news',
  publishedAt: '2019-08-07T16:30:00Z',
  url: 'some-site.com.br',
  source: {
    name: 'news site'
  }
};

describe('Story Component', () => {
  test('should render correctly', () => {
    const element = renderer.create(<Story story={mockStory} />).toJSON();
    expect(element).toMatchSnapshot();
  });
});
