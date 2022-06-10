import { Link } from 'react-router-dom';

function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div className='category-item card' id={idCategory}>
      <div className='card-image'>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 100)}...</p>
      </div>
      <div className='card-action'>
        <Link className='btn grey darken-1' to={`category/${strCategory}`}>
          Show more
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem };
