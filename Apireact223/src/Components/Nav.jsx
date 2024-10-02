import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Nav() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6657369e9f970b3b36c865b0.mockapi.io/Images/');
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav>
      {tasks.map((task) => (
        <div key={task.id} className="mb-4">
          <img
            src={task.image}
            alt={`Image ${task.id}`}
            className="w-40 h-40 object-contain mb-2"
          />
          <Link to={`/about/${task.id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default Nav;
