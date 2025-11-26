# To-doList — Fullstack (NestJS + React)

---
## Notas do Desenvolvedor
Fui pela contra-mão !!!

Acredito que I.A é ferramenta, não muleta
Portanto, o Back-End foi construído lendo muita documentação, vendo vídeos, 
assistindo aulas, conversando com professores e colegas da área e várias
maneiras de codar como na pré-história (a qual é base para validar inúmeras
de nossas tecnologias, como o próprio FOGO)

A criação do contexto das Tasks, assim como a forte tipagem dele seguiu a 
mesma lógica para criação do Back-End. Devido ao tempo apertado, não pude dar
o mesmo luxo à criação dos componentes e a estilização

Então, saboreie todas as rotas criadas por mim, e utilize a **To-do List**

---

Projeto fullstack utilizando:
- **Backend:** NestJS + Prisma  
- **Frontend:** React + Vite  
- **Banco:** MySQL  

---

## Pré-requisitos
- Node.js  
- NPM  
- MySql

---

## Configuração
Copie o arquivo `.env.example` de **/api** e **/ui**  
Renomeie ele para `.env` e adicione as suas variáveis de ambiente

---

## Instalação

-> Na raíz do Projeto

```bash
npm install

cd api
npm install
npm install dotenv
npm install cors
npx prisma generate
npx prisma migrate dev
cd ..

cd ui
npm install
cd ..
```

---

## Start

-> Na Raíz do Projeto

```npm start```

Eu deixei algumas frases criadas automaticamente e uns mocks no migration para você testar e enxergar
a aplicação bem populada

Aguarde um pouco, e acompanhe os logs no Terminal.
O Front-End sempre carrega primeiro que o Back-End, então, reinicie a página
no navegador para fazer o fetch das tasks

---

## Insomnia
Link para uso rápido do Insomnia
[text](https://drive.google.com/file/d/1B-q6Cg58aeRfTIpCnOlx2DGHTR-9LnU-/view?usp=drive_link)

## Biblioteca utilizada (Não Citada)
Tostify

## Suporte e Dúvidas
Qualquer dúvida, entre em contato comigo pelo Linkedin
[text](https://www.linkedin.com/in/lucas-aguiar-54a72a1b7/)
Ou se tiver alguma outra rede social minha, sinta-se avontade para optar por ela

