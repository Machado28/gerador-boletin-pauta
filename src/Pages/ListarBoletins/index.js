/* eslint-disable no-const-assign */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import Container from './style';
import {
  MdDelete,
  MdFilePresent,
  MdFileDownload,
  MdSkipNext,
  MdSkipPrevious,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { isAdmin } from '../../services/auth';
import api from '../../services/api';
import DeleteData from '../../util/DeleteData';

const ListarBoletins = () => {
  const [boletins, setBoletins] = useState([]);
  const [page, setPage] = useState(2);
  const [clickToDelete, setClickToDelete] = useState(0);

  const HandlePageAvancar = () => {
    page <= 0 ? setPage(page + 1) : setPage(page + 1);
    console.log(page);

    GetData();
  };

  async function HandleClickToDelete(e) {
    // eslint-disable-next-line prettier/prettier
  let id = e;
    if (!id) {
      console.log(e.target);

      alert(' o id do item é inválido! tente novamente! ');
      return;
    } else {
      console.log(id);
      const route = '/boletins';

      await DeleteData(route, id);
      await GetData();
    }
  }
  const HandlePageVoltar = () => {
    page <= 0 ? setPage(page + 1) : setPage(page + 1);
    setPage(page - 1);
    console.log(page);
    GetData();
  };

  async function GetData() {
    let rota = isAdmin()
      ? `/boletins/admin/?page=${page}`
      : `/boletins/?page=${page}`;
    console.log(isAdmin());

    await api
      .get(rota)
      .then(res => {
        console.log(res?.data);
        console.log(rota);
        setBoletins(res.data);
      })
      .catch(({ response }) => {
        console.warn(response);
        alert(response?.data?.error);
      });
  }

  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <h1 style={{ margin: '25px auto 25px 40px' }}>Boletins</h1>
      <Container>
        <thead>
          <tr>
            <th></th>
            <th>Coordenador</th>
            <th>ID</th>
            <th>Curso</th>
            <th>Turma</th>
            <th>Descarregar</th>
            <th></th>
            <th>Total</th>
            <th></th>
            <th>Eliminar</th>
            <th />
          </tr>
        </thead>
        {boletins.length ? (
          <tbody>
            {boletins.map(boletin => (
              <tr>
                <td>
                  {' '}
                  <img
                    src={boletin?.usuario?.avatar?.url}
                    className="rounded-circle"
                    alt="Avatar"
                    id="avatar"
                    loading="lazy"
                  />
                </td>
                <td>
                  <strong>{boletin?.usuario.nome_completo}</strong>
                </td>
                <td>
                  <strong>{boletin?.id}</strong>
                </td>
                <td>
                  <strong>{boletin?.usuario?.curso?.designacao}</strong>
                </td>
                <td>
                  <strong>I10CM</strong>
                </td>
                <td>
                  <Link
                    onClick={() =>
                      window.location.replace(
                        `http://localhost:4444/download/?path=${boletin?.path}`,
                      )
                    }
                  >
                    <MdFileDownload fontSize={25} size={25} />
                  </Link>
                </td>
                <th></th>
                <td>
                  <strong>{boletin?.quantidade}</strong>
                </td>
                <td></td>
                <td>
                  <button
                    onClick={() => HandleClickToDelete(boletin?.id)}
                    id={boletin?.id}
                    type="button"
                  >
                    <MdDelete size={25} color="#7159c1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <h1>SEM BOLETINS </h1>
        )}
        <div>
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

export default ListarBoletins;
