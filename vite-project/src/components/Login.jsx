import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure you are using 'useNavigate' for navigation
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = 'http://localhost:5000/api/users';

    if (isAdmin) {
      // Handle Admin login (use dummy username and password)
      const dummyAdminUsername = 'admin';
      const dummyAdminPassword = 'admin123';

      if (username === dummyAdminUsername && password === dummyAdminPassword) {
        console.log('Admin Login Success (Dummy):', { username, password });
        navigate('/admin-dashboard'); // Redirect to admin dashboard
      } else {
        // You can add your real admin login logic here if needed
        alert('Invalid admin credentials');
      }
    } else if (isLogin) {
      // Handle User login
      try {
        const response = await axios.post(`${apiUrl}/login`, { email, password });
        console.log('User Login Success:', response.data);
        // Store token in localStorage or state for further requests
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      } catch (error) {
        console.error('User Login Error:', error.response?.data || error.message);
        alert('Invalid credentials. Please try again.');
      }
    } else {
      // Handle User registration
      try {
        const response = await axios.post(`${apiUrl}/register`, {
          firstName,
          lastName,
          email,
          password,
        });
        console.log('Registration Success:', response.data);

        alert('You have successfully created an account! Please login.');

        // Redirect to login page after successful registration
        navigate('/');
      } catch (error) {
        if (error.response && error.response.data === 'Email already exists') {
          alert('This email is already registered. Please login.');
        } else {
          console.error('Registration Error:', error.response?.data || error.message);
          alert('Error during registration. Please try again.');
        }
      }
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img className="img" src="src/assets/img.png" alt="Login Image" />
      </div>

      <div className="form-container">
        <h2>{isAdmin ? 'Admin Login' : isLogin ? 'Login to your account' : 'Create an account'}</h2>
        <p className="all">
          {isAdmin ? (
            <a href="#" onClick={() => setIsAdmin(false)}>
              Switch to User Login
            </a>
          ) : (
            <>
              {isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
              <a href="#" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Create one' : 'Login'}
              </a>
              <br />
              <a href="#" onClick={() => setIsAdmin(true)}>Login as Admin</a>
            </>
          )}
        </p>

        <form onSubmit={handleSubmit}>
          {isAdmin ? (
            <>
              <div className="input-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter admin username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </>
          ) : (
            <>
              {!isLogin && (
                <>
                  <div className="input-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}

              <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {!isLogin && (
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                    required
                  />
                  <label htmlFor="terms">I agree to the Terms & Conditions</label>
                </div>
              )}
            </>
          )}

          <button type="submit" disabled={isAdmin ? !(username && password) : !termsAccepted && !isLogin}>
            {isAdmin ? 'Login as Admin' : isLogin ? 'Login' : 'Create account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
