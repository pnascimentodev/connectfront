import axios from 'axios';

const API_URL = 'http://localhost:3001';

// Configuração do axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interface para Produto
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

// Interface para Venda
export interface Sale {
  id: string;
  productId: string;
  quantity: number;
  saleDate: string;
  totalValue: number;
}

// Função para obter todos os produtos com filtragem opcional
export const getProducts = async (name?: string): Promise<Product[]> => {
  try {
    const response = await api.get('/products', {
      params: { name },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};

// Função para criar um novo produto
export const createProduct = async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> => {
  try {
    const response = await api.post('/products', productData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    throw error;
  }
};

// Função para atualizar um produto
export const updateProduct = async (id: string, productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> => {
  try {
    const response = await api.put(`/products/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    throw error;
  }
};

// Função para excluir um produto
export const deleteProduct = async (id: string): Promise<Product> => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    throw error;
  }
};

// Função para obter todas as vendas
export const getSales = async (productId?: string, startDate?: string, endDate?: string): Promise<Sale[]> => {
  try {
    const response = await api.get('/sales', {
      params: { productId, startDate, endDate },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar vendas:', error);
    throw error;
  }
};

// Função para criar uma nova venda
export const createSale = async (saleData: Omit<Sale, 'id' | 'saleDate' | 'totalValue'>): Promise<Sale> => {
  try {
    const response = await api.post('/sales', saleData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar venda:', error);
    throw error;
  }
};

// Função para excluir uma venda
export const deleteSale = async (id: string): Promise<Sale> => {
  try {
    const response = await api.delete(`/sales/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir venda:', error);
    throw error;
  }
};

export default api;
