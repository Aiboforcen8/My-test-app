import React, { useEffect, useState } from 'react';

function Profile() {
  const [timer, setTimer] = useState(0)
  
  useEffect(() => {
   const timeout = setTimeout(()=> { setTimer((prev) => prev + 1)}, 1000)
   
   return () => clearTimeout(timeout)
  },[timer])
  return (
    <div>
      {timer}
    </div>
  );
}

export default Profile;


  
  
  
