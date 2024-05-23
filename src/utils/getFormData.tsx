export const getFormDataFromValuesObject = (values: { [key: string]: any } = {}) => {
  const formData = new FormData();
  Object.entries(values).forEach(([k, v]) => formData.append(k, v));
  return formData;
};
