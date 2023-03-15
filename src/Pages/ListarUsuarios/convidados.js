/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import Container from './style';
import {
  MdDelete,
  MdFilePresent,
  MdFileDownload,
  MdSkipPrevious,
  MdSkipNext,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { isAdmin } from '../../services/auth';
import api from '../../services/api';
import DeleteData from '../../util/DeleteData';

const ListarUsuariosConvidados = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [page, setPage] = useState(2);
  const [clickToDelete, setClickToDelete] = useState(0);

  const HandlePageAvancar = () => {
    page <= 0 ? setPage(page + 1) : setPage(page + 1);
    console.log(page);

    GetData();
  };
  const HandlePageVoltar = () => {
    page <= 0 ? setPage(page + 1) : setPage(page + 1);
    setPage(page - 1);
    console.log(page);
    GetData();
  };
  async function GetData() {
    let rota = `/usuarios/inactivos/?page=${page}`;
    console.log(isAdmin());

    await api
      .get(rota)
      .then(res => {
        console.log(res?.data);
        console.log(rota);
        setUsuarios(res.data);
      })
      .catch(({ response }) => {
        console.warn(response);
        alert(response?.data?.error);
      });
  }

  async function HandleClickToDelete(e) {
    // eslint-disable-next-line prettier/prettier
  let id = e;
    if (!id) {
      console.log(e.target);

      alert(' o id do item é inválido! tente novamente! ');
      return;
    } else {
      console.log(id);
      const route = '/usuarios';

      await DeleteData(route, id);
      await GetData();
    }
  }

  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <h1 style={{ margin: '25px auto 25px 40px' }}>Usuarios Pendetes</h1>
      <Container>
        <thead>
          <tr>
            <th />
            <th>ID</th>
            <th>Nome</th>
            <th>Área</th>
            <th>Email</th>
            <th>Senha_has</th>
            <th>status</th>
            <th>Funcão</th>
            <th>Eliminar</th>
            <th />
          </tr>
        </thead>
        {usuarios.length ? (
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>
                  {' '}
                  <img
                    src={usuario?.avatar?.url}
                    className="rounded-circle"
                    height="10"
                    width={'60'}
                    alt="Avatar"
                    id="avatar"
                    loading="lazy"
                  />
                </td>
                <td>
                  <strong>{usuario?.id}</strong>
                </td>
                <td>
                  <strong>{usuario?.nome_completo}</strong>
                </td>
                <td>
                  <strong>{usuario?.curso?.designacao}</strong>
                </td>
                <td>
                  <strong>{usuario?.email}</strong>
                </td>
                <td>
                  <strong className="texto">{usuario?.senha_hash}</strong>
                </td>
                <td>
                  <strong
                    title={
                      usuario?.activo ? 'registo fetio' : 'registo não feito´'
                    }
                  >
                    {usuario?.activo ? 'activo' : 'pendente'}
                  </strong>
                </td>
                <td>
                  <strong>
                    {usuario?.isAdmin ? 'Administrador' : 'coordenador'}
                  </strong>
                </td>
                <td>
                  <button
                    onClick={() => HandleClickToDelete(usuario?.id)}
                    type="button"
                  >
                    <MdDelete size={25} color="#7159c1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <h1>Nenhum usuario encontrado! </h1>
        )}
        <div className="div-btn-n">
          <button className="btn-n" onClick={HandlePageVoltar} type="button">
            <MdSkipPrevious size={25} color="#7159c1" />
            voltar
          </button>
          <button className="btn-n" onClick={HandlePageAvancar} type="button">
            Próximo
            <MdSkipNext size={25} color="#7159c1" />
          </button>
        </div>
      </Container>
    </>
  );
};

export default ListarUsuariosConvidados;
