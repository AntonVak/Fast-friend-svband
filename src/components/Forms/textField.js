
const TextField = ({label, type, value, name, onChange}) => {
    return ( 
        <div>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
     );
}
 
export default TextField;