export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => (
  <button
    className="w-full bg-gradient-to-r from-[#029FAE] to-[#017F8E] text-white font-semibold py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-transform"
    onClick={onClick}
  >
    {label}
  </button>
);
