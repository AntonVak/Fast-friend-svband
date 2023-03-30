
const TextField = ({label, type, value, name, onChange, autoComplete, error}) => {
    return ( 
        <div>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          value={value}
          onChange={onChange}
          name={name}
          autoComplete={autoComplete}  
        />
        {error && <p>{error}</p>}
      </div>
     );
}
 
export default TextField;