## CustomerSuccess Balancing


Este desafio consiste em um sistema de balanceamento entre clientes e Customer Success (gerentes). Os gerentes são os Gerentes de Sucesso, são responsáveis pelo acompanhamento estratégico dos clientes.

Dependendo do tamanho do cliente - aqui nos referimos ao tamanho da empresa - nós temos que colocar gerentes mais experientes para atendê-los.

Um gerente pode atender mais de um cliente e além disso os gerentes também podem sair de férias, tirar folga, ou mesmo ficarem doentes. É preciso levar esses critérios em conta na hora de rodar a distribuição.

Dado este cenário, o sistema distribui os clientes com os gerentes de capacidade de atendimento mais próxima (maior) ao tamanho do cliente.

**Exemplo:**

Se temos 6 clientes com os seguintes níveis: 20, 30, 35, 40, 60, 80 e dois gerentes de níveis 50 e 100, o sistema deveria distribui-los da seguinte forma:

- 20, 30, 35, 40 para o gerente de nível 50
- 60 e 80 para o gerente de nível 100

Sendo `n` o número de gerentes, `m` o númro de clientes e `t` o número de abstenções de gerentes, calcular quais clientes serão atendidos por quais gerentes de acordo com as regras apresentadas.


**Observações:**

- Todos os gerentes têm níveis diferentes /ok
- Não há limite de clientes por gerente /ok
- Um cliente pode ficar sem ser atendido
- Clientes podem ter o mesmo tamanho /ok
- 0 < n < 1.000 /ok
- 0 < m < 1.000.000 /ok
- 0 < id do gerente < 1.000 /ok
- 0 < id do cliente < 1.000.000 /ok
- 0 < nível do gerente < 10.000 /ok
- 0 < tamanho do cliente < 100.000 /ok
- Valor máximo de t = n/2 arredondado para baixo /ok

# Input Format

A função `customerSuccessBalancing()` recebe 3 parâmetros:

- id e nivel da experiencia do gerente
- id e nivel de experiência dos Clientes
- ids dos CustomerSuccess indisponíveis


# Output Format

O resultado esperado deve ser o id do gerente que atende mais clientes. Com esse valor a empresa poderá fazer um plano de ação para contratar mais gerente's de um nível aproximado.

Em caso de empate retornar 0.

**Exemplo:** No input de exemplo, gerente's 2 e 4 estão de folga. O gerente 1 vai atender os clientes de tamanho até 60, portanto clientes 2, 4, 5, 6 enquanto o gerente 3 vai atender os clientes 1 e 3.

Para este exemplo o retorno deve ser o id do 1 que é o gerente que atende 4 clientes:

```
1
```

## Como rodar os testes

No terminal, execute os comandos:

```bash
cd javascript
yarn
yarn test
```

Ou usando o NPM:

```bash
cd javascript
npm install
npm test
```
