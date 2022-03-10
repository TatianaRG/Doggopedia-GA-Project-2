import React from 'react';
import { Link } from 'react-router-dom';

const DogCard = ({ id, name, breed_group, temperament, image }) => {
  const [likes, setLikes] = React.useState(0);

  const handleIncrement = () => {
    setLikes(likes + 1);
  };

  const handleDecrement = () => {
    setLikes(likes - 1);
  };
  return (
    <div className="column $tile-header-shadow is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/dogs/${name.toLowerCase()}`}>
        {/* <div className='card'>
          <div className='card-header'>
            <h2 className='card-header-title'>{name}</h2>
          </div> */}
        <div className="tile is-parent">
          <article className="tile is-child notification is-grey">
            <p id="card-title" className="title is-4">
              {name}
            </p>
            <figure className="image is-5by5">
              <img id="doggo" src={image.url} alt={name} />
            </figure>
          </article>
        </div>
        {/* </div> */}
      </Link>
    </div>
  );
};

export default DogCard;
