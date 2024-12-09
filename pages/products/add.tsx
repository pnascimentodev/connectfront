import { useState } from 'react';
import api from '@/services/api';
import { useRouter } from 'next/router';

export default function AddProduct() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState('');  // Adicionando o estado para descrição

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/products', { name, price, stock, description });
      alert('Produto adicionado com sucesso!');
      router.push('/products');
    } catch (err) {
      console.error(err);
      alert('Erro ao adicionar produto');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Adicionar Produto</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Nome:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Preço:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Estoque:</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(parseInt(e.target.value, 10))}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Descrição:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
        Salvar
      </button>
    </form>
  );
}
