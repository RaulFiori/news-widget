import PropTypes from 'prop-types';

const sourceShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.string
});

const storyShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  source: sourceShape.isRequired
});

export { storyShape, sourceShape };
