import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';

function Product(props) {
  const { product } = props;

  return (
    <div className="product__card">
      <Link to={`/product/${product.slug}`}>
        <img
          className="product__card-image"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <div className="product__card-body">
        <Link to={`/product/${product.slug}`}>
          <p className="title">{product.name}</p>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <p className="text">{product.price} €</p>
        <button>Ajouter au panier</button>
      </div>
    </div>
  );
}

export default Product;
