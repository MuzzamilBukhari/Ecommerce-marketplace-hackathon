export const Button = ({
  type,
  disabled,
  children,
  onClick,
  className,
}: {
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <button
    className={`w-full bg-myHeading text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-transform ${className} `}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
