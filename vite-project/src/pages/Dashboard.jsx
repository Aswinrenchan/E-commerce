



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting
import './Dashboard.css'; // Make sure to create a Dashboard.css file for styles

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Initialize navigate hook

    const products = [   { id: 20, name: 'Optimum Nutrition Serious Mass Gainer', category: 'Mass Gainers', price: (69.99 * 83).toFixed(2), image: 'src/assets/pro20.jpg', description: 'High-calorie mass gainer for building muscle mass and strength.' },
        { id: 23, name: 'Optimum Nutrition Creatine Monohydrate', category: 'Supplements', price: 899, image: 'src/assets/pro23.jpg', description: 'Pure creatine monohydrate for muscle strength and endurance.' },
        { id: 24, name: 'MuscleBlaze Creatine Monohydrate', category: 'Supplements', price: 749, image: 'src/assets/pro24.jpg', description: 'Supports increased strength and enhances workout performance.' },
        { id: 25, name: 'Wellcore Creatine Monohydrate', category: 'Supplements', price: 699, image: 'src/assets/pro25.jpg', description: 'Helps in boosting energy levels during high-intensity workouts.' },
        { id: 26, name: 'Optimum Nutrition Micronized Creatine', category: 'Supplements', price: 1299, image: 'src/assets/pro26.jpg', description: 'Micronized creatine for faster absorption and enhanced performance.' },
        { id: 2, name: 'MuscleTech Platinum 100% Whey', category: 'Protein Powders', price: (29.99 * 83).toFixed(2), image: 'src/assets/pro2.jpg', description: 'Whey protein concentrate with a fast absorption rate for muscle repair.' },
        { id: 3, name: 'Isopure Zero Carb Protein', category: 'Protein Powders', price: (39.99 * 83).toFixed(2), image: 'src/assets/pro3.jpg', description: 'Whey protein isolate with zero carbs for fat loss and lean muscle gain.' },
        { id: 4, name: 'Dymatize ISO100 Hydrolyzed Whey', category: 'Protein Powders', price: (45.99 * 83).toFixed(2), image: 'src/assets/pro4.jpg', description: 'Hydrolyzed whey isolate for rapid absorption and faster muscle recovery.' },
        { id: 5, name: 'MusclePharm Combat Powder', category: 'Protein Powders', price: (29.99 * 83).toFixed(2), image: 'src/assets/pro5.jpg', description: 'A blend of casein and whey protein for sustained muscle growth and recovery.' },
        { id: 6, name: 'Dymatize Elite Casein', category: 'Protein Powders', price: (36.99 * 83).toFixed(2), image: 'src/assets/pro6.jpg', description: 'Slow-digesting casein protein ideal for overnight muscle recovery.' },
        { id: 7, name: 'Vega Sport Protein', category: 'Plant-Based Protein', price: (43.99 * 83).toFixed(2), image: 'src/assets/pro7.jpg', description: 'Plant-based protein with a complete amino acid profile for muscle recovery.' },
        { id: 8, name: 'Orgain Organic Protein Powder', category: 'Plant-Based Protein', price: (29.99 * 83).toFixed(2), image: 'src/assets/pro8.jpg', description: 'Organic plant-based protein powder for sustained energy and muscle repair.' },
        { id: 9, name: 'BulkSupplements Pure Pea Protein Isolate', category: 'Pea Protein', price: (26.99 * 83).toFixed(2), image: 'src/assets/pro9.jpg', description: 'High-quality pea protein isolate for those who prefer non-dairy options.' },
        { id: 10, name: 'NOW Foods Brown Rice Protein Powder', category: 'Brown Rice Protein', price: (23.99 * 83).toFixed(2), image: 'src/assets/pro10.jpg', description: 'Natural brown rice protein powder for muscle growth and endurance.' },
        { id: 11, name: 'MuscleBlaze Whey Protein Isolate', category: 'Protein Powders', price: (59.99 * 83).toFixed(2), image: 'src/assets/pro11.jpg', description: '100% whey protein isolate for lean muscle mass and fat loss.' },
        { id: 12, name: 'ON 100% Whey Protein', category: 'Protein Powders', price: (29.99 * 83).toFixed(2), image: 'src/assets/pro12.jpg', description: 'Premium whey protein powder with essential amino acids for muscle building.' },
        { id: 13, name: 'GNC AMP Wheybolic Protein', category: 'Protein Powders', price: (49.99 * 83).toFixed(2), image: 'src/assets/pro13.jpg', description: 'Fast-digesting protein for muscle growth and recovery.' },
        { id: 14, name: 'BSN Syntha-6 Protein Powder', category: 'Protein Powders', price: (39.99 * 83).toFixed(2), image: 'src/assets/pro14.jpg', description: 'Blended protein formula for sustained muscle recovery and growth.' },
        { id: 15, name: 'Evlution Nutrition ENGN Pre Workout', category: 'Pre-Workout Supplements', price: (24.99 * 83).toFixed(2), image: 'src/assets/pro15.jpg', description: 'Pre-workout supplement for enhanced energy and performance.' },
        { id: 16, name: 'Cellucor C4 Pre-Workout', category: 'Pre-Workout Supplements', price: (29.99 * 83).toFixed(2), image: 'src/assets/pro16.jpg', description: 'One of the most popular pre-workout formulas for energy and focus.' },
        { id: 17, name: 'Kaged Muscle Pre-Kaged Pre-Workout', category: 'Pre-Workout Supplements', price: (49.99 * 83).toFixed(2), image: 'src/assets/pro17.jpg', description: 'Pre-workout supplement with natural ingredients for intense energy.' },
        { id: 18, name: 'Redcon1 Total War Pre-Workout', category: 'Pre-Workout Supplements', price: (39.99 * 83).toFixed(2), image: 'src/assets/pro18.jpg', description: 'Pre-workout formula for increased endurance and stamina.' },
        { id: 19, name: 'MuscleTech NeuroCore Pre-Workout', category: 'Pre-Workout Supplements', price: (34.99 * 83).toFixed(2), image: 'src/assets/pro19.jpg', description: 'Pre-workout with neuro-boosting ingredients for better focus.' },
        { id: 21, name: 'Naked Whey Protein', category: 'Protein Powders', price: (54.99 * 83).toFixed(2), image: 'src/assets/pro21.jpg', description: 'Whey protein isolate with no additives or fillers for clean nutrition.' },
        { id: 22, name: 'Quest Protein Powder', category: 'Protein Powders', price: (39.99 * 83).toFixed(2), image: 'src/assets/pro22.jpg', description: 'Whey protein with low sugar and carbs, ideal for lean muscle gain.' }
        // (Product details remain unchanged)
    ];

    // Filter products based on the search term
    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem('userToken'); // Example: remove token from localStorage
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="header">
                <div className="header-logo">
                    {/* Add logo if needed */}
                </div>
                <h1>Welcome to the Store, Aswin! Enjoy your shopping!</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="logout-btn">
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </header>

            {/* Navigation Bar */}
            <nav className="navbar">
                <ul>
                    <li><Link to="/favourites">Favourites</Link></li>
                    <li><Link to="/my-orders">My Orders</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact-us">Contact 24/7</Link></li>
                </ul>
            </nav>

            {/* Top Image */}
            <div className="top-image">
                <img src="src/assets/topimg.png" alt="Whey Protein Banner" className="top-image-banner" />
            </div>

            {/* Product Cards */}
            <div className="product-cards">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <Link to={`/product/${product.id}`}> {/* Link to ProductDetail page */}
                                <img src={product.image} alt={product.name} className="product-image" />
                            </Link>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p><strong>{`₹${product.price}`}</strong></p>
                                <button className="add-to-cart">Add to Cart</button>
                                <button className="buy-now">Buy Now</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found matching your search.</p>
                )}
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Return Policy</a>
                    <a href="#">FAQ</a>
                </div>
                <div className="footer-social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <p>&copy; 2024 Protein Hub. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
