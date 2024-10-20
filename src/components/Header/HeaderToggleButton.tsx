type HeaderToggleButtonProps = {
  onClick: () => void;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
};

export default function HeaderToggleButton({ onClick, icon: Icon }: Readonly<HeaderToggleButtonProps>) {
  return (
    <button
      className={`flex items-center justify-center h-full w-full card-background card-border hover:border-quartz-950 hover:dark:border-quartz-400 hover:bg-quartz-800 hover:dark:bg-quartz-150 transition-colors rounded-lg sm:rounded-full text-black dark:text-white font-semibold px-3 py-1 border`}
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
