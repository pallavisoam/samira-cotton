import { useState } from "react";
import "./index.css";
import { categories } from "./products";

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSub, setActiveSub] = useState(
    categories[0].subcategories ? categories[0].subcategories[0] : null
  );

  const hasSubcategories = !!activeCategory.subcategories;

  return (
    <div className="container-fluid catalog-page">
      <hr />

      <div className="row">

        {/* ================= DESKTOP SIDEBAR ================= */}
        <div className="col-md-3 sidebar d-none d-md-block">
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
                    setActiveSub(cat.subcategories?.[0] || null);
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="col-md-9 content-area">

          {/* ========== MOBILE TOP FILTERS ========== */}
          <div className="mobile-top-filters d-md-none">

            {/* SUBCATEGORY FIRST */}
            {hasSubcategories && (
              <div className="subcategory-scroll mobile-subcategory">
                {activeCategory.subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    className={`subcategory-chip ${
                      activeSub?.id === sub.id ? "active" : ""
                    }`}
                    onClick={() => setActiveSub(sub)}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            )}

            {/* CATEGORY SECOND */}
            <div className="mobile-category-bar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`mobile-category-chip ${
                    cat.id === activeCategory.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveSub(cat.subcategories?.[0] || null);
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* ========== DESKTOP SUBCATEGORY PILLS ========== */}
          {hasSubcategories && (
            <ul className="nav subcategory-pills mb-4 d-none d-md-flex">
              {activeCategory.subcategories.map((sub) => (
                <li className="nav-item" key={sub.id} style={{marginTop:'10px'}}>
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

          {/* ========== IMAGE GRID ========== */}
          <div className="row">
            {(hasSubcategories ? activeSub.images : activeCategory.images).map(
              (img, index) => (
                <div
                  className="col-6 col-md-6 col-lg-4 col-xl-3 mb-4"
                  key={index}
                >
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
