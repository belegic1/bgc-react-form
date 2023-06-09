import React from "react";
import { FormContext } from "../FormContext/FormContext";
import FieldValues from "../../types/FieldValues";
import "./Form.css";

/**
 * @typedef inputValues {Object} object With intial values
 * @param onSubmit {Function} onSubmit function
 * @param children React component
 */

export interface FormProps {
  initialValues: FieldValues;
  onSubmit: (value: FieldValues) => void;
  children: React.ReactNode;
}

// eslint-disable-next-line react/function-component-definition
const Form: React.FC<FormProps> = ({ initialValues, onSubmit, children }) => {
  const [data, setValue] = React.useState<FieldValues>(initialValues);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const [propertyName, subPropertyName] = e.target.name.split(".");

    setValue((prevState: FieldValues) => {
      if (subPropertyName) {
        return {
          ...prevState,
          [propertyName]: {
            ...prevState[propertyName],
            [subPropertyName]: e.target.value,
          },
        };
      }
      return {
        ...prevState,
        [propertyName]: e.target.value,
      };
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(data);
    console.log(data);
  };
  return (
    <FormContext.Provider value={{ data, handleChange }}>
      <form className="form dark" onSubmit={handleSubmit}>
        <div>{children}</div>
      </form>
    </FormContext.Provider>
  );
};
export default Form;
