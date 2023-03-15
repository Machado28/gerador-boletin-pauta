import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import InserirPauta from '../Pages/InserirPauta';
import Login from '../Pages/Login';
import RecuperarSenha from '../Pages/RecuperarSenha/recuperar';

import SolicitarRecuperarSenha from '../Pages/RecuperarSenha';
import { AdminRoute, PrivateRoute } from './data/routes';
import AlterarSenha from '../Pages/RecuperarSenha/Alterar';
import Signup from '../Pages/Signup';
import Convidar from '../Pages/Convidar';
import ListarBoletins from '../Pages/ListarBoletins';
import ListarUsuarios from '../Pages/ListarUsuarios';
import ListarUsuariosRegistados from '../Pages/ListarUsuarios/registados';
import ListarUsuariosConvidados from '../Pages/ListarUsuarios/convidados';
import InserirAvatar from '../Pages/InserirAvatar';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={InserirPauta}></PrivateRoute>
        <PrivateRoute
          path="/boletins"
          component={ListarBoletins}
        ></PrivateRoute>
        <PrivateRoute path="/upload" component={InserirAvatar}></PrivateRoute>
        <AdminRoute path="/convidar" component={Convidar}></AdminRoute>
        <AdminRoute
          path="/usuarios/registados"
          component={ListarUsuariosRegistados}
        ></AdminRoute>
        <AdminRoute
          path="/usuarios/convidados"
          component={ListarUsuariosConvidados}
        ></AdminRoute>
        <AdminRoute path="/usuarios" component={ListarUsuarios}></AdminRoute>
        <Route path="/login" component={Login}></Route>
        <Route
          path="/solicitacao/recuperar/senha"
          component={SolicitarRecuperarSenha}
        ></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route
          path="/recuperar/senha/:token"
          component={RecuperarSenha}
        ></Route>
        <PrivateRoute
          path="/actualizar/senha"
          component={AlterarSenha}
        ></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
