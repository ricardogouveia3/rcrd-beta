import HeaderButton from "./HeaderButton";

type ToggleButtonProps = {
  onClick: () => void;
  isDarkMode: boolean;
};

export default function ToggleButton({ onClick, isDarkMode }: Readonly<ToggleButtonProps>) {
  return (
    <HeaderButton onClick={onClick} aria-label="Toggle dark mode">
      {isDarkMode ? "☀️" : "🌙"}
    </HeaderButton>
  );
}


