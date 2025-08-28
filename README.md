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
<!-- Pense “Entrada → Processo → Saída”.
     EXEMPLO de Fluxo:
     1) Aluno faz login
     2) Clica em "Pedir ajuda" e descreve a dúvida
     3) Sistema salva e coloca na fila
     4) Lista mostra ordem e tempo desde criação
     5) Professor encerra o chamado
     EXEMPLO de 1ª fatia:
     Inclui login simples, criar chamado, listar em ordem.
     Critérios de aceite (objetivos): criar → aparece na lista com horário; encerrar → some ou marca "fechado". -->
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
- [escolha do serviço - aparece no carrinho com o valor]
- [finalizar compras - leva o cliente para a aba de pagamento]

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
- **Banco de dados:** MySql ou PostgreSQL
- **Deploy do back-end:** Estudar onde irei fazer

## 9) Plano de Dados (Dia 0) — somente itens 1–3
<!-- Defina só o essencial para criar o banco depois. -->

### 9.1 Entidades
<!-- EXEMPLO:
     - Usuario — pessoa que usa o sistema (aluno/professor)
     - Chamado — pedido de ajuda criado por um usuário -->
- [Entidade 1] — [o que representa em 1 linha]
- [Entidade 2] — [...]
- [Entidade 3] — [...]

### 9.2 Campos por entidade
<!-- Use tipos simples: uuid, texto, número, data/hora, booleano, char. -->

### Usuario
| Campo           | Tipo                          | Obrigatório | Exemplo            |
|-----------------|-------------------------------|-------------|--------------------|
| id              | número                        | sim         | 1                  |
| nome            | texto                         | sim         | "Carlinhos"        |
| email           | texto                         | sim (único) | "ana@exemplo.com"  |
| senha_hash      | texto                         | sim         | "$2a$10$..."       |
| tipo            | número (0=cliente, 1=gestor)  | sim         | 0                  |
| dataCriacao     | data/hora                     | sim         | 2025-08-20 14:30   |
| dataAtualizacao | data/hora                     | sim         | 2025-08-20 15:10   |

### Compra
| Campo           | Tipo               | Obrigatório | Exemplo                 |
|-----------------|--------------------|-------------|-------------------------|
| id              | número             | sim         | 2                       |
| Usuario_id      | número (fk)        | sim         | 8f3a-...                |
| texto           | texto              | sim         | "Erro ao compilar"      |
| status          | boolean            | sim         | 0                       |
| dataCriacao     | data/hora          | sim         | 2025-08-20 14:35        |
| dataAtualizacao | data/hora          | sim         | 2025-08-20 14:50        |

### 9.3 Relações entre entidades
<!-- Frases simples bastam. EXEMPLO:
     Um Usuario tem muitos Chamados (1→N).
     Um Chamado pertence a um Usuario (N→1). -->
- Um cliente tem muitos pedidos. (1→N)
- Um pedido pertence a um usuario. (N→1)
