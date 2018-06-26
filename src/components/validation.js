export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value => (value.trim() !== '' ? undefined : 'Cannot be empty');

export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';


//NOTES ON THE ABOVE: CHECK OUT REACT-jwt-auth-client and server in React-jwt-auth
//This is a bit different from the validators we've seen before. A regular validator is a function which takes the value from the field, and returns a string if there is an error. The length validator is a function which returns another function, and it is this inner function which returns the string if the field is invalid. It is a validator creator function.


//The outer function takes a length object, which describes the maximum and minimum length allowed. This then returns the validator function, which takes the value from the field, and carries out the check. Let's look at how this is used in the field:


// const passwordLength = length({min: 10, max: 72});
// At the top of the file we use the validator creator to make a specific validator which we customize by passing in options, in this case the min and max length.

// <Field component={Input} type="password" name="password"
//     validate={[required, passwordLength, isTrimmed]} />
// Then we pass the specific validator, passwordLength, to the Field component as usual.