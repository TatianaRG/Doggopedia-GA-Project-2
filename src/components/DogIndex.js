import React from 'react';
import { getAllDogs } from '../lib/api';
import DogCard from './DogCard';

const DogIndex = ({ search, setSearch }) => {
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
  console.log(setSearch);

  function filterDogs() {
    return dogs.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <section className='section1' id='dog-section'>
      <div className='container is-dark'>
        <div className='columns is-multiline'>
          {!dogs ? (
            <p> Loading...</p>
          ) : (
            filterDogs().map((item) => <DogCard key={item.id} {...item} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default DogIndex;
