/* eslint-disable no-undef */
import React from 'react';
import {
  MDBBadge,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBInput,
  MDBInputGroup,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';
import { Divider } from '@mui/material';
import { useState } from 'react';
import { GetUser, logout, RemoveUser } from '../../services/auth';
import { Link, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from '../../Components/Sidebar';

export default function App({ dadosUsuario = GetUser(), mostrar }) {
  const [usuario, setUsuario] = useState();

  useEffect(() => {
    setUsuario(dadosUsuario);
  }, []);

  const handleLogout = e => {
    logout();
    RemoveUser();
    window.location.href = '/login';
  };
  return (
    <header>
      {/* Main Navigation */}
      <MDBNavbar expand="lg" light className="bg-white">
        {/* Container wrapper */}
        <MDBContainer fluid>
          {/* Search form */}

          {/* Right links */}
          <MDBNavbarNav className="d-flex flex-row" right fullWidth={false}>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBNavbarLink className="me-3 me-lg-0">
                  <MDBDropdownToggle tag="a" className="hidden-arrow">
                    {usuario?.nome_completo}
                  </MDBDropdownToggle>
                </MDBNavbarLink>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Divider>
                      <MDBIcon flag="admin-user" />
                      {usuario?.isAdmin ? 'Administrador' : 'Coordenador'}
                      <MDBIcon
                        fas
                        icon="check"
                        color="success"
                        className="ms-2"
                      />
                    </Divider>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Divider></Divider>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            {/* Avatar */}
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBNavbarLink className="d-flex align-items-center">
                  <MDBDropdownToggle tag="a" className="hidden-arrow">
                    <img
                      src={usuario?.avatar.url}
                      className="rounded-circle"
                      height="40"
                      width={'40'}
                      alt="Avatar"
                      loading="lazy"
                    />
                  </MDBDropdownToggle>
                </MDBNavbarLink>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Divider href="#">Eu</Divider>
                  </MDBDropdownItem>
                  <MDBDropdownItem link="/actualizar/senha">
                    <Link
                      onClick={() =>
                        (window.location.href = '/actualizar/senha')
                      }
                      to="/actualizar/senha"
                    >
                      Alterar Senha
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem link="/upload">
                    <Link
                      onClick={() => (window.location.href = '/upload')}
                      to="/upload"
                    >
                      Alterar foto de perfil
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link
                      onClick={() => {
                        logout(), RemoveUser();
                      }}
                      to="/actualizar/senha"
                    >
                      Terminar sessão
                    </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

      {/* Heading */}
    </header>
  );
}
