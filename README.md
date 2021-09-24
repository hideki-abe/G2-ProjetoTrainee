# G2-ProjetoTrainee
Projeto trainee EloJr
Participantes: Lucas Hideki, Paulo Vitor e Pedro Henrique

- O projeto a ser desenvolvido consiste em uma aplicação web de
funcionalidades simples, porém desafiadoras para iniciantes, e tem como objetivo
capacitar os candidatos a implementarem funcionalidades básicas de uma aplicação,
como autenticação (login), operações em bancos de dados e consumo de APIs
externas ao sistema.
- Os usuários dessa aplicação deverão se cadastrar fornecendo nome, e-mail,
senha e, opcionalmente, uma foto de perfil. Após o cadastro, o usuário pode fazer
login usando o e-mail e senha informados. Depois de logado na aplicação, a
criatividade de vocês entra em cena: são livres para implementar a funcionalidade
que quiserem (boa hora para usar alguma API para fazer qualquer coisa).
Implementação
- A aplicação final deverá ser seguir os seguintes critérios:
  - Quatro páginas:
  - Login do usuário;
  - Cadastro do usuário;
  - Home, exibida somente quando o usuário está autenticado;
  - Perfil do usuário, na qual ele pode alterar sua foto;
- No cadastro, o usuário deve informar um e-mail válido e sua senha, que serão
 guardados no banco de dados. Se possível, salve a senha na forma de um hash
(sugestão: utilize bcrypt). Não é boa prática guardar senhas diretamente no
banco de dados. Também, é preciso que o novo usuário informe seu nome e,
opcionalmente, faça um upload de uma imagem para seu perfil;
- Ao realizar o login, o usuário, já cadastrado, deverá inserir seu e-mail e sua
senha de acesso.
- Na página home (exibida somente para usuários autenticados), você deve
consumir uma API de sua escolha e exibir dados na tela.
- Na página do usuário, devem ser mostradas as informações nome, e-mail, de
forma travada (inalterável) e a foto do usuário, com a opção de alterar ou
inserir foto.
