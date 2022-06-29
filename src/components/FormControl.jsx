const FormControl = ({
  type,
  placeholder,
  label,
  direction,
  margin,
  justify,
  items,
  value,
  onChange,
  checked,
}) => {
  return (
    <div
      className={`flex ${direction} ${margin} ${items} ${justify}`}
    >
      <label className="text-sm font-medium mb-1">
        {label}
      </label>
      <input
        className="outline-0 border-2 border-grayishColor p-1.5 rounded"
        type={type}
        placeholder={placeholder}
        checked={checked}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FormControl;
