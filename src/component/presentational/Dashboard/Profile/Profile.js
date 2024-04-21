import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import { useUserContext } from '../context/UserContext';

const Profile = () => {
  const { UserId } = useUserContext();
  const [file, setFile] = useState(null);
  const [showEventForm, setShowEventForm] = useState(false);
  const [user, setUser] = useState(null); // Initialize as null

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    axios.get(`/api/getUserData/${UserId}`)
      .then((res) => {
        setUser(res.data);
        console.log("User data:", res.data);
      })
      .catch((err) => console.error("Error getting user data", err));
  }, [UserId]);

  const handleUpload = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('profile', file);
      formData.append('UserId', UserId);
      await axios.post('/api/uploadPhoto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again later.');
    }
  };

  return (
    <div className='dash profile'>
      {user && (
        <div className="profile-top profile-cont">
          <div className="profile-top-head">
            <img src="https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="edit-cover-button profile-button">
              <button>🖋 Edit Cover</button>
            </div>
          </div>
          <div className="profile-top-info">
            <div className="profile-pic">
            <div className="profile-pic-main">
            {user && user.profile && user.profile.data && user.profile.contentType && (
              <img
               src={`data:${user.profile.contentType};base64,${btoa(
                new Uint8Array(user.profile.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                 ''
                 )
                )}`}
             alt="Profile"
              />
                )}
               </div>
              <div className="profile-pic-button profile-button">
                <button onClick={() => setShowEventForm(true)}>+</button>
              </div>
            </div>
            <div className="profile-info">
              <h2>{user.fname} {user.lname}</h2>
              <p><span>Phone:</span> {user.mobilenumber}</p>
              <p><span>Email:</span> {user.email}</p>
            </div>
          </div>
          {showEventForm && (
            <div className="addform">
              <form onSubmit={handleUpload} className='eventform'>
                <div className="formhead">
                  <h2>Please Enter below Details:-</h2>
                  <h2 className='Close' onClick={() => setShowEventForm(false)}>X</h2>
                </div>
                <input type="file" accept=".png, .jpg, .jpeg" name="profile" onChange={handleFileChange} />
                <button>Upload</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
