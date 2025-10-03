# Amor em Patinhas - site de gestão de Banho e Tosa

## 1) Problema

hoje em dia os clientes e o gestor perdem muito tempo para agendar e organizar os serviços, em mensagens no whatsapp há muito tempo de espera entre o cliente e o gestor. O gestor demora para verificar os planos e o calendario para novos agendamentos, O cliente tem dificuldade em agendar novos serviços pelo tempo de espera.
Isso causa frustação por parte do gestor não conseguir organizar melhor seu caléndario e desistência por parte do cliente por falta de resposta.
No início, o foco será organizar a gestão do banho e tosa com o objetivo de melhorar o sistema de agendamentos e planos.

## 2) Atores e Decisores (quem usa / quem decide)

- Usuários principais: [clientes de petshop]
- Decisores/Apoiadores: [Gestores de petshop]

## 3) Casos de uso (de forma simples)

- Todos: [Logar/deslogar; Manter dados cadastrais]  
- Gestor: Manter - (inserir, mostrar, editar, remover) serviços (Banho, Tosa e planos(semanais e mensais)), Controle de Clientes - Manter (inserir, mostrar, editar, remover) e de Agendamento de  serviços - Manter - (inserir, mostrar, editar, remover)
- Clientes: Manter - (inserir, mostrar, editar, remover) seus dados cadastrais

## 4) Limites e suposições

- Limites: entrega final até o fim da disciplina (18-12-2025); rodar no navegador; sem serviços pagos. 
- Suposições: internet no laboratório; navegador atualizado; acesso ao GitHub; 10 min para teste rápido.
- Plano B: sem internet → rodar local e salvar em arquivo/LocalStorage; testar com 3 colegas

## 5) Hipóteses + validação

- Valor: Se o Cliente conseguir verificar os planinhos e todos os serviços e horarios do petsho, então o petshop melhora em qualidade de atendimento e mostra um produto mais completo.

- Validação: teste da plataforma com 5 clientes; alvo: Cadastro feito com sucesso e agendamento de pelo menos um serviço.

- Viabilidade: Com app no navegador (HTML/CSS/JS + armazenamento Local), Mostrar serviços e calendario leva até 1 ou menos.  
- Validação (viabilidade): medir no protótipo com 30 ações; meta: pelo menos 27 de 30 ações (9/10) em 1s ou menos.

## 6) Fluxo principal e primeira fatia

**Fluxo principal (curto):**  
 1) Cliente realiza seu cadastro/login
 2) Clica em "Agendar serviço"
 3) Sistema mostra os serviços disponiveis 
 4) Cliente escolhe o serviço que deseja
 5) Sistema mostra os dias e horários disponiveis
 6) Cliente escolhe a data e horário que deseja
 7) O sistema mostra a data e horário e confirma a ação
 8) Cliente tem a opção de voltar ao home, escolher mais serviços e adicionar ao seu carrinho ou finalizar o carrinho e ir para a pagina de compras

**Primeira fatia vertical (escopo mínimo):**  
Inclui: uma tela para escolha de serviços, escolher o plano desejado, armazenar o serviço no carrinho, mostrar o Serviço escolhido  
Critérios de aceite:
- Escolha do serviço - aparece no carrinho com o valor
- Finalizar compras - leva o cliente para a aba de pagamento

## 7) Esboços de algumas telas (wireframes)
<!-- Vale desenho no papel (foto), Figma, Excalidraw, etc. Não precisa ser bonito, precisa ser claro.
     EXEMPLO de telas:
     • Login
     • Lista de chamados (ordem + tempo desde criação)
     • Novo chamado (formulário simples)
     • Painel do professor (atender/encerrar)
     EXEMPLO de imagem:
     ![Wireframe - Lista de chamados](img/wf-lista-chamados.png) -->
[Links ou imagens dos seus rascunhos de telas aqui]
# Teste de imagem

![Exemplo de imagem](images/Group41369.png)


## 8) Tecnologias
<!-- Liste apenas o que você REALMENTE pretende usar agora. -->

### 8.1 Navegador
**Navegador:** HTML/CSS/JS/Bootstrap  
**Armazenamento local (se usar):**  
**Hospedagem:** 

### 8.2 Front-end (servidor de aplicação, se existir)
- **Front-end (servidor):** React
- **Hospedagem:** GitHub Pages

### 8.3 Back-end (API/servidor, se existir)
- **Back-end (API):** JavaScript com Express
- **Banco de dados:** PostgreSQL
- **Deploy do back-end:** Estudar onde irei fazer

## 9) Plano de Dados (Dia 0) — somente itens 1–3
<!-- Defina só o essencial para criar o banco depois. -->

### 9.1 Entidades

- Usuario — pessoa que uso o sistema (Cliente, Gestor)
- Compras — lista de compras de serviços
- Serviços - pedidos que serão inseridos no site


### 9.2 Campos por entidade

### Usuario
| Campo           | Tipo                          | Obrigatório | Exemplo            |
|-----------------|-------------------------------|-------------|--------------------|
| id              | número                        | sim         | 1                  |
| nome            | texto                         | sim         | "Carlinhos"        |
| email           | texto                         | sim (único) | "cln@exemplo.com"  |
| senha_hash      | texto                         | sim         | "$2a$10$..."       |
| tipo            | número (0=cliente, 1=gestor)  | sim         | 0                  |
| dataCriacao     | data/hora                     | sim         | 2025-08-20 14:30   |
| dataAtualizacao | data/hora                     | sim         | 2025-08-20 15:10   |2025-08-20 15:10   |

### Compra
| Campo           | Tipo               | Obrigatório | Exemplo                 |
|-----------------|--------------------|-------------|-------------------------|
| id              | número             | sim         | 2                       |
| usuario_id      | número (fk)        | sim         | 1                       |
| texto           | texto              | sim         | "Descrição da compra"   |
| status          | boolean            | sim         | false                   |
| dataCriacao     | data/hora          | sim         | 2025-08-20 14:35        |
| dataAtualizacao | data/hora          | sim         | 2025-08-20 14:50    

#### Serviço
| Campo           | Tipo        | Obrigatório | Exemplo             |
|-----------------|-------------|-------------|---------------------|
| id              | número      | sim         | 1                   |
| nome            | texto       | sim         | "Banho"             |
| descricao       | texto       | não         | "Banho completo"    |
| preco           | decimal     | sim         | 40.00               |
| tipo            | texto (chk) | sim         | "Banho"             |
| dataCriacao     | data/hora   | sim         | 2025-08-20 14:30    |
| dataAtualizacao     | data/hora   | sim         | 2025-08-20 15:10    |

### 9.3 Relações entre entidades

- Um **usuário** (cliente) tem muitas **compras** (1 → N).  
- Uma **compra** pertence a um **usuário** (N → 1).  
- Os **serviços** poderão ser associados futuramente às compras (N → N, via tabela intermediária).  

### 9.4 Modelagem do banco de dados no POSTGRES

```sql

SET client_encoding = 'UTF8';

CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash TEXT NOT NULL,
    tipo INT NOT NULL CHECK (tipo IN (0,1)),
    dataCriacao TIMESTAMP DEFAULT NOW(),
    dataAtualizacao TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Servico (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(8,2) NOT NULL,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('banho','tosa_geral','tosa_higienica','corte_unhas')),
    dataCriacao TIMESTAMP DEFAULT NOW(),
    dataAtualizacao TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Plano (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(8,2) NOT NULL,
    dataCriacao TIMESTAMP DEFAULT NOW(),
    dataAtualizacao TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Carrinho (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    servico_id INT,
    plano_id INT,
    status VARCHAR(20) DEFAULT 'pendente' CHECK (status IN ('pendente','concluida','cancelada')),
    dataCriacao TIMESTAMP DEFAULT NOW(),
    dataAtualizacao TIMESTAMP DEFAULT NOW(),
	FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (servico_id) REFERENCES servico(id) ON DELETE SET NULL,
    FOREIGN KEY (plano_id) REFERENCES plano(id) ON DELETE SET NULL
);

CREATE TABLE Compras_Itens (
    id SERIAL PRIMARY KEY,
    compra_id INT NOT NULL REFERENCES Carrinho(id) ON DELETE CASCADE,
    servico_id INT REFERENCES Servico(id), 
    plano_id INT REFERENCES Plano(id),     
    quantidade INT DEFAULT 1,
    preco_unitario DECIMAL(8,2) NOT NULL,
    CONSTRAINT chk_item CHECK (
        (servico_id IS NOT NULL AND plano_id IS NULL) OR
        (plano_id IS NOT NULL AND servico_id IS NULL)
    )
);

INSERT INTO Servico (nome, descricao, preco, tipo)
VALUES ('Banho', 'Banho', 40.00, 'banho');

INSERT INTO Servico (nome, descricao, preco, tipo)
VALUES ('Tosa Higiênica', 'Tosa padrão', 59.90, 'tosa_higienica');


INSERT INTO public.usuario (nome, email, senha_hash, tipo)
VALUES
('Cliente Teste',      'cliente@teste.com', '$2b$12$ExemploHashSenha', 0),
('Gestor Teste',       'gestor@teste.com',  '$2b$12$ExemploHashSenha', 1);


INSERT INTO public.servico (nome, descricao, preco, tipo)
VALUES
('Banho',              'Banho completo no pet', 40.00, 'banho'),
('Tosa Geral',         'Tosa completa', 70.00, 'tosa_geral'),
('Tosa Higiênica',     'Tosa higiênica', 50.00, 'tosa_higienica'),
('Corte de Unhas',     'Corte de unhas do pet', 20.00, 'corte_unhas');


INSERT INTO public.plano (nome, descricao, preco)
VALUES
('Plano Mensal',      'Acesso aos serviços mensalmente', 150.00),
('Plano Quinzenal',   'Acesso aos serviços a cada 15 dias', 90.00);


INSERT INTO public.carrinho (usuario_id, servico_id, plano_id, status)
VALUES
(1, 1, NULL, 'pendente'),  
(1, NULL, 1, 'pendente');  


INSERT INTO public.compras_itens (compra_id, servico_id, plano_id, quantidade, preco_unitario)
VALUES
(1, 1, NULL, 1, 40.00),
(2, NULL, 1, 1, 150.00);

```
---

## 🔧 Como rodar localmente (passo a passo)

### 1) Pré-requisitos
- **Node.js** instalado (versão LTS recomendada)  
- **PostgreSQL** rodando localmente

### 2) Criar arquivo `.env` na raiz do projeto
```env
# Porta da API
PORT=3000

# Postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_DATABASE=amor_em_patinhas
```

### 3) Instalar dependências e iniciar
```bash
npm install
npm run dev   # ou: node server.js / npm start (conforme seu package.json)
```

### 4) Criar as tabelas
- Abra o **psql** (ou pgAdmin) e execute o script SQL da seção **9.4**.  
- Ajuste usuário/senha/porta conforme o seu Postgres.


