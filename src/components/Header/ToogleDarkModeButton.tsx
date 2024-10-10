import HeaderButton from "./HeaderButton";

type ToggleButtonProps = {
  onClick: () => void;
  isDarkMode: boolean;
};

export default function ToggleButton({ onClick, isDarkMode }: Readonly<ToggleButtonProps>) {
  const toggleButtonClassnames = `bg-indigo-800 hover:bg-indigo-600 dark:bg-sky-600 dark:hover:bg-sky-500 dark:border-gray-500 border-gray-500`;
  return (
    <HeaderButton onClick={onClick} aria-label="Toggle dark mode" classNames={toggleButtonClassnames}>
      {isDarkMode ? "🌞" : "🌙"}
    </HeaderButton>
  );
}


