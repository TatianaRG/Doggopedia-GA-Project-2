import React from 'react';
import { getAllDogs } from '../lib/api';
import DogCard from './DogCard';

const DogIndex = () => {
  const [dogs, setDogs] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllDogs(); /// using axios package. data is the key that we are using from API
        setDogs(data);
        //console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <section className="section1" id="dog-section">
      <div className="container is-dark">
        <div className="columns is-multiline">
          {!dogs ? (
            <p> Loading...</p>
          ) : (
            dogs.map((item) => <DogCard key={item.id} {...item} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default DogIndex;
