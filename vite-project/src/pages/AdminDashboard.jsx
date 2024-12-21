import React, { useState } from 'react';
import './AdminDashboard.css'; // Add styles if needed

const AdminDashboard = ({ onProductAdded }) => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        category: '',
        price: '',
        description: '',
        image: '',
    });
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [products, setProducts] = useState([]); // Store products
    const [isProductListVisible, setIsProductListVisible] = useState(false);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewProduct({ ...newProduct, image: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file); // Convert image to base64
        }
    };

    // Add new product function (In a real app, save it to the backend)
    const handleAddProduct = () => {
        // Here, you would typically send this data to the backend
        setProducts([...products, newProduct]); // Add product to the local state
        onProductAdded([...products, newProduct]); // Pass the updated list to the UserDashboard
        console.log('New Product Added:', newProduct);
        setNewProduct({ name: '', category: '', price: '', description: '', image: '' });
        setIsFormVisible(false);
    };

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <h1>Admin Dashboard</h1>
                <p>Welcome, Admin! Manage products and users here.</p>
            </header>
            <div className="admin-content">
                <section className="manage-products">
                    <h2>Manage Products</h2>
                    <button onClick={() => setIsFormVisible(true)}>Add New Product</button>
                    <button onClick={() => setIsProductListVisible(!isProductListVisible)}>
                        {isProductListVisible ? 'Hide Products' : 'View All Products'}
                    </button>

                    {/* Product Adding Form */}
                    {isFormVisible && (
                        <div className="product-form">
                            <h3>Add New Product</h3>
                            <input
                                type="text"
                                name="name"
                                placeholder="Product Name"
                                value={newProduct.name}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="category"
                                placeholder="Category"
                                value={newProduct.category}
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={newProduct.price}
                                onChange={handleInputChange}
                            />
                            <textarea
                                name="description"
                                placeholder="Product Description"
                                value={newProduct.description}
                                onChange={handleInputChange}
                            />
                            <input
                                type="file"
                                name="image"
                                onChange={handleImageUpload}
                            />
                            <button onClick={handleAddProduct}>Add Product</button>
                            <button onClick={() => setIsFormVisible(false)}>Cancel</button>
                        </div>
                    )}
                    {/* Display Products */}
                    {isProductListVisible && (
                        <div className="product-list">
                            <h3>Product List</h3>
                            <ul>
                                {products.map((product, index) => (
                                    <li key={index}>
                                        <img src={product.image} alt={product.name} className="product-image" />
                                        <h4>{product.name}</h4>
                                        <p>{product.category}</p>
                                        <p>{product.price}</p>
                                        <p>{product.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>
                <section className="manage-users">
                    <h2>Manage Users</h2>
                    <button>View All Users</button>
                </section>
            </div>
        </div>
    );
};

export default AdminDashboard;
