import ProductCard from "./productCard";
import { catalogData } from "./products";

const ProductCatalog = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">
        Our Medical Product Catalogue
      </h2>

      {catalogData.map((section, index) => (
        <div key={index} className="mb-5">
          <h4 className="mb-4 border-bottom pb-2">
            {section.category}
          </h4>

          <div className="row">
            {section.products.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
