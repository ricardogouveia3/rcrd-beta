import HeaderButton from "./HeaderButton";

type ToggleButtonProps = {
  onClick: () => void;
  isDarkMode: boolean;
};

export default function ToggleButton({ onClick, isDarkMode }: Readonly<ToggleButtonProps>) {
  const toggleButtonClassnames = `bg-white hover:bg-indigo-600 dark:bg-quartz-d60 dark:hover:bg-sky-500 border-gray-300 dark:border-gray-500 rounded-lg sm:rounded-full`;
  return (
    <HeaderButton onClick={onClick} aria-label="Toggle dark mode" classNames={toggleButtonClassnames}>
      {isDarkMode ? "🌞" : "🌙"}
    </HeaderButton>
  );
}


