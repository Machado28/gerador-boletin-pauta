/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import api from '../services/api';
export default async function DeleteData(route, id) {
  const response = await api
    .delete(`${route}/${id}`)
    .then(res => {

     alert(res.data?.mensagem)
    })
    .catch(({ response }) => {
      console.warn(response);
      alert(response.data.error);
    });
}
