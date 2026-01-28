const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: "180px", objectFit: "contain" }}
        />
        <div className="card-body text-center">
          <h6 className="card-title">{product.name}</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
