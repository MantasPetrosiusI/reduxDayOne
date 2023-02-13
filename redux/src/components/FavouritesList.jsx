import React from 'react';
import { removeFromFavorites } from '../actions';
import { connect } from 'react-redux';

const FavoritesList = ({ favorites, removeFromFavorites }) => (
  <ul>
    {favorites.map(company => (
      <li key={company}>
        {company}
        <button onClick={() => removeFromFavorites(company)}>Remove</button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = {
  removeFromFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
