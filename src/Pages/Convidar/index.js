/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
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
import { toast } from 'react-toastify';
import api from '../../services/api';

function Convidar({ match }) {
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    PostData({ email, curso});
  }

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleCurso = e => {
    setCurso(e.target.value);
  };
  const { token } = match.params;

  async function PostData(data) {
    const response = await api
      .post(`/convidar/usuario`, data)
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
                  INSIRAR OS EMAIL DOS USUARIO PERMITOS PARA O USO DA APLICAÇÃO
                </span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: '1px' }}
              >
               defina quem pode acessar a aplicação
              </h5>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  name="email"
                  required
                  onChange={handleEmail}
                  value={email}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Curso"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  required
                  name="curso"
                  onChange={handleCurso}
                  value={curso}
                />

                <MDBBtn
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  type="submit"
                >
                  Convidar
                </MDBBtn>
              </form>
            
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

export default Convidar;
