import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Product(props) {
  const { product } = props;

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img
          className="product__card-image"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>{product.price} €</Card.Text>
        <Button>Ajouter au panier</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
