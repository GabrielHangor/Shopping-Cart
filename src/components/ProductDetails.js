import { useLocation } from 'react-router';

function ProductDetails({ addProduct }) {
  const location = useLocation();
  const { id, image, price, title, description } = location.state;

  return (
    <div className="product-details-container">
      <h1>{title}</h1>
      <h2 style={{ textAlign: 'center' }}>{description}</h2>
      <h3>{price}</h3>
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <button onClick={() => addProduct(id)} className="add-btn">
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductDetails;
