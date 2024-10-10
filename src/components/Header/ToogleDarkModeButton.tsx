import { useState } from "react";
import HeaderButton from "./HeaderButton";

export default function ToggleButton() {
  const [isTrue, setIsTrue] = useState(true);

  const handleToggle = () => {
    setIsTrue(!isTrue);
  };

  return (
    <HeaderButton onClick={handleToggle}>
      {isTrue ? "🌙" : "☀️"}
    </HeaderButton>
  );
}
