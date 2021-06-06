import { useLocation } from 'react-router';

function ProductDetails() {
  const location = useLocation();
  const { image, price, title, description } = location.state;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{price}</h3>
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default ProductDetails;
