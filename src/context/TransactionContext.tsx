import React, { createContext, useState, ReactNode } from 'react';
import { Transaction } from '../types/Transaction';

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>; 
  setTransactionToEdit: (transaction: Transaction | null) => void; 
}

export const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionToEdit, setTransactionToEdit] = useState<Transaction | null>(null);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = { ...transaction, id: Date.now() };
    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, setTransactions, setTransactionToEdit }}>
      {children}
    </TransactionContext.Provider>
  );
};
