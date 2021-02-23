import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star/Star';

function StarRating({ rating }) {
  const yellowColor = '#E9A426';
  const greyColor = '#C4C4C4';

  const start = [1, 2, 3, 4, 5]

  return (
    <span>
      {
        start.map((star, indx) => {
          const ratingValue = indx + 1;

          return (
            <Star color={ratingValue <= rating ? yellowColor : greyColor} key={star} />
          )
        })
      }
    </span>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number
}

StarRating.defaultProps = {
  rating: 0
}

export default StarRating;