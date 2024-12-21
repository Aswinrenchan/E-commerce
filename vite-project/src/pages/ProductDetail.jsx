

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productId } = useParams(); // Retrieve product ID from the URL

    // Sample products with detailed descriptions
    const products = [
        { id: 1, name: 'Optimum Nutrition Gold Standard Whey', category: 'Protein Powders', price: (25.99 * 83).toFixed(2), image: 'src/assets/th.jpg', description: 'Optimum Nutrition Gold Standard Whey is a high-quality whey protein concentrate that promotes muscle growth and recovery. It is known for its fast absorption, rich amino acid profile, and great taste. This protein is ideal for athletes and fitness enthusiasts who need a high-quality protein supplement to support muscle building and recovery after workouts.' },
        { id: 20, name: 'Optimum Nutrition Serious Mass Gainer', category: 'Mass Gainers', price: (69.99 * 83).toFixed(2), image: 'src/assets/pro20.jpg', description: 'Optimum Nutrition Serious Mass Gainer is a high-calorie mass gainer designed for individuals looking to build muscle mass and strength. It provides essential vitamins, minerals, and proteins to fuel muscle growth. Ideal for those who have difficulty gaining weight or want to add extra calories to their diet to increase muscle size and strength over time.' },
        { id: 23, name: 'Optimum Nutrition Creatine Monohydrate', category: 'Supplements', price: 899, image: 'src/assets/pro23.jpg', description: 'Optimum Nutrition Creatine Monohydrate is a pure creatine powder that helps increase muscle strength, power, and performance during high-intensity workouts. Creatine is a key ingredient for improving workout performance, and this product helps to sustain energy during short bursts of intense physical activity.' },
        { id: 24, name: 'MuscleBlaze Creatine Monohydrate', category: 'Supplements', price: 749, image: 'src/assets/pro24.jpg', description: 'MuscleBlaze Creatine Monohydrate is a high-quality creatine supplement that improves energy levels during workouts and enhances muscle mass. It helps to enhance performance in strength training by increasing the body’s energy reserves, promoting quicker recovery between sets.' },
        { id: 25, name: 'Wellcore Creatine Monohydrate', category: 'Supplements', price: 699, image: 'src/assets/pro25.jpg', description: 'Wellcore Creatine Monohydrate enhances muscle strength and endurance during intense training, helping athletes reach their peak performance. This creatine helps in increasing the water retention in muscle cells, promoting muscular growth and stamina during prolonged workouts.' },
        { id: 26, name: 'Optimum Nutrition Micronized Creatine', category: 'Supplements', price: 1299, image: 'src/assets/pro26.jpg', description: 'Optimum Nutrition Micronized Creatine is designed for faster absorption, promoting increased muscle mass and improved athletic performance. This micronized form of creatine is more easily absorbed by the body, which helps improve strength and power for maximum workout performance.' },
        { id: 2, name: 'MuscleTech Platinum 100% Whey', category: 'Protein Powders', price: (29.99 * 83).toFixed(2), image: 'src/assets/pro2.jpg', description: 'MuscleTech Platinum 100% Whey is a fast-absorbing whey protein isolate that aids in muscle repair and growth after intense training. This high-quality protein helps in improving lean muscle mass and recovery, ensuring the body gets the nutrients needed to build muscles post-workout.' },
        { id: 3, name: 'Isopure Zero Carb Protein', category: 'Protein Powders', price: (39.99 * 83).toFixed(2), image: 'src/assets/pro3.jpg', description: 'Isopure Zero Carb Protein is a whey protein isolate with zero carbs, ideal for those looking to maintain a lean physique while building muscle. With its zero-carb formula, it’s an excellent choice for individuals following low-carb diets or aiming to reduce their carbohydrate intake while still gaining muscle mass.' },
        { id: 4, name: 'Dymatize ISO100 Hydrolyzed Whey', category: 'Protein Powders', price: (45.99 * 83).toFixed(2), image: 'src/assets/pro4.jpg', description: 'Dymatize ISO100 Hydrolyzed Whey is a hydrolyzed whey isolate that digests rapidly, aiding quick muscle recovery and growth post-workout. This protein is perfect for athletes who need fast digestion and efficient absorption for maximum results in a short recovery window.' },
        { id: 5, name: 'MusclePharm Combat Powder', category: 'Protein Powders', price: (29.99 * 83).toFixed(2), image: 'src/assets/pro5.jpg', description: 'MusclePharm Combat Powder is a blend of whey and casein proteins designed for sustained release and long-lasting muscle growth and recovery. This balanced protein blend helps in reducing muscle breakdown during long workouts or overnight.' },
        { id: 6, name: 'Dymatize Elite Casein', category: 'Protein Powders', price: (36.99 * 83).toFixed(2), image: 'src/assets/pro6.jpg', description: 'Dymatize Elite Casein is a slow-digesting protein, ideal for overnight muscle recovery and providing a steady supply of amino acids throughout the night. Its slow-release formula supports muscle repair during extended periods without food, such as during sleep.' },
        { id: 7, name: 'Vega Sport Protein', category: 'Plant-Based Protein', price: (43.99 * 83).toFixed(2), image: 'src/assets/pro7.jpg', description: 'Vega Sport Protein is a plant-based protein powder with a complete amino acid profile, designed for athletes looking for natural and clean protein sources. It offers a sustainable protein solution for vegans and vegetarians without compromising on the quality of their post-workout nutrition.' },
        { id: 8, name: 'Orgain Organic Protein Powder', category: 'Plant-Based Protein', price: (29.99 * 83).toFixed(2), image: 'src/assets/pro8.jpg', description: 'Orgain Organic Protein Powder is made from organic ingredients, providing clean, plant-based protein to support muscle recovery and overall health. This protein is certified organic and non-GMO, making it a healthy option for those seeking a clean diet.' },
        { id: 9, name: 'BulkSupplements Pure Pea Protein Isolate', category: 'Pea Protein', price: (26.99 * 83).toFixed(2), image: 'src/assets/pro9.jpg', description: 'BulkSupplements Pure Pea Protein Isolate is a vegan-friendly protein with a high protein concentration, ideal for non-dairy and gluten-free diets. This pea protein is easily digestible and packed with essential nutrients for muscle repair and growth.' },
        { id: 10, name: 'NOW Foods Brown Rice Protein Powder', category: 'Brown Rice Protein', price: (23.99 * 83).toFixed(2), image: 'src/assets/pro10.jpg', description: 'NOW Foods Brown Rice Protein Powder is a hypoallergenic protein powder that offers a clean and easily digestible plant-based protein option. It’s an excellent choice for individuals with food sensitivities or those seeking to avoid dairy or soy.' },
        { id: 11, name: 'MuscleBlaze Whey Protein Isolate', category: 'Protein Powders', price: (59.99 * 83).toFixed(2), image: 'src/assets/pro11.jpg', description: 'MuscleBlaze Whey Protein Isolate is a high-quality whey protein isolate that helps in faster muscle recovery, growth, and improving strength. This protein is ideal for those looking for fast and efficient muscle repair, especially post-exercise.' },
        { id: 12, name: 'ON 100% Whey Protein', category: 'Protein Powders', price: (29.99 * 83).toFixed(2), image: 'src/assets/pro12.jpg', description: 'ON 100% Whey Protein is a premium whey protein concentrate ideal for muscle building, with a rich blend of amino acids for enhanced recovery. This product is renowned for its high quality and effectiveness in supporting muscle growth after rigorous workouts.' },
        { id: 13, name: 'GNC AMP Wheybolic Protein', category: 'Protein Powders', price: (49.99 * 83).toFixed(2), image: 'src/assets/pro13.jpg', description: 'GNC AMP Wheybolic Protein is a fast-digesting protein designed for muscle growth and repair, providing essential nutrients post-workout. Its formulation ensures rapid muscle recovery and optimal support for strength gains.' },
        { id: 14, name: 'BSN Syntha-6 Protein Powder', category: 'Protein Powders', price: (39.99 * 83).toFixed(2), image: 'src/assets/pro14.jpg', description: 'BSN Syntha-6 is a blended protein formula that supports sustained muscle recovery and growth with a combination of whey, casein, and egg proteins. It provides the body with a steady supply of amino acids for muscle repair and growth.' },
        { id: 15, name: 'Evlution Nutrition ENGN Pre Workout', category: 'Pre-Workout Supplements', price: (24.99 * 83).toFixed(2), image: 'src/assets/pro15.jpg', description: 'Evlution Nutrition ENGN Pre Workout is a potent pre-workout formula that enhances energy, focus, and endurance for intense workouts. It boosts physical performance, helping athletes push harder during their training sessions.' },
        { id: 16, name: 'Cellucor C4 Pre-Workout', category: 'Pre-Workout Supplements', price: (29.99 * 83).toFixed(2), image: 'src/assets/pro16.jpg', description: 'Cellucor C4 Pre-Workout is a widely popular pre-workout supplement that boosts energy and endurance with powerful ingredients to optimize workouts. Known for its quick energy boost and intense workout support.' },
        { id: 17, name: 'Kaged Muscle Pre-Kaged Pre-Workout', category: 'Pre-Workout Supplements', price: (49.99 * 83).toFixed(2), image: 'src/assets/pro17.jpg', description: 'Kaged Muscle Pre-Kaged Pre-Workout features natural ingredients for sustained energy, focus, and performance in intense training sessions. It’s an ideal pre-workout for enhancing performance and achieving your best results.' },
        { id: 18, name: 'Redcon1 Total War Pre-Workout', category: 'Pre-Workout Supplements', price: (39.99 * 83).toFixed(2), image: 'src/assets/pro18.jpg', description: 'Redcon1 Total War Pre-Workout helps improve endurance, strength, and stamina with clinically dosed ingredients that increase workout intensity. It’s a comprehensive pre-workout supplement designed for intense and long-lasting training sessions.' },
        { id: 19, name: 'MuscleTech NeuroCore Pre-Workout', category: 'Pre-Workout Supplements', price: (34.99 * 83).toFixed(2), image: 'src/assets/pro19.jpg', description: 'MuscleTech NeuroCore Pre-Workout is designed to enhance focus, energy, and performance with a powerful blend of ingredients and no artificial sugars. It supports intense focus and power output during workouts.' },
        { id: 21, name: 'Naked Whey Protein', category: 'Protein Powders', price: (54.99 * 83).toFixed(2), image: 'src/assets/pro21.jpg', description: 'Naked Whey Protein is a clean whey isolate that is free from additives, sweeteners, and fillers, providing the purest form of protein for muscle building. This protein is perfect for those who seek high-quality nutrition without unnecessary ingredients.' },
        { id: 22, name: 'Quest Protein Powder', category: 'Protein Powders', price: (39.99 * 83).toFixed(2), image: 'src/assets/pro22.jpg', description: 'Quest Protein Powder is a low-carb, high-protein option that supports lean muscle growth while keeping your calorie intake low. It is perfect for anyone looking to build lean muscle without adding extra carbs or fats.' },
 
        // Add other products as needed...
    ];

    // Find the selected product based on the ID
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <p>Product not found.</p>;
    }

    // State for address, pin code, and payment method
    const [address, setAddress] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [offers, setOffers] = useState(false);

    // Handle address form submission
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handlePinCodeChange = (e) => {
        setPinCode(e.target.value);
    };

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleShowOffers = () => {
        setOffers(!offers); // Toggle the offers visibility
    };

    return (
        <div className="product-detail-container">
            <div className="product-detail">
                <div className="product-detail-left">
                    <img src={product.image} alt={product.name} className="product-image" />
                </div>

                <div className="product-detail-right">
                    <h1 className="product-name">{product.name}</h1>
                    <p className="product-category">{product.category}</p>
                    <p className="product-price">₹{product.price}</p>
                    <p className="product-description">{product.description}</p>

                    <div className="address-form">
                        <h3>Enter Delivery Address</h3>
                        <input 
                            type="text" 
                            placeholder="Enter Address" 
                            value={address} 
                            onChange={handleAddressChange} 
                            className="address-input"
                        />
                        <input 
                            type="text" 
                            placeholder="Enter Pin Code" 
                            value={pinCode} 
                            onChange={handlePinCodeChange} 
                            className="address-input"
                        />
                    </div>

                    <div className="payment-method">
                        <h3>Select Payment Method</h3>
                        <select value={paymentMethod} onChange={handlePaymentChange} className="payment-select">
                            <option value="">Select Payment Method</option>
                            <option value="credit-card">Credit Card</option>
                            <option value="debit-card">Debit Card</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>

                    <button className="buy-now-button">Buy Now</button>

                    <button onClick={handleShowOffers} className="offers-button">
                        {offers ? 'Hide Offers' : 'Show Offers'}
                    </button>

                    {offers && (
                        <div className="offers">
                            <p>Use code "FITNESS10" to get a 10% discount on your first purchase.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
