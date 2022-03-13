import React from 'react';
import { getAllDogs } from '../lib/api';
import DogCard from './DogCard';
import { useNavigate } from 'react-router-dom';

const DogIndex = ({ search, setSearch }) => {
  const navigate = useNavigate();
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
  console.log(search);

  function filterDogs() {
    return dogs.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  function handleChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  function handleClick() {
    navigate(0);
  }

  return (
    <>
      <body className="dog-index-container">
        <section className="section">
          <div className="field has-addons  " id="searchinput">
            <div className="control">
              <input
                onChange={handleChange}
                className="input is-rounded is-medium"
                type="text"
                placeholder="Search for breed"
                value={search}
              />
            </div>
            <div className="control">
              <button
                onClick={handleClick}
                className="button is-info is-rounded is-medium"
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        <section className="section" id="dog-section">
          <div className="container is-dark">
            <div className="columns is-multiline">
              {!dogs ? (
                <p> Loading...</p>
              ) : (
                filterDogs().map((item) => <DogCard key={item.id} {...item} />)
              )}
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default DogIndex;
