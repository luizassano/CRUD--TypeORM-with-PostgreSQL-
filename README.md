Possiveis problemas:
(TESTES) Conflito de portas entre o app e o jest:
Para resolver esse problema, é necessário criar um arquivo chamado server.ts e nele você configura todas as inicializações do seu projeto.

//Exemplo de um arquivo server.ts
import app from "./app";
import { AppDataSource } from "./data-source";

const init = async () => {
  const PORT = process.env.PORT || 3000;
  await AppDataSource.initialize();
  app.listen(PORT, () => {
    console.log(`App is running!`);
  });
}
init();
Fique a vontade para contribuir logo abaixo nerd_face
