import React from 'react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: number) => void;
  onEdit: (transaction: Transaction) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onDelete, onEdit }) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          {transaction.description}: R${transaction.amount.toFixed(2)}
          <button onClick={() => onEdit(transaction)}>Editar</button>
          <button onClick={() => onDelete(transaction.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
