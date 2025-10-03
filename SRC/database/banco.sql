
SET client_encoding = 'UTF8';

CREATE TABLE IF NOT EXISTS Usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash TEXT NOT NULL,
    tipo INT NOT NULL CHECK (tipo IN (0,1)),
    dataCriacao TIMESTAMP DEFAULT NOW(),
    dataAtualizacao TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS Servico (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(8,2) NOT NULL,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('banho','tosa_geral','tosa_higienica','corte_unhas')),
    dataCriacao TIMESTAMP DEFAULT NOW(),
    dataAtualizacao TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS Plano (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(8,2) NOT NULL,
    dataCriacao TIMESTAMP DEFAULT NOW(),
    dataAtualizacao TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS Carrinho (
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

CREATE TABLE IF NOT EXISTS Compras_Itens (
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