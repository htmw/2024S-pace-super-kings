import React from 'react'
import profileCoverImage from '../assets/profile-cover/coverpicss.svg'
import './profile.css';
import { useState ,useEffect} from 'react';
import defaultCover from '../assets/profile-cover/default-cover.jpg'
import axios from '../network/networkInterceptor';

const Profile = () => {

     // Initial user profile data
  const initialUserData = {
    email: 'user@example.com',
    firstName: 'John',
  };

  // State to manage profile data and edit modes
  const [userData, setUserData] = useState(initialUserData);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Function to save updated data to the backend
  const saveProfile = () => {
    // Make an HTTP POST/PUT request to update the profile in the backend
    axios
      .post('/user-profile', userData) // Adjust the endpoint based on your backend API
      .then((response) => {
        console.log('Profile updated:', response.data);
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

    const [profilePhoto, setProfilePhoto] = useState(defaultCover); 

    // Function to handle file selection and update the profile photo
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setProfilePhoto(e.target.result); // Update the profile photo with the new image
        };
        reader.readAsDataURL(file);
      }
    };

    const [email, setEmail] = useState('user@gmail.com');
    const [firstName, setFirstName] = useState('user');
  
    // Fetch data from the API on component mount
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/user/profile'); // Replace with your API endpoint
          setEmail(response.data.email);
          setFirstName(response.data.firstName);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    // Handle save button click
    const handleSave = async () => {
      try {
        await axios.put('/user/profile', { email, firstName }); // Replace with your API endpoint
        alert('Data saved successfully!');
      } catch (error) {
        console.error('Error saving data:', error);
      }
    };
  
  return (
    <>
    
    <div className="profile-cover-photo">
        <img className='coverImage' src={profileCoverImage} alt="" />
    </div>
    <div className="profile-section">
      <div className="profile-photo">
        <img src={profilePhoto} alt="User Profile" />
        <div className="edit-icon" onClick={() => document.getElementById('file-input').click()}>
          ✎
        </div>
      </div>
      <input
        type="file"
        id="file-input"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
    <div className="user-profile">
    <div>
      <h5>Edit User Information</h5>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>First Name:</label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <br />
      <center>
      <button className='saveInfoBtn' onClick={handleSave}>Save</button>
      </center>
    </div>
    </div>
    
    
    </>
  )
}

export default Profile