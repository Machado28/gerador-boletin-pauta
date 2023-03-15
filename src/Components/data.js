/* eslint-disable prettier/prettier */
import { isAdmin, UserLogado } from '../services/auth';
/* eslint-disable prettier/prettier */
const dataMenu_admin = [
  {
    title: 'convidar um usuario',
    path: '/convidar',
  },
  {
    title: 'usuarios Convidados',
    path: '/usuarios/convidados',
  },
  { title: 'usuarios Registados', path: '/usuarios/registados' },
  { title: 'Listar Boletins', path: '/boletins' },
  { title: 'Curso com mais Boletins', path: '/cursos/maior/boletin' },
];

const dataMenu_usuario= [
    {
      title: 'Gerar Boletins',
      path: '/',
    },
    {
      title: 'Meus Boletins',
      path: '/boletins',
    },
  ];


const  dataMeu= isAdmin() ?dataMenu_admin:dataMenu_usuario
  export{dataMeu}
  