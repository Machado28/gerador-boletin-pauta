/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function RecuperarSenha({ match }) {
  const [novaSenha, setNovaSenha] = useState('');
  const [ConfirmarnovaSenha, setConfirmarNovaSenha] = useState('');

  const OnSave = () => {};
  const { token } = match.params;

  async function PostData(data) {
    const response = await api
      .post(`/recuperar/senha/${token}`, {
        params: {
          token,
        },
        data: {
          novaSenha: '123445',
          confimarNovaSenha: '123445',
        },
      })
      .then(res => {
        if (res.status === 200) alert(res.data.message);
      })
      .catch(({ response }) => {
        console.warn(response);
        alert(response.data.error);

        notify(response.data.error);
      });
  }

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://scontent.flad3-1.fna.fbcdn.net/v/t39.30808-6/301221951_443196541169332_766271657779994429_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JFOmMz2qUYgAX-RtGD2&_nc_ht=scontent.flad3-1.fna&oh=00_AfA00nENa5EHXgh4ebIdXpH1JillYJRJo0hpG7uMH2t1Mg&oe=63FE2C9F"
              alt="imagem do makarenco"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <span className="h1 fw-bold mb-0">
                  CRIE UMA NOVA SENHA MAIS SEGURA E FÁCIL DE LEMBRARES
                </span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: '1px' }}
              >
                evite palavras que se encotram no dicionário
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Nova Senha"
                id="formControlLg"
                type="password"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="confirmar senha"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBBtn className="mb-4 px-5" color="success" size="lg">
                Salvar
              </MDBBtn>
              <Link className="small text-muted" to="/login">
                inciar sessão
              </Link>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}></p>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  termos de uso.
                </a>
                <a href="#!" className="small text-muted">
                  Politica de Privacidade
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default RecuperarSenha;
