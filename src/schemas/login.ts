import * as Yup from 'yup';

export const DATA_SCHEMA_LOGIN = Yup.object().shape({
  user: Yup.string()
    .min(2, 'El numero de caracteres es muy corto')
    .max(50, 'El numero de caracteres es muy grande ')
    .required('El Usuario es un campo requerido'),
  password: Yup.string()
    .min(2, 'El numero de caracteres es muy corto')
    .max(50, 'El numero de caracteres es muy grande ')
    .required('La contraseña es un campo requerido'),
});
