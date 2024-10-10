import { useNavigate } from "react-router-dom";

export const Truck = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Переміщуємося на маршрут /catalog/info
    navigate('/catalog/info');
  };

  return (
    <>
      <img src="" alt="" />
      <h2>Maveriks</h2>
      <p>Price</p>
      <p>Review</p>
      <p>Location</p>
      <p>View</p>
      <button>Automatic</button>
      <button>Petrol</button>
      <button>Kitchen</button>
      <button>AC</button>
      <button onClick={handleButtonClick}>Show more</button>
    </>
  );
};
