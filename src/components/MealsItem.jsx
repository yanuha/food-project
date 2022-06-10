import { Link } from 'react-router-dom';

function MealsItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className='category-item card' id={idMeal}>
      <div className='card-image'>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{strMeal}</span>
      </div>
      <div className='card-action'>
        <Link className='btn grey darken-1' to={`/meal/${idMeal}`}>
          View recept
        </Link>
      </div>
    </div>
  );
}

export { MealsItem };
