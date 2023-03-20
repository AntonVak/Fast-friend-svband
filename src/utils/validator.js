export function validator(data, config) {
  const errors = {};
  function validate(validMethod, data, config) {
    let statusValidate;

    switch (validMethod) {
      case "isRequired":
        statusValidate = data.trim() === ""
        break;
        case "isMail":{
            const emailRegExp = /^\S+@\S+\.\S+$/g
            statusValidate = !emailRegExp.test(data);
            break;
        }
        case "isCapitalSymbol":{
            const capitalRegExp = /[A-Z]+/g
            statusValidate = !capitalRegExp.test(data);
            break;
        }
        case "isDigitSymbol":{
            const digitRegExp = /\d+/g
            statusValidate = !digitRegExp.test(data);
            break;
        }
        case "min":{
            
            statusValidate = data.length< config.value ;
            break;
        }
      default:break;
    }
    if(statusValidate) return config.message
  }
  for (const fieldName in data) {
    for (const validMethod in config[fieldName]) {
        
      const error = validate(
        validMethod,
        data[fieldName],
        config[fieldName][validMethod]
      );
      if(error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
