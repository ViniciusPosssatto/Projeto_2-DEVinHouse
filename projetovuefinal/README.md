# projetovuefinal

<h3>Descrição das ferramentas</h3>
<p>Criar uma página que contenha cadastro e listagem de itens e pessoas, estatística das coisas cadastradas e funcionamento de empréstimo de itens. Tudo isso realizado atavés de uma autenticação realizada através do login de um usuário admin.</p>

Para desenvolver a aplicação foram utilizadas as tecnologias, conforme sugeridas:

- Vue Router - para gerenciamento de rotas.
- Vuex - para gerenciamento de estado.
- Vue Gravatar - para gerenciar as fotos de perfil.
- Vee-validate - para validações de fomulários.
- Vue-toast-notification - para avisos de erros ou sucesso nos cadastros.
- Vue-the-mask - para mascarar alguns campos de input (telefone, cep).
- Vue-loading-overlay e animate.css - animações de loading e transições entre páginas.
- Axios - para consulta a API ViaCEP no cadastro de endereço.
- Utilizar o localStorage do navegador para guardar as informações cadastradas.
- Github para versionamento de código.

<h3>Descrição dos componentes do projeto</h3>

O projeto está montado em formato vue, onde há uma sidebar e uma navbar fixas e o conteúdo da páginas se concentra no centro da tela.
As páginas consistem em:
- Página de login = campos de email e senha para login, botão para logar com facebook ou google e esqueci a senha com aviso que não está funcionando e botão para cadastro de conta que abre um modal com validação de senha com mais de 8 caracteres e verificação de email (caso já exista o mesmo cadastrado). Ao final um token com o id do usuário é inserido no localStorage e ele é redirecionado para a tela de boas vindas. Detalhe que a sidebar e navbar (assim como os demais componentes) só ficam disponíveis após o login ser executado com sucesso.
- Home = tela de boas vindas com algumas informações e dicas (a maior parte é texto para ocupar espaço).
- Inventário = componente formado por cards e uma barra de pesquisa (busca através do nome do livro). Os primeiros cards mostram as estatísticas dos cadastros e a segunda parte dos cards são os livros cadastrados, e quando clicado em cima do item, abre um modal com suas respectivas informações e botões que fazem edição ou exclusão do item.
- Cadastro de itens = formulário contendo dados sobre o livro cadastrado e validação simples de required para os campos.
- Empréstimo = listagem dos itens em uma tabela com interação sobre cada linha, onde ao clicar abre modal com informações sobre o livro com um dropDown para selecionar uma pessoa que deseja fazer o empréstimo ou devolução do item.
- Cadastro de colaboradores = formulário para cadastro de pessoas que estão interessadas no empréstimo de itens, com validações simples required e mais específicas como os campos de nome (nome completo), email (email válido), CEP (conter 8 dígitos) e telefone (mínimo 10 caracteres).
- Listagem de colaboradores = componente formado por uma barra de pesquisa (busca através do nome da pessoa) e cards com algumas informações sobre a pessoa, tendo como opção clicar no card e abrir modal com todas as informações sobre aquele colaborador e poder fazer a edição ou exclusão do mesmo.
----
Componentes adicionais:
- Sidebar = possui os links para navegação entre os componentes e o botão de logout, que retira o token do localStorage e a atutenticação do usuário, redirecionando para a tela de login.
- Navbar = possui o botão que abre e fecha a sidebar, nome da página em que está navegando e o nome do usuário e foto de avatar.
---

Detalhes adicionais:
- Foram feitas adpatações nos componentes para terem boa responsividade e se ajustarem a telas menores, inclusive de celulares.
- Parti do pressuposto de que, sem o login, não há como entrar no site e sem a autenticação não há como navegar entre os componentes. Após isso, criei as telas, a parte visível do html e css para que já pudesse adicionar os v-models e capturar os campos de input e seguir para a lógica de criação das listas de itens e colaboradores. Tendo as listas criadas fui para a criação dos cards e listagem dos itens e colaboradores. Por último, criei os modais de detalhes dos dados e após isso acrescentei as lógicas de edição e exclusão. Para finalizar adicionei as responsividades, comentários e limpei os códigos que não estavam sendo utilizados.

<h3>Considerações</h3>

A proposta do projeto atendeu muito bem aos conteúdos passados em aula desde o início do módulo. Foram utilizadas noções de html, javaScript e css além do conteúdo requerido do vue.
Depois de muita revisão, pesquisa e testes o projeto começou a tomar forma e seguiu sendo implementado embasado na lógica de construção que criei.
Para finalizar, o projeto pôs a prova meus conhecimentos e fez com que eu buscasse aprender e entender os conceitos que não haviam ficado claros. Ao final, a prática e a teoria já faziam parte da minha lógica, o entendimento e construção foi ficando automático.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
