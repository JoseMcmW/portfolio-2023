export const validate = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = "Nombre is require";
  } else if (!/^[a-zA-Z]{0,10}$/.test(input.name)) {
    errors.name = "Must contain only letters.";
  }
  if (!input.lastName) {
    errors.lastName = "Last Name is require";
  } else if (!/^[a-zA-Z]{0,10}$/.test(input.lastName)) {
    errors.lastName = "Must contain only letters.";
  }
  if (!/^[\s\S]{0,60}$/.test(input.subject)) {
    errors.subject = "Exceeds 60 characters limit"
  }
  if(!input.email) {
    errors.email = "Email is require"
  } else if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(input.email)){
    errors.email = "Invalid email address."
  }
  return errors;
};
