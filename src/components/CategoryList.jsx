import { CategoryItem } from './CategoryItem';

function CategoryList({ catalog = [] }) {
  return (
    <div className='category-list'>
      {catalog.map((item) => (
        <CategoryItem key={item.idCategory} {...item} />
      ))}
    </div>
  );
}

export { CategoryList };
