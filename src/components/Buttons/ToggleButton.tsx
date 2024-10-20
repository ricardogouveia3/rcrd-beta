type HeaderToggleButtonProps = {
  onClick: () => void;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
};

const ToggleButton = ({ onClick, icon: Icon }: Readonly<HeaderToggleButtonProps>) => {
  return (
    <button
      className={`flex items-center justify-center h-full w-full card-background card-border hover-background rounded-lg sm:rounded-full text-black dark:text-white font-semibold px-3 py-1`}
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

export default ToggleButton;
