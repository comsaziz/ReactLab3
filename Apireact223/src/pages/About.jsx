import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function About() {
  const { id } = useParams(); 
  const [item, setItem] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="about-container">
      <img src={item.image} alt={item.name} />
      <h1>{item.name}</h1>
      <p><strong>Hair Color:</strong> {item.hairColor}</p>
      <p><strong>Status:</strong> {item.status}</p>
      <p><strong>Class:</strong> {item.characterClass}</p>
      <p><strong>Gender:</strong> {item.gender}</p>
      <p><strong>Planet:</strong> {item.planet}</p>
    </div>
  );
}

export default About;
