const TextField = ({
  label,
  type,
  value,
  name,
  onChange,
  autoComplete,
  error,
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        onChange={handleChange}
        name={name}
        autoComplete={autoComplete}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextField;
