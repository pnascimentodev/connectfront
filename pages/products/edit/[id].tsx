import api from '@/services/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const EditProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState({
    name: '',
    price: 0,
    description: '',
    stock: 0, // Altere para "stock" em vez de "stockQuantity"
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const response = await api.get(`/products/${id}`);
          setProduct(response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSave = async () => {
    const { name, price, description, stock } = product; 
    try {
      await api.put(`/products/${id}`, { name, price, description, stock });
      router.push('/products');
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
    }
  };
  

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Produto</h1>
      <input
        type="text"
        placeholder="Nome"
        className="p-2 border rounded w-full mb-4"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Preço"
        className="p-2 border rounded w-full mb-4"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
      />
      <textarea
        placeholder="Descrição"
        className="p-2 border rounded w-full mb-4"
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantidade em Estoque"
        className="p-2 border rounded w-full mb-4"
        value={product.stock} // Altere para "stock"
        onChange={(e) => setProduct({ ...product, stock: parseInt(e.target.value, 10) })}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSave}
      >
        Salvar
      </button>
    </div>
  );
};

export default EditProductPage;
