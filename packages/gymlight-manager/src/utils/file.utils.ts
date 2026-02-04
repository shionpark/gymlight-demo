export function createFormData<T extends Record<string, any>>(data: T): FormData {
  const form = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (value instanceof File || value instanceof Blob) {
        form.append(key, value);
      } else {
        form.append(key, String(value));
      }
    }
  });

  return form;
}

export const fileHeaders = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};
