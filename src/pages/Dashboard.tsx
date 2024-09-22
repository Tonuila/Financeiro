import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import Summary from '../components/Summary';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const transactionContext = useContext(TransactionContext);

  if (!transactionContext) return null;

  const { transactions } = transactionContext;

  return (
    <div>
      <h1>Dashboard</h1>
      <Summary transactions={transactions} />
      <Link to="/">Voltar para Home</Link>
    </div>
  );
};

export default Dashboard;
