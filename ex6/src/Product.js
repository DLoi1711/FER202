import React from "react";
import "./Product.css";

function Product() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-brand">Navbar</div>
          <ul className="navbar-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#link">Link</a>
            </li>
            <li>
              <a href="#dropdown">Dropdown</a>
            </li>
          </ul>
          <div className="navbar-search">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </nav>
      </header>

      <div className="hero-section">1920 x 530</div>
      <div className="new-product-section">
        <h2>NEW PRODUCT</h2>
        <p className="text-center">List product description</p>
        <div className="product-container">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div className="product-card" key={index}>
                <div className="product-image">280 x 280</div>
                <div className="card-body">
                  <h5 className="card-title">Product</h5>
                  <p className="text-muted">100,000 VND</p>
                  <p className="text-danger">80,000 VND</p>
                  <div className="action-container">
                    <button className="btn-icon">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button className="btn-text">Xem chi tiết</button>
                  </div>
                </div>
                {index === 3 && <div className="sale-badge">Sale</div>}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Product;
