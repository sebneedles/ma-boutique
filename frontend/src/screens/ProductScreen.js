import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <>
      <h1>{slug}</h1>
      <section className="products"></section>
    </>
  );
}

export default ProductScreen;
