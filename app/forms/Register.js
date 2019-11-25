import React from "react";

import t from "tcomb-form-native";
import formValidation from "../utils/Validation";


export const RegisterStruct = t.struct({
  name: t.String,
  email: formValidation.email,
  password: formValidation.password,
  passwordConfirmation: formValidation.password
});

export const RegisterOptions = {
  fields: {
    name: {

        placeholder: "Escribe tu nombre y apellidos",
        iconType: "material-community",
        iconName: "account-outline"
      
    },
    email: {
      
        placeholder: "Escribe tu email",
        iconType: "material-community",
        iconName: "at"
      
    },
    password: {
   
        placeholder: "Escribe tu contraseña",
        iconType: "material-community",
        iconName: "lock-outline",
        password: true,
        secureTextEntry: true
      
    },
    passwordConfirmation: {
     
        placeholder: "Repite tu contraseña",
        iconType: "material-community",
        iconName: "lock-reset",
        password: true,
        secureTextEntry: true
      
    }
  }
};
