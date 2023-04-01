const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  error,
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const getInputClasses = () => {
    return "form-select" + (error ? " is-invalid" : "");
  };

  const optionArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options;

  return (
    <div className="mb-4">
      <label  className="form-label">
        {label}
      </label>
      <select
        className={getInputClasses}
        id="validationCustom04"
        name="profession"
        value={value}
        onChange={handleChange}
      >
        <option selected disabled value="">
          {defaultOption}
        </option>
        {optionArray &&
          optionArray.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectField;
