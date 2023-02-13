import * as t from '../types';

export const setLoginData =
  (values: { user: string; password: string }) =>
  async (
    // eslint-disable-next-line no-unused-vars
    dispatch: (arg0: {
      type: string;
      payload:
        | string
        | boolean
        | undefined
        | { title: string | undefined; severityError: string };
    }) => void
  ) => {
    dispatch({
      type: t.LOADING,
      payload: true,
    });

    setTimeout(() => {
      document.cookie = `user=${values.user}`;
      document.cookie = `pass=${values.password}`;
      window.location.href = '/employees';
      dispatch({
        type: t.LOADING,
        payload: false,
      });
    }, 5000);
  };

export const singUpLogin =
  () =>
  async (
    // eslint-disable-next-line no-unused-vars
    dispatch: (arg0: {
      type: string;
      payload:
        | string
        | boolean
        | undefined
        | { title: string | undefined; severityError: string };
    }) => void
  ) => {
    dispatch({
      type: t.LOADING,
      payload: true,
    });

    setTimeout(() => {
      document.cookie = `user=`;
      document.cookie = `pass=`;
      dispatch({
        type: t.LOADING,
        payload: false,
      });
    }, 5000);
  };
