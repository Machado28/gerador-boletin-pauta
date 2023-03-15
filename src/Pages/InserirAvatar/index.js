/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import './style.css';
import {
  MDBBtn,
  MDBCard,
  MDBFile,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from 'mdb-react-ui-kit';
import api from '../../services/api';
import { GetUser, logout } from '../../services/auth';
import { useEffect } from 'react';
import { wait } from '@testing-library/user-event/dist/utils/misc/wait';

export default function InserirAvatar() {
  const [optSmModal, setOptSmModal] = useState(false);
  const [file, setFile] = useState('');

  const handleFile = e => {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    setFile(data);
  };
  useEffect(() => {
    const notifi = new window.Notification({ title: 'carregando' });
    notifi;
  }, []);

  const handleCurso = e => {};
  const handleClick = async e => {
    if (!file) return alert('seleciona um ficheiro');
    const response = await api
      .post('/avatar', file)
      .then(res => {
        setOptSmModal(!optSmModal);
        console.log(file);
        setOptSmModal(false);
      })
      .catch(({ response }) => {
        console.warn(response.data);
        alert(response.data.error);
      })

    await api.patch("/usuarios",{avatar_id: response?.data?.id}).then( async res => {
       
      setOptSmModal(!optSmModal);
      console.log(file);
      let usuario= await GetUser()
      usuario.avatar.url=response?.data?.url
      setOptSmModal(false);
    })
    .catch(({ response }) => {
      console.warn(file);
      alert(response.data.error);
    })
  };

  const toggleShow = () => setOptSmModal(!optSmModal);
  return (
    <section id="container">
      <MDBCard id="div" alignment="center">
        <div>
          <div className="d-flex flex-row mt-2 mx-12">
            <span id="text" className="h4 fw-bold  mb-0">
              INSIRA UM AVATAR! DE PREFÊNCIA DO TIPO PASSE COM FUNDO BRANCO
            </span>
          </div>
          <div className="d-flex flex-row mt-2"></div>
          <MDBFile
            label="Insira a Avatar no formato  .png, .jpg, .jpeg"
            size="lg"
            id="formFileLg"
            accept="image"
            onChange={handleFile}
          />
          <section id="div-section">
            <MDBBtn
              onClick={handleClick}
              className="mb-4 px-5"
              color="dark"
              size="lg"
            >
              Alterar
            </MDBBtn>
          </section>
        </div>
      </MDBCard>

      <MDBModal show={optSmModal} tabIndex="-4" setShow={setOptSmModal}>
        <MDBModalDialog size="fullscreen-sm-down">
          <MDBModalContent>Processando dados...</MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </section>
  );
}
