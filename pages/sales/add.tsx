import { useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../services/api';

const AddSalePage = () => {
  const [sale, setSale] = useState({ productId: '', quantity: 0 });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    if (!sale.productId || sale.quantity <= 0) {
      setError('Preencha todos os campos corretamente.');
      return;
    }

    try {
      await api.post('/sales', sale);
      router.push('/sales');
    } catch (error) {
      console.error('Erro ao adicionar venda:', error);
      setError('Erro ao adicionar a venda.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Adicionar Venda</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        placeholder="ID do Produto"
        className="p-2 border rounded w-full mb-4"
        value={sale.productId}
        onChange={(e) => setSale({ ...sale, productId: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantidade"
        className="p-2 border rounded w-full mb-4"
        value={sale.quantity}
        onChange={(e) => setSale({ ...sale, quantity: parseInt(e.target.value, 10) })}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Adicionar Venda
      </button>
    </div>
  );
};

export default AddSalePage;
