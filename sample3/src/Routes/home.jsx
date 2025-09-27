import { useState, useEffect } from "react";
import axios from "axios";
import bulboff from "../assets/bulboff.png";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        setUsers(res.data.users);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {users.map((u) => (
        <div key={u.id}>
          {u.firstName} {u.lastName}
        </div>
      ))}
      <img src={bulboff} alt="Bulb Off"/>
    </div>
  );
}

export default Home;
