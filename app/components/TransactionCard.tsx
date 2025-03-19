'use client';

import Card from './Card';
import { useAccount } from 'wagmi';
import { TransactionDefault } from '@coinbase/onchainkit/transaction';

export default function TransactionCard() {
  const { address } = useAccount();
  
  // Example transaction call - sending 0 ETH to self
  const calls = address ? [
    {
      to: address as `0x${string}`,
      data: '0x' as `0x${string}`,
      value: BigInt(0)
    }
  ] : [];

  return (
    <Card title="Make Your First Transaction">
      <div className="space-y-4">
        <p className="text-gray-300 mb-4">
          Experience the power of onchain transactions with OnchainKit. Send a test transaction to see how it works.
        </p>
        
        <div className="flex flex-col items-center">
          {address ? (
            <TransactionDefault 
              calls={calls}
              className="w-full [&_button]:bg-[#0052FF] [&_button]:hover:bg-[#0047e1] [&_button]:text-white [&_button]:w-full [&_button]:py-2 [&_button]:px-4 [&_button]:rounded-lg [&_button]:font-medium [&_button]:transition-colors [&_button]:focus:outline-none [&_button]:focus:ring-2 [&_button]:focus:ring-offset-2 [&_button]:focus:ring-[#0052FF] [&_button]:disabled:opacity-50 [&_button]:disabled:pointer-events-none"
            />
          ) : (
            <p className="text-yellow-400 text-sm text-center mt-2">
              Connect your wallet to send a transaction
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
