# Sistema de Vendas - Front-End

Este é o **front-end** de um sistema de vendas, desenvolvido com **Next.js** e integrado a uma API para gerenciamento de produtos e vendas. O objetivo é facilitar a visualização e gestão de produtos, realizar vendas e controlar o estoque de forma eficiente.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização server-side (SSR) e otimização da experiência do usuário.
- **TypeScript**: Garantia de tipos estáticos, proporcionando maior segurança e produtividade durante o desenvolvimento.
- **Axios**: Biblioteca para requisições HTTP, utilizada na comunicação com a API para gerenciar produtos e vendas.
- **React**: Biblioteca principal para a construção da interface de usuário.
- **React Testing Library & Jest**: Ferramentas para testes unitários dos componentes.
- **Styled Components**: Para estilização de componentes utilizando JavaScript.

## Funcionalidades

- **Listagem de Produtos**: Visualização de todos os produtos disponíveis no sistema.
- **Cadastro de Produtos**: Criação, edição e exclusão de produtos.
- **Cadastro de Vendas**: Realização de vendas, com associação de produtos e controle do estoque.
- **Histórico de Vendas**: Exibição das vendas realizadas, com detalhes sobre os produtos, quantidades e valores totais.

## Hooks Utilizados

Os principais hooks utilizados no sistema são:

- **useState**: Para gerenciamento de estado local, como armazenar dados de produtos e vendas.
- **useEffect**: Para buscar dados da API ao carregar a página ou após mudanças no estado.

## Integração com a API

A integração com a API é realizada através do arquivo `services/api.ts`. O sistema se comunica com a API para:

- Obter informações sobre os produtos.
- Criar, editar ou excluir produtos.
- Registrar novas vendas.

### Endpoints da API

- **GET /products**: Listagem de produtos. Também suporta a criação e edição de produtos.
- **POST /sales**: Registro de novas vendas.

#### Exemplo de Código para Obter Produtos:

```typescript
// Função para obter todos os produtos
export const getProducts = async (name?: string): Promise<Product[]> => {
  try {
    const response = await api.get('/products', { params: { name } });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};
```

## Decisões de Arquitetura

- **Uso do Next.js**: Escolhemos o Next.js por sua capacidade de renderização do lado servidor (SSR), o que melhora a performance e a indexação nos motores de busca. Além disso, ele oferece recursos como roteamento e otimização de imagens, facilitando o desenvolvimento.
  
- **Uso de TypeScript**: A adoção de TypeScript garante a segurança do código com tipos fortes, o que ajuda a evitar erros em tempo de execução e aumenta a produtividade dos desenvolvedores.
  
- **Comunicação com a API**: Utilizamos o Axios para realizar as requisições HTTP devido à sua simplicidade e flexibilidade, além de permitir um controle fácil sobre os erros e a manipulação de dados.
  
- **Componentes Reutilizáveis**: A divisão da interface em componentes reutilizáveis (como `ProductCard`, `SalesTable`) garante um código mais organizado e de fácil manutenção.

## Testes

Os testes são realizados utilizando **Jest** e **React Testing Library** para garantir que os componentes principais (como `ProductCard` e `SalesTable`) estão funcionando corretamente.

### Exemplos de Testes:

- **ProductCard.test.tsx**: Testa a renderização correta dos dados de um produto.
- **SalesTable.test.tsx**: Testa a exibição das vendas, verificando se os produtos estão sendo corretamente identificados e exibidos.

### Rodando os Testes

Para rodar os testes, execute o comando:

```bash
npm test
```

## Instruções de Execução

### Instalando Dependências

Para começar, clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/sistema-de-vendas.git
cd sistema-de-vendas
npm install
```

### Executando o Servidor de Desenvolvimento

Com as dependências instaladas, execute o servidor de desenvolvimento:

```bash
npm run dev
```

Isso iniciará o servidor em [http://localhost:3000](http://localhost:3000), onde você pode ver a aplicação em ação.

## Documentação da API

A API utilizada por esse sistema está documentada no **Swagger**. Você pode consultar a documentação completa para mais detalhes sobre os endpoints e como utilizá-los.

- [Documentação da API - Swagger](http://localhost:3001/docs)
```