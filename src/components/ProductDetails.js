import { useLocation } from 'react-router';

function ProductDetails({ addProduct }) {
  const location = useLocation();
  const { id, image, price, title, description } = location.state;

  return (
    <div className="product-details-container">
      <div className="product-details-card-wrapper">
        <div className="product-details-image-wrapper">
          <img src={image} alt={title} />
        </div>
        <div className="details-info-wrapper">
          <h1 style={{ textAlign: 'center' }}>{title}</h1>
          <h2 style={{ textAlign: 'center' }}>{description}</h2>
          <h3>${price}</h3>
          <button onClick={() => addProduct(id)} className="add-btn">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
