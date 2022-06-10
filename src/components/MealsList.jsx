import { MealsItem } from './MealsItem';

function MealsList({ meals = [] }) {
  return (
    <div className='category-list'>
      {meals.map((item) => (
        <MealsItem key={item.idMeal} {...item} />
      ))}
    </div>
  );
}

export { MealsList };
