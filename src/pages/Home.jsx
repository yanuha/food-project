import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Search } from '../components/Search';
import { CategoryList } from '../components/CategoryList';
import Preloader from '../components/Preloader';
import { getAllCategories } from '../api';

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { push } = useHistory();
  const { pathname, search } = useLocation();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      ),
      push({
        pathname,
        search: `?search=${str}`,
      })
    );
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      data.categories && setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      {!catalog.length ? (
        <Preloader />
      ) : (
        <>
          <Search cb={handleSearch} />
          <CategoryList catalog={filteredCatalog} />
        </>
      )}
    </>
  );
}

export { Home };
