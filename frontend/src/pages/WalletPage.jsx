import React, { useState } from "react";

function WalletPage() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);

  const handleAddMoney = () => {
    if (amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    setBalance(balance + parseFloat(amount));
    setTransactions([
      ...transactions,
      {
        type: "Deposit",
        amount: parseFloat(amount),
        date: new Date().toLocaleString(),
      },
    ]);
    setAmount("");
  };

  return (
    <div className="p-8min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
        Wallet
      </h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Wallet Balance */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Current Balance
          </h2>
          <p className="text-2xl font-bold text-primary">
            ${balance.toFixed(2)}
          </p>
        </div>

        {/* Add Money Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Add Money to Wallet
          </h3>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 mt-2 border rounded-md border-gray-300"
            placeholder="Enter amount"
          />
          <button
            onClick={handleAddMoney}
            className="w-full mt-4 px-6 py-2 bg-primary text-white rounded-md shadow-md hover:bg-gray-700 transition"
          >
            Add Money
          </button>
        </div>

        {/* Transactions Section */}
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Transaction History
        </h3>
        {transactions.length > 0 ? (
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">{transaction.type}</p>
                  <p className="text-sm text-gray-400">{transaction.date}</p>
                </div>
                <p
                  className={`text-sm font-semibold ${
                    transaction.type === "Deposit"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  ${transaction.amount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No transactions yet.</p>
        )}

        {/* Teacher Income Section */}
        {isTeacher && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700">Your Income</h3>
            <p className="text-xl font-bold text-blue-600">
              $
              {transactions
                .reduce(
                  (total, txn) =>
                    txn.type === "Deposit" ? total + txn.amount : total,
                  0
                )
                .toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WalletPage;
