/* eslint-disable no-undef */
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
import * as auth from '../../services/auth';
import { schema } from '../../Validations/Login';
import { toast } from 'react-toastify';
import api from '../../services/api';

function Signup(props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome_completo, setNomeCompleto] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleConfirmarSenha = e => {
    setConfirmarSenha(e.target.value);
  };
  const handleSenha = e => {
    setSenha(e.target.value);
  };
  const handleNomeCompleto = e => {
    setNomeCompleto(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    PostData({ nome_completo, email, senha, confirmarSenha });
  }

  const notify = () => {
    toast.error('Email ou Password Inválido.!');
  };

  async function PostData(data) {
    const response = await api
      .post('/signup', data)
      .then(res => {
        if (res.status === 201) {
          console.warn(res.data.mensagem);
          alert(res.data.mensagem);
          window.location.href = '/';
        }
      })
      .catch(({ response }) => {
        console.warn(response);
        alert(response.data.error);
        window.location.href = '/login';
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
                  CRIE UMA CONTA NO GERADOR DE BOLETIN IMIL
                </span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: '1px' }}
              >
                Crie a sua conta com o email com que lhe foi convidado
              </h5>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Nome Completo"
                  id="formControlLg"
                  type="nome_completo"
                  size="lg"
                  name="nome_completo"
                  onChange={handleNomeCompleto}
                  value={nome_completo}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  name="email"
                  onChange={handleEmail}
                  value={email}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Senha"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  name="senha"
                  onChange={handleSenha}
                  value={senha}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Confrimar Senha"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  name="confirmarsenha"
                  onChange={handleConfirmarSenha}
                  value={confirmarSenha}
                />

                <MDBBtn
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  type="submit"
                >
                  Criar Conta
                </MDBBtn>
              </form>
              <Link className="small text-muted" to="/login">
                Já tenho uma conta
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

export default Signup;
