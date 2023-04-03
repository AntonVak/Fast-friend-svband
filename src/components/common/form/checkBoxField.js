const CheckBoxField = ({ name, value, onChange, children }) => {
  const handleChange = (params) => {
    onChange({ name: name, value: !value });
  };
  return (
    <div className="form-check mb-4">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={name}>
        {children}
      </label>
    </div>
  );
};

export default CheckBoxField;
