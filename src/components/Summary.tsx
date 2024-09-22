import React from 'react';

interface Transaction {
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

interface SummaryProps {
  transactions: Transaction[];
}

const Summary: React.FC<SummaryProps> = ({ transactions }) => {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div>
      <h2>Resumo</h2>
      <p>Renda Total: R${totalIncome.toFixed(2)}</p>
      <p>Despesa Total: R${totalExpense.toFixed(2)}</p>
      <p>Saldo: R${balance.toFixed(2)}</p>
    </div>
  );
};

export default Summary;
