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
   <div className="container-fluid catalog-page" style={{padding:'20px'}}>
    <hr/>
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
