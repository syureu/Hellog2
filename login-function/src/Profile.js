import React from "react";

function Profile({ user }) {
  const { email, password, name } = user || {};
  return (
    <>
      <h1>Profile</h1>
      <dt>Email : {email} </dt>
      {/* <p>{email}</p> */}
      <dt>Password : {password} </dt>
      {/* <p>{password}</p> */}
      <dt>Name : {name}</dt>
      {/* <p>{name}</p> */}
    </>
  );
}

export default Profile;
