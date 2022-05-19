import React from 'react';
import { getSingleDog } from '../lib/api';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const DogShow = () => {
  const [dog, setDog] = React.useState(null);
  const [likes, setLikes] = React.useState(
    parseInt(localStorage.getItem('likes')) || 0
  );

  const handleIncrement = () => {
    window.localStorage.setItem('likes', parseInt(likes));
    setLikes(likes + 1);
  };

  const likeBtn = localStorage.getItem('likes');

  const { point } = useParams();

  React.useEffect(() => {
    console.log(point);
    const getData = async () => {
      try {
        const { data } = await getSingleDog(point); /// using axios package. data is the key that we are using from API
        // setDog(data);
        // console.log(data[0]);
        setDog(data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [point]);

  return (
    <body className='dogshow-container'>
      <section className='section1'>
        <div className='container'>
          {!dog ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h2 className='title has-text-centered'>
                <p id='dog-show-title'>
                  <FontAwesomeIcon icon={faDog} /> {dog.name}
                </p>
              </h2>
              <hr />
              <div className='columns '>
                <div className='column is-8'>
                  <figure className='image is-4by4'>
                    <div className='show-image-container'>
                      <img
                        src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                        alt={dog.name}
                        id='image-rounded'
                      />
                    </div>
                  </figure>
                </div>

                <div className='column is-two-thirds-desktop'>
                  <h4 className='title is-4'>Breed Group:</h4>
                  <span id='show'>{dog.breed_group}</span>
                  <hr id='hr1' />

                  <h4 className='title is-4'>Lifespan:</h4>
                  <span id='show'>{dog.life_span}</span>
                  <hr id='hr1' />

                  <h4 className='title is-4'>Temperament: </h4>
                  <span id='show'>{dog.temperament}</span>
                  <hr id='hr1' />
                  <div>
                    <p>{likes}</p>
                    <button onClick={handleIncrement}>
                      <span>
                        <p>
                          <FontAwesomeIcon icon={faHeart} />
                        </p>
                      </span>
                      Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </body>
  );
};

export default DogShow;
