import { useState } from "react";

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default EventHandlingDemo;