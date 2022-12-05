import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState<number>(1);

  const handlePlus = () => {
    if (count <= 99) setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (count >= 2) setCount((prev) => prev - 1);
  };

  return {count, handlePlus, handleMinus};
}

export default useCounter;