import React from 'react';
import { getSingleDog } from '../lib/api';
import { useParams } from 'react-router-dom';

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
    <section className="section1">
      <div className="container">
        {!dog ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className="title has-text-centered">Name: {dog.name}</h2>
            <hr />
            <div className="columns">
              <div className="column is-8">
                <figure className="image is-4by4">
                  <img
                    src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                    alt={dog.name}
                  />
                </figure>
              </div>

              <div className="column is-two-thirds-desktop is-light">
                <h4 className="title is-4">
                  Breed Group: <span>{dog.breed_group}</span>
                </h4>
                <hr id="hr1" />

                <h4 className="title is-4">
                  Lifespan: <span>{dog.life_span}</span>
                </h4>

                <h4 className="title is-4">Temperament:</h4>

                <p>{likes}</p>
                <button onClick={handleIncrement}>
                  <span>😍 </span> Counter
                </button>
              </div>
              <div className="column is-half">
                <h4 className="title is-8">Breed Group:</h4>
                <hr />
                <p>{dog.breed_group}</p>
                <hr />
                <h4 className="title is-4">Origin:</h4>
                <hr />
                <p>{dog.origin}</p>
                <h4 className="title is-4">Lifespan:</h4>
                <hr />
                <p>{dog.life_span}</p>
                <h4 className="title is-4">Temperament:</h4>
                <hr />
                <p>{dog.temperament}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DogShow;
