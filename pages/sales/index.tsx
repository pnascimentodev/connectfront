import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSales, getProducts, Sale, Product } from '../../services/api';

const SalesPage = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Buscar vendas e produtos ao carregar a página
  useEffect(() => {
    const fetchSalesAndProducts = async () => {
      try {
        const [salesData, productsData] = await Promise.all([
          getSales(), // Buscar vendas
          getProducts(), // Buscar produtos
        ]);
        setSales(salesData);
        setProducts(productsData);
      } catch (error) {
        console.error('Erro ao carregar vendas ou produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSalesAndProducts();
  }, []);

  // Função para obter o nome do produto pelo ID
  const getProductNameById = (productId: string): string => {
    const product = products.find((p) => p.id === productId);
    return product ? product.name : 'Produto não encontrado';
  };

  if (loading) {
    return <p className="text-center">Carregando...</p>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Vendas</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => router.push('/sales/add')}
        >
          Realizar Venda
        </button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Produto</th>
            <th className="border px-4 py-2 text-left">Quantidade</th>
            <th className="border px-4 py-2 text-left">Valor Total</th>
            <th className="border px-4 py-2 text-left">Data</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td className="border px-4 py-2">{getProductNameById(sale.productId)}</td>
              <td className="border px-4 py-2">{sale.quantity}</td>
              <td className="border px-4 py-2">R$ {sale.totalValue.toFixed(2)}</td>
              <td className="border px-4 py-2">{new Date(sale.saleDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesPage;
