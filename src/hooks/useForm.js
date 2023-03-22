//importo es te custom hook pra el manejo del login

import { useState, useEffect, useMemo } from "react";
//ormValidations = {} viene de registerPage para validar los input
export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);

  //state para la validacion
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  //Creo un la validacion del formulrio total
  //uso un useMemo para mmemorizar el valor del formstate
  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }

    return true;
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  /**************CREO LAS VALIDACIONES DE LOS INPUTS D LO FORMULARIOS */
  /**Creo un useState */

  const createValidators = () => {
    const formCheckedValues = {};

    //barro el objeto de validacionjes con un for
    for (const formField of Object.keys(formValidations)) {
      console.log(formField);
      const [fn, errorMessage = "Este campo es requerido."] =
        formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
    console.log(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};
