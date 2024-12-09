import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
      <div className="text-center text-white p-12 rounded-xl shadow-2xl max-w-lg w-full bg-opacity-90">
        <h1 className="text-5xl font-extrabold mb-6">Bem-vindo ao Sistema</h1>
        <p className="text-lg mb-8">Escolha uma opção abaixo para gerenciar os produtos ou as vendas.</p>
        
        <nav>
          <ul className="space-y-6">
            <li>
              <Link
                href="/products"
                className="block p-6 bg-blue-700 hover:bg-blue-800 text-2xl font-semibold rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">📦</span> Gerenciar Produtos
              </Link>
            </li>
            <li>
              <Link
                href="/sales"
                className="block p-6 bg-green-700 hover:bg-green-800 text-2xl font-semibold rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">💸</span> Gerenciar Vendas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
