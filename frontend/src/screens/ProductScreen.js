import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Rating from '../components/rating/Rating';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  return loading ? (
    <div>Chargement ...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <section className="product">
        <div className="single__product">
          {/* Colonne 1 */}
          <div className="single__product-image">
            <img className="img-large" src={product.image} alt={product.name} />
          </div>

          {/* Colonne 2 */}
          <div className="single__product-infos">
            <div className="item">
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </div>

            <div className="item">
              <div className="description">
                <p>
                  <strong>Description :</strong> {product.description}
                </p>
              </div>
            </div>
            <div className="item">
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </div>
          </div>

          {/* Colonne 3 */}
          <div className="single__product-actions">
            <div className="item">
              <div className="price">
                <strong>Prix : </strong>
                {product.price} €
              </div>
            </div>
            <div className="item">
              <div className="status">
                <p>
                  <strong>Status :</strong>{' '}
                </p>
                {product.countInStock > 0 ? (
                  <div className="badge success">En stock</div>
                ) : (
                  <div className="badge danger">Indisponible</div>
                )}
              </div>
            </div>
            {product.countInStock > 0 && (
              <div className="item">
                <button>Ajouter au panier</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductScreen;
