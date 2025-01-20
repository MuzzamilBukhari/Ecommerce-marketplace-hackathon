export const InputField = ({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder?: string;
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2 text-gray-600">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#029FAE] hover:shadow-md transition-all"
    />
  </div>
);
