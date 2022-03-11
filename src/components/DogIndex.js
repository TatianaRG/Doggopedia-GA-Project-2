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

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <div className='dog-index-container'>
        <section className='section '>
          <div className='field has-addons' id='searchinput'>
            <div className='control'>
              <input
                onChange={handleChange}
                className='input is-rounded is-medium is-link'
                type='text'
                placeholder='Search for breed'
                value={search}
                //   value={props.inputValue}
                //   onChange={props.dogFilterOnChange}
              />
            </div>
          </div>
        </section>

        <section className='section' id='dog-section'>
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
      </div>
    </>
  );
};

export default DogIndex;
