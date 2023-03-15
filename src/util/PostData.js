/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import api from '../services/api';
async function PostData(route, data) {
  const response = await api
    .post(`${route}`, data)
    .then(res => {
      if (res.status === 201) alert(res.data.message);
      window.location.href = '/';
    })
    .catch(({ response }) => {
      console.warn(response);
      alert(response.data.error);
      window.location.href = '/usuarios';
      notify(response.data.error);
    });
}
