import React, { useState } from "react";
import "./UserProfileStyle.css";

function UserProfile() {
  const [isShown, setIsShown] = useState(false);
  const [buttonText, setButtonText] = useState("Add more details");
  const [department, setDepartment] = useState(null);
  const [branch, setBranch] = useState("");
  const [role, setRole] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  const handleClick = () => {
    setIsShown((current) => !current);

    // Change button text to "Update" after the first click
    setButtonText((currentText) =>
      currentText === "Add more details" ? "Update" : "Add more details"
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-image-container">
          <label htmlFor="imageUpload" className="image-upload-label">
            <img
              className="profile-image"
              src={profileImage}
              alt=""
            />
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="profile-default-body ">
        <div className="first-row">


          <p className="name">Pushpendra</p>
         
          <p className="lastname">Aryan</p>
        </div>
        <div className="first-row">
          <p className="username">pku025200</p>
          <p className="password">password</p>
        </div>
      </div>

      {isShown && (
        <div className="profile-added-body ">
          <div className="first-row addtional-row">
            
            <input
              type="text"
              className="profile-input-more"
              placeholder="Department"
              onChange={(e) => setDepartment(e.target.value)}
            />
            <input
              type="text"
              className=".profile-input-more"
              placeholder="Branch"
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>

          <div className="first-row addtional-row">
            <input
              type="text"
              className="profile-input-more"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
            />
            <input
              type="number"
              className=".profile-input-more"
              placeholder="Roll number"
              onChange={(e) => setRollNumber(e.target.value)}
            />
          </div>
        </div>
      )}

      {department && (
        <div className="profile-default-body">
          <div className="first-row">
            <p className="name">{department}</p>
            <p className="lastname">{branch}</p>
          </div>
          <div className="first-row">
            <p className="username">{role}</p>
            <p className="password">{rollNumber}</p>
          </div>
        </div>
      )}

      <div className="profile-footer">
        <button className="update-profile-btn" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
      
    </div>
  );
}

export default UserProfile;
