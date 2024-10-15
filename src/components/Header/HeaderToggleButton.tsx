type HeaderToggleButtonProps = {
  onClick: () => void;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
};

export default function HeaderToggleButton({ onClick, icon: Icon }: Readonly<HeaderToggleButtonProps>) {
  return (
    <button
      className={`flex items-center justify-center h-full w-full bg-white dark:bg-quartz-d60 border-quartz-l80 dark:border-quartz-d10 hover:border-quartz-l90 hover:dark:border-quartz-d20 hover:bg-gray-300 hover:dark:bg-quartz-d70 transition-colors rounded-lg sm:rounded-full text-black dark:text-white font-semibold px-3 py-1 border`}
      onClick={onClick}
      aria-label="Toggle button"
    >
      {typeof Icon === 'string' ? (
        <img src={Icon} alt="Toggle icon" className="w-5 sm:w-4" />
      ) : (
        Icon && <Icon className="w-4 text-black dark:text-white" />
      )}
    </button>
  );
}
