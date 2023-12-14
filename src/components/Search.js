import { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

const Search = ({ details }) => {
  const [searchField, setSearchField] = useState('');

  const filteredResult = details.filter(person => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.email.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  /**
   * use it to get data from api
   */
  /**
  const [filteredResult, setFilteredResult] = useState([]);
  const getSearchedResult = async () => {
    const result = await axios({
      url: `http://localhost:3001/dummy/user?search=${searchField}`,
      method: 'get'
    });
    setFilteredResult(result.data?.users);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      try {
        getSearchedResult();
      } catch (error) {
        setFilteredResult([]);
      }
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchField]);
  */

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  const searchList = () => {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredResult} />
      </Scroll>
    );
  };

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your course</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search People"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
};

export default Search;
