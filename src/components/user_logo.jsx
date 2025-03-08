import React from "react";

function UserLogo({ 
  user, 
  onClick,
  className = "", 
}) {
  const words = user ? user.trim().split(/\s+/) : [];

  let userTag = "?";

  if (words.length > 0) {
    const word = words[0]; 
    const firstInitial = word[0].toUpperCase();
    const lastMiddle = word[1].toUpperCase(); 
    //const lastInitial = word[2].toUpperCase(); 
  
    userTag = firstInitial + lastMiddle; //+ lastInitial;
  }
  

  return (
    <div
      className={`${className} font-semibold rounded-full flex items-center justify-center transition-all duration-300`}
      onClick={onClick}
    >
      <p>{userTag}</p>
    </div>
  );
}

export default UserLogo;
