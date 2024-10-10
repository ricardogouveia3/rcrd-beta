type ToggleButtonProps = {
  onClick: () => void;
  isDarkMode: boolean;
};

export default function ToggleButton({ onClick, isDarkMode }: Readonly<ToggleButtonProps>) {

  return (
    <button
      className={`bg-white hover:bg-indigo-600 dark:bg-quartz-d60 dark:hover:bg-sky-500 border-gray-300 dark:border-gray-500 rounded-lg sm:rounded-full text-black dark:text-white font-semibold px-3 py-1 border`}
      onClick={onClick} aria-label="Toggle dark mode">
      {isDarkMode ? "🌞" : "🌙"}
    </button>
  );
}


