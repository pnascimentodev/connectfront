// pages/products/index.tsx
import { useState, useEffect } from 'react';
import { getProducts, Product } from '../../services/api';
import Link from 'next/link';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);  // Tipo correto para 'products'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();  // Opção de filtrar por nome, por exemplo: getProducts('produtoNome')
        setProducts(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Products</h1>
      
      {/* Botão para adicionar produto */}
      <Link href="/products/add">
        <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 mb-6">
          Adicionar Produto
        </button>
      </Link>

      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-medium text-gray-800">{product.name}</h2>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Stock: {product.stock}</p>
            </div>
            <Link href={`/products/edit/${product.id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Edit
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ProductsPage;
