// routes/servico.routes.js
// -----------------------------------------------------------------------------
// OBJETIVO
// -----------------------------------------------------------------------------
// Centralizar todas as rotas relacionadas ao recurso "servico" em um Router
// do Express. Assim o código do app principal fica mais limpo.
// Esse Router será montado em app.js com: app.use("/servico", servicoRouter)

import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

// -----------------------------------------------------------------------------
// LISTAR TODOS — GET /servico
// -----------------------------------------------------------------------------
router.get("/", async (_req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM servico ORDER BY id DESC");
    res.json(rows);
  } catch {
    res.status(500).json({ erro: "erro interno" });
  }
});

// -----------------------------------------------------------------------------
// MOSTRAR UM — GET /servico/:id
// -----------------------------------------------------------------------------
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ erro: "id inválido" });
  }
  try {
    const { rows } = await pool.query("SELECT * FROM servico WHERE id = $1", [id]);
    if (!rows[0]) return res.status(404).json({ erro: "não encontrado" });
    res.json(rows[0]);
  } catch {
    res.status(500).json({ erro: "erro interno" });
  }
});

// -----------------------------------------------------------------------------
// CRIAR — POST /servico
// -----------------------------------------------------------------------------
router.post("/", async (req, res) => {
  const { nome, descricao, preco, tipo } = req.body ?? {};
  const p = Number(preco);

  if (!nome || preco == null || Number.isNaN(p) || p < 0) {
    return res.status(400).json({ erro: "nome e preco (>= 0) obrigatórios" });
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO servico (nome, descricao, preco, tipo, dataCriacao, dataAtualizacao)
       VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *`,
      [nome, descricao, p, tipo]
    );
    res.status(201).json(rows[0]);
  } catch (error){
    res.status(500).json({ erro: error });
  }
});

// -----------------------------------------------------------------------------
// SUBSTITUIR — PUT /servico/:id
// -----------------------------------------------------------------------------
router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { nome, descricao, preco, tipo } = req.body ?? {};
  const p = Number(preco);

  if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ erro: "id inválido" });
  if (!nome || preco == null || Number.isNaN(p) || p < 0) {
    return res.status(400).json({ erro: "nome e preco (>= 0) obrigatórios" });
  }
  if (tipo !== "banho" && tipo !== "tosa_geral" && tipo !== "tosa_higienica" && tipo !== "corte_unhas") {
    return res.status(400).json({ erro: "tipo inválido" });
  }

  try {
    const { rows } = await pool.query(
      `UPDATE servico
       SET nome=$1, descricao=$2, preco=$3, tipo=$4, dataAtualizacao=NOW()
       WHERE id=$5 RETURNING *`,
      [nome, descricao, p, tipo, id]
    );
    if (!rows[0]) return res.status(404).json({ erro: "não encontrado" });
    res.json(rows[0]);
  } catch (error){
    res.status(500).json({ erro: error });
  }
});

// -----------------------------------------------------------------------------
// ATUALIZAR PARCIAL — PATCH /servico/:id
// -----------------------------------------------------------------------------
router.patch("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { nome, descricao, preco, tipo } = req.body ?? {};

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ erro: "id inválido" });
  }
  if (nome === undefined && descricao === undefined && preco === undefined && tipo === undefined) {
    return res.status(400).json({ erro: "envie pelo menos um campo" });
  }

  let p = null;
  if (preco !== undefined) {
    p = Number(preco);
    if (Number.isNaN(p) || p < 0) return res.status(400).json({ erro: "preco deve ser número >= 0" });
  }

  try {
    const { rows } = await pool.query(
      `UPDATE servico
       SET nome=COALESCE($1, nome),
           descricao=COALESCE($2, descricao),
           preco=COALESCE($3, preco),
           tipo=COALESCE($4, tipo),
           dataAtualizacao=NOW()
       WHERE id=$5 RETURNING *`,
      [nome ?? null, descricao ?? null, p, tipo ?? null, id]
    );
    if (!rows[0]) return res.status(404).json({ erro: "não encontrado" });
    res.json(rows[0]);
  } catch {
    res.status(500).json({ erro: "erro interno" });
  }
});

// -----------------------------------------------------------------------------
// DELETAR — DELETE /servico/:id
// -----------------------------------------------------------------------------
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ erro: "id inválido" });

  try {
    const r = await pool.query("DELETE FROM servico WHERE id=$1 RETURNING id", [id]);
    if (!r.rowCount) return res.status(404).json({ erro: "não encontrado" });
    res.status(204).end();
  } catch {
    res.status(500).json({ erro: "erro interno" });
  }
});

export default router;
