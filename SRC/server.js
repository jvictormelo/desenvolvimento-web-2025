// server.js — app principal com prefixo /api
// -----------------------------------------------------------------------------
// O QUE ESTE ARQUIVO FAZ?
// 1) Carrega variáveis de ambiente (.env) para process.env
// 2) Cria um servidor HTTP com Express
// 3) Expõe uma rota raiz (GET /) que lista os endpoints disponíveis
// 4) Monta um agrupamento de rotas (Router) de serviços sob o prefixo /api/servicos
// -----------------------------------------------------------------------------
import express from "express";
import dotenv from "dotenv";
import servicoRouter from "./routes/servico.routes.js";

dotenv.config();

const app = express();

// -----------------------------------------------------------------------------
// MIDDLEWARE para interpretar JSON do corpo das requisições
// -----------------------------------------------------------------------------
app.use(express.json());

// -----------------------------------------------------------------------------
// ROTA DE BOAS-VINDAS (GET /)
// -----------------------------------------------------------------------------
app.get("/", (_req, res) => {
  res.json({
    LISTAR:     "GET /api/servico",
    MOSTRAR:    "GET /api/servico/:id",
    CRIAR:      "POST /api/servico  BODY: { nome, descricao, preco, tipo }",
    SUBSTITUIR: "PUT /api/servico/:id  BODY: { nome, descricao, preco, tipo }",
    ATUALIZAR:  "PATCH /api/servico/:id  BODY: { nome?, descricao?, preco?, tipo? }",
    DELETAR:    "DELETE /api/servico/:id",
  });
});

// -----------------------------------------------------------------------------
// MONTAGEM DO ROUTER DE SERVIÇO EM /api/servico
// -----------------------------------------------------------------------------
app.use("/api/servico", servicoRouter);

// -----------------------------------------------------------------------------
// INICIANDO O SERVIDOR
// -----------------------------------------------------------------------------
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
