import * as Yup from 'yup';

const schema = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'Digite um nome maior.!')
    .required('O Nome é Obrigatório!'),
  email: Yup.string()
    .email('Insira um email válido.!')
    .required('O email é Obigatório.!'),
  senha: Yup.string()
    .min(8, 'Palavra passe Muito curta.!')
    .max(15, 'Palavra Passe muito Longa.!')
    .required('A Password é Obrigatória.!'),
});

export { schema };
