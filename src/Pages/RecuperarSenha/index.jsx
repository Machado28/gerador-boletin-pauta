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

function SolicitarRecuperarSenha() {
	return (
		<MDBContainer className="my-5">
			<MDBCard>
				<MDBRow className="g-0">
					<MDBCol md="4" id="container">
						<MDBCardBody className="d-flex flex-column center">
							<div className="d-flex flex-row mt-2">
								<span className="h1 fw-bold mb-0">
									Recuperação de senha
								</span>
							</div>

							<h5
								className="fw-normal my-4 pb-3"
								style={{ letterSpacing: '1px' }}
							>
								Vamos lhe enviar um email para prosseguir
							</h5>

							<MDBInput
								wrapperClass="mb-4"
								label="Email address"
								id="formControlLg"
								type="email"
								size="lg"
							/>
							<MDBBtn
								className="mb-4 px-5"
								color="dark"
								size="lg"
							>
								Recuperar Senha
							</MDBBtn>

							<p
								className="mb-5 pb-lg-2"
								style={{ color: '#393f81' }}
							></p>

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

export default SolicitarRecuperarSenha;
