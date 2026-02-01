// import ProductCard from "./productCard";
// import { catalogData } from "./products";

// const ProductCatalog = () => {
//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-5 fw-bold">
//         Our Medical Product Catalogue
//       </h2>

//       {catalogData.map((section, index) => (
//         <div key={index} className="mb-5">
//           <h4 className="mb-4 border-bottom pb-2">
//             {section.category}
//           </h4>

//           <div className="row">
//             {section.products.map((product, idx) => (
//               <ProductCard key={idx} product={product} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCatalog;
import { useState } from "react";
import './index.css'
import {categories} from './products'

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSub, setActiveSub] = useState(
    categories[0].subcategories ? categories[0].subcategories[0] : null
  );

  const hasSubcategories = !!activeCategory.subcategories;

  return (
   <div className="container-fluid catalog-page">
  <div className="row">

    {/* LEFT SIDEBAR */}
    <div className="col-md-3 sidebar">
      <div className="sidebar-card">
        <h6 className="sidebar-title">Categories</h6>

        <div className="list-group list-group-flush">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`sidebar-item ${
                cat.id === activeCategory.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(cat);
                setActiveSub(cat.subcategories ? cat.subcategories[0] : null);
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="col-md-9 content-area">

      {/* SUBCATEGORY PILLS */}
      {hasSubcategories && (
        <ul className="nav subcategory-pills mb-4">
          {activeCategory.subcategories.map((sub) => (
            <li className="nav-item" key={sub.id}>
              <button
                className={`nav-link ${
                  activeSub?.id === sub.id ? "active" : ""
                }`}
                onClick={() => setActiveSub(sub)}
              >
                {sub.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* IMAGE GRID */}
      <div className="row">
        {(hasSubcategories ? activeSub.images : activeCategory.images).map(
          (img, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={index}>
              <div className="product-card1">
                <img src={img} alt="" />
              </div>
            </div>
          )
        )}
      </div>

    </div>
  </div>
</div>

  );
}
