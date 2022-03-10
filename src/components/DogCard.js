import React from 'react';
import { Link } from 'react-router-dom';

const DogCard = ({ id, name, breed_group, temperament, image }) => {
  const [likes, setLikes] = React.useState(0);
  window.localStorage.setItem(parseInt('likes', likes));
  const handleIncrement = () => {
    setLikes(likes + 1);
  };

  const likeBtn = localStorage.getItem('likes');

  return (
    <div className='column $tile-header-shadow is-one-quarter-desktop is-one-third-tablet'>
      <Link to={`/dogs/${name.toLowerCase()}`}>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-warning'>
            <p className='title'>{name}</p>
            <figure className='image is-5by5'>
              <img id='doggo' src={image.url} alt={name} />
            </figure>
          </article>
        </div>
      </Link>
    </div>
  );
};

export default DogCard;
