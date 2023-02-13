import * as t from '../types';

export const setLoading = (loading: boolean) => ({
  type: t.LOADING,
  payload: loading,
});

export const setError = (error: { title: string; severityError: string }) => ({
  type: t.ERROR,
  payload: {
    ...error,
  },
});
