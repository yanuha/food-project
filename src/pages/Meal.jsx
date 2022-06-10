import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';

import Preloader from '../components/Preloader';

function Meal() {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => {
      data.meals && setMeal(data.meals[0]);
    });
  }, [id]);

  return (
    <>
      {!meal.idMeal ? (
        <Preloader />
      ) : (
        <div className='meal'>
          <div className='row'>
            <div className='col s6'>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className='responsive-img'
              />
            </div>
            <div className='col s6'>
              <h2 style={{ marginTop: 0 }}>{meal.strMeal}</h2>
              <div className='text'>{meal.strInstructions}</div>
            </div>
          </div>
          <div className='row'>
            <div className='col s12'>
              <table className='striped'>
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                  </tr>
                </thead>

                <tbody>
                  {Object.keys(meal).map((key) => {
                    if (key.includes('strIngredient') && meal[key]) {
                      return (
                        <tr key={key}>
                          <td>{meal[key]}</td>
                          <td>
                            {meal[key.replace('strIngredient', 'strMeasure')]}
                          </td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className='row'>
            <div className='col s5'>
              {meal.strYoutube.length && (
                <div className='video-container'>
                  <iframe
                    width='853'
                    height='480'
                    src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
                      -11
                    )}`}
                    frameBorder='0'
                    allowFullScreen
                    title={meal.strMeal}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <button className='btn btn-small grey darken-1' onClick={goBack}>
        <i className='material-icons left'>arrow_back</i>Go back
      </button>
    </>
  );
}

export { Meal };
