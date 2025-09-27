import React from "react";
import Profile from"./components/Profile"
const App=()=>{
  const Billie={
    "name":"Billie",
    "Un":"@billie01",
    "Email":"billie@example.com",
    "About":"Creative full-stack engineer with a focus on modern JavaScript frameworks"
  }
  const Finneas={
    "name":"Finneas",
    "Un":"@finneas_dev",
    "Email":"finneas@example.com",
    "About":"Backend architect specializing in microservices,APIs,and scalable systems"
  }
  const Catherine={
    "name":"Catherine",
    "Un":"@catherine_code",
    "Email":"finneas@example.com",
    "About":"UI/UX designer turned a passion for accessible design"
  }
  return(
    <div>
      <Profile name={Billie.name}
      un={Billie.Un}
      Email={Billie.Email}
      About={Billie.About}
      />
      <Profile name={Finneas.name}
      un={Finneas.Un}
      Email={Finneas.Email}
      About={Finneas.About}
      />
      <Profile name={Catherine.name}
      un={Catherine.Un}
      Email={Catherine.Email}
      About={Catherine.About}
      />
    </div>
  );
}
export default App;