import React, { useState } from 'react';
import './style.css';
import {
	MDBBtn,
	MDBCard,
	MDBFile,
	MDBModal,
	MDBModalBody,
	MDBModalContent,
	MDBModalDialog,
	MDBModalHeader,
	MDBModalTitle,
} from 'mdb-react-ui-kit';

export default function InserirPauta() {
	const [optSmModal, setOptSmModal] = useState(false);

	const toggleShow = () => setOptSmModal(!optSmModal);
	return (
		<section id="container">
			<MDBCard id="div" alignment="center">
				<div>
					<div className="d-flex flex-row mt-2">
						<span id="text" className="h1 fw-bold mb-0">
							CARREGUE A PAUTA E GERE BOLETINS DE TODOS OS SEUS
							ALUNOS
						</span>
					</div>
					<div className="d-flex flex-row mt-2"></div>
					<MDBFile
						label="Insira a pauta no formato  .xlsx"
						size="lg"
						id="formFileLg"
					/>
					<section id="div-section">
						<MDBBtn
							onClick={toggleShow}
							className="mb-4 px-5"
							color="dark"
							size="lg"
						>
							Gerar Boletin
						</MDBBtn>
					</section>
				</div>
			</MDBCard>

			<MDBModal show={optSmModal} tabIndex="-4" setShow={setOptSmModal}>
				<MDBModalDialog size="fullscreen-sm-down">
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>Boletins</MDBModalTitle>
							<MDBBtn
								className="btn-close"
								color="none"
								onClick={toggleShow}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							<div id="scroll">
								<MDBCard>boletin 1</MDBCard>
								<MDBCard>boletin 2</MDBCard>
								<MDBCard>boletin 3</MDBCard>
								<MDBCard>boletin 4</MDBCard>
								<MDBCard>boletin 5</MDBCard>
								<MDBCard>boletin 5</MDBCard>
							</div>
						</MDBModalBody>
						<MDBBtn
							id="formFileLg"
							className="mb-4 px-5"
							color="primary"
							size="lg"
						>
							IMPRIMIR
						</MDBBtn>
						<MDBBtn
							id="formFileLg"
							className="mb-4 px-5"
							color="success"
							size="lg"
						>
							BAIXAR
						</MDBBtn>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</section>
	);
}
