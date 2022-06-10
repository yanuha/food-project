import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategories } from '../api';

import Preloader from '../components/Preloader';
import { MealsList } from '../components/MealsList';

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategories(name).then((data) => {
      data.meals && setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      {!meals.length ? (
        <Preloader />
      ) : (
        <>
          <button className='btn btn-small grey darken-1' onClick={goBack}>
            <i className='material-icons left'>arrow_back</i>
            Go back
          </button>
          <MealsList meals={meals} />
        </>
      )}
    </>
  );
}

export { Category };
