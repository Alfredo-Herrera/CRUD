import { DATA_SCHEMA_LOGIN } from '@/schemas/login';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik as FORMIK } from 'formik';
import { useDispatch } from 'react-redux';
import { setLoginData } from '../../../redux/actions/login';
import { Texts } from './help';
import { ButtonForm, FormContainer } from './styles';

const SeccionLogin = () => {
  const dispatch = useDispatch();

  const fields: string[] = ['user', 'password'];
  const { handleSubmit, errors, touched, getFieldProps } = FORMIK({
    initialValues: {
      user: '',
      password: '',
    },
    onSubmit: async (values, { resetForm }) => {
      dispatch(setLoginData(values));
      resetForm();
    },
    validationSchema: DATA_SCHEMA_LOGIN,
  });

  const PROPS_SIZE = {
    type: 'text',
    fullWidth: true,
  };

  return (
    <>
      <FormContainer container>
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', marginTop: '10px', justifyContent: 'center' }}
        >
          <Typography variant="h3">Login</Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '20px' }}>
          <form onSubmit={handleSubmit}>
            {fields.map((field, index: number) => {
              if (field === 'password') PROPS_SIZE.type = 'password';
              const key = `${index}-${field}`;
              return (
                <Grid item key={key} sx={{ margin: '10px' }}>
                  <Typography variant="h6">
                    {Texts.form[field as keyof typeof Texts.form].title}
                  </Typography>
                  <TextField
                    {...PROPS_SIZE}
                    placeholder={
                      Texts.form[field as keyof typeof Texts.form].placeholder
                    }
                    {...getFieldProps(field)}
                    error={
                      touched[field as keyof typeof touched] &&
                      Boolean(errors[field as keyof typeof errors])
                    }
                    helperText={
                      touched[field as keyof typeof touched] &&
                      errors[field as keyof typeof errors]
                    }
                  />
                </Grid>
              );
            })}
            <Box
              sx={{
                margin: '20px 10px 20px 10px',
              }}
            >
              <ButtonForm variant="contained" fullWidth type="submit">
                Enviar
              </ButtonForm>
            </Box>
          </form>
        </Grid>
      </FormContainer>
    </>
  );
};

export default SeccionLogin;
