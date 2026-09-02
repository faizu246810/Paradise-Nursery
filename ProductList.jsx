import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/CartSlice";
import { Link } from "react-router-dom";

const products = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2bb9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Monstera",
    price: 35,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594575920-0f5c3f9c0c5b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 20,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 28,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594895304-fe7116ac3b9f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 32,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
  },

  // Flowering Plants
  {
    id: 7,
    name: "Rose Plant",
    price: 22,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Orchid",
    price: 40,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1566907225473-0f4b5e0f6c4f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "African Violet",
    price: 18,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Anthurium",
    price: 36,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1603436326446-6e6c1c2d2b17?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "Begonia",
    price: 24,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1597055181300-d8c9d4c8d9e3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "Jasmine",
    price: 27,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1597848212624-e19c3f7d7d0f?auto=format&fit=crop&w=600&q=80",
  },

  // Succulents
  {
    id: 13,
    name: "Aloe Vera",
    price: 15,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Echeveria",
    price: 16,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1515402588611-1e9d7f7a1f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Jade Plant",
    price: 19,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "Haworthia",
    price: 17,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    name: "String of Pearls",
    price: 23,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1616500063710-6f3b8d8e1c8d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    name: "Panda Plant",
    price: 21,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [
    "Indoor Plants",
    "Flowering Plants",
    "Succulents",
  ];

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>

          <Link to="/cart">
            🛒 Cart
            <span className="cart-count">
              {cartCount}
            </span>
          </Link>
        </div>
      </nav>

      <div className="products-container">
        <h1>Our Houseplants</h1>

        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category
          );

          return (
            <section
              className="category-section"
              key={category}
            >
              <h2 className="category-title">
                {category}
              </h2>

              <div className="product-grid">
                {categoryProducts.map((product) => {
                  const isAdded = cartItems.some(
                    (item) => item.id === product.id
                  );

                  return (
                    <div
                      className="product-card"
                      key={product.id}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <div className="product-info">
                        <h3>{product.name}</h3>

                        <p className="product-price">
                          ${product.price}
                        </p>

                        <button
                          className="add-button"
                          disabled={isAdded}
                          onClick={() =>
                            dispatch(addItem(product))
                          }
                        >
                          {isAdded
                            ? "Added to Cart"
                            : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
