import { useEffect, useState } from "react";
import getPhotoUrl from "get-photo-url";
import db from "../db.js";
import profileIcon from "../assets/profileIcon.svg";

const Bio = ({color, setColor}) => {
  // usestate() returns an array as its value
  // the first element of the array is the actual value
  // the second elememt is a function which is used to update our state
  const [userDetails, setUserDetails] = useState({
    name: "Cool_pictures",
    about: "This page posts cool nice photos",
  });
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);
  const [profilePhoto, setprofilePhoto] = useState(profileIcon)
useEffect(() => {
  const setDataFromDb = async () => {
    // info is the primary key 
    const userDetailsFromDb = await db.bio.get("info")
    const profilePhotoFromDb = await db.bio.get("profilePhoto")
    // we only want to update from db when there is smt in the db
    // so this is just saying if details from db exists
    // then set or update 
    userDetailsFromDb && setUserDetails(userDetailsFromDb)
    profilePhotoFromDb && setprofilePhoto(profilePhotoFromDb)
  }
  setDataFromDb()
})

  const updateUserDetails = async (event) => {
    event.preventDefault();
    const objectData = {
      name: event.target.nameOfUser.value,
      about: event.target.aboutOfUser.value,
    }
    setUserDetails(objectData)
    // update bio object store here
    // put() takes object data as its first argument
    // primary key as second argument
    await db.bio.put(objectData, 'info')
    setEditFormIsOpen(false);
  };
  const updateProfilePhoto = async () => {
    // get selected photo
    // update state 
    const newProfilePhoto = await getPhotoUrl("#profilePhotoInput")
    setprofilePhoto(newProfilePhoto);
    await db.bio.put(newProfilePhoto, "profilePhoto")
  }
  const editForm = (
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input type="text" id="" name="nameOfUser" defaultValue={userDetails?.name} placeholder="Your name" />
      <input type="text" id="" name="aboutOfUser" defaultValue={userDetails?.about} placeholder="About you" />
      <br />
      <button
        onClick={() => setEditFormIsOpen(false)}
        type="button"
        className="cancel-button"
      >
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );
  const editButton = (
    <button onClick={() => setEditFormIsOpen(true)}>Edit profile</button>
  );
  
  return (
    <section className={`${color ? "bio-dark" : "bio"}`}>
      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
      <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
        <div
          className="profile-photo"
          role="button"
          title="Click to ediit photo"
        >
          <img src={profilePhoto} alt="profile" />
        </div>
      </label>
      <div className={`${color ? "profile-info-dark" : "profile-info"}`}>
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>
        {editFormIsOpen ? editForm : editButton}
      </div>
    </section>
  );
};

export default Bio;
