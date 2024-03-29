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
import { logout } from '../../services/auth';
import { useEffect } from 'react';

export default function InserirPauta() {
  const [optSmModal, setOptSmModal] = useState(false);
  const [file, setFile] = useState('');

  const handleFile = e => {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    setFile(data);
  };
  const handleLogout = e => {
    logout();
    window.location.href = '/login';
  };
  useEffect(() => {
    const notifi = new window.Notification({ title: 'carregando' });
    notifi;
  }, []);

  const handleTrimestre = e => {};
  const handleCurso = e => {};
  const handleClick = async e => {
    if (!file) return alert('seleciona um ficheiro');
    const response = await api
      .post('/pauta', file)
      .then(res => {
        setOptSmModal(!optSmModal);
        if (res.status === 201) {
          console.log(file);
          setOptSmModal(false);
        }
      })
      .catch(({ response }) => {
        console.warn(file);
        alert(response.data.error);
      })
      .finally(() => {
        window.location.href = '/boletins';
      });
    return window.location.replace(
      'file:///C:/Users/us/Downloads/boletin%20(37).pdf',
    );
  };

  const toggleShow = () => setOptSmModal(!optSmModal);
  return (
    <section id="container">
      <MDBCard id="div" alignment="center">
        <div>
          <div className="d-flex flex-row mt-2 mx-12">
            <span id="text" className="h4 fw-bold  mb-0">
              CARREGUE A PAUTA E GERE BOLETINS DE TODOS OS SEUS ALUNOS, EM MENOS
              DE 5 SEGUNDOS
            </span>
          </div>
          <div className="d-flex flex-row mt-2"></div>
          <MDBFile
            label="Insira a pauta no formato  .xlsx"
            size="lg"
            id="formFileLg"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={handleFile}
          />
          <section id="div-section">
            <MDBBtn
              onClick={handleClick}
              className="mb-4 px-5"
              color="dark"
              size="lg"
            >
              Gerar Boletin
            </MDBBtn>
            <MDBBtn
              onClick={handleLogout}
              className=" mb-4 mx-4 px-5"
              color="danger"
              size="lg"
            >
              Sair
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
