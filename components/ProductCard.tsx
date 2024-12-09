import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  available: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, available, onEdit, onDelete }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">Preço: R$ {price.toFixed(2)}</p>
      <p className={`text-sm ${available ? 'text-green-500' : 'text-red-500'}`}>
        {available ? 'Disponível' : 'Indisponível'}
      </p>
      <div className="flex gap-2 mt-4">
        <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded" onClick={onEdit}>
          Editar
        </button>
        <button className="px-4 py-2 text-sm text-white bg-red-500 rounded" onClick={onDelete}>
          Excluir
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
