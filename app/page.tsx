'use client';

import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
} from '@coinbase/onchainkit/minikit';
import {
  Name,
  Identity,
} from '@coinbase/onchainkit/identity';
import { useEffect, useMemo, useState, useCallback } from 'react';
import { useAccount, useConnect } from 'wagmi';
import Card from './components/Card';
import Button from './components/Button';
import Icon from './components/Icon';
import TodoList from './components/TodoList';

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();
  const { address } = useAccount();
  const { connect, connectors } = useConnect();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  const saveFrameButton = useMemo(() => {
    if (context && !context.client.added) {
      return (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleAddFrame}
          className="text-gray-300"
          icon={<Icon name="plus" size="sm" />}
        >
          Save Frame
        </Button>
      );
    }

    if (frameAdded) {
      return (
        <div className="flex items-center space-x-1 text-sm font-medium text-[#0052FF] animate-fade-out">
          <Icon name="check" size="sm" className="text-[#0052FF]" />
          <span>Saved</span>
        </div>
      );
    }

    return null;
  }, [context, frameAdded, handleAddFrame]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6 animate-fade-in">
            <Card title="My First Mini App">
              <p className="text-gray-300 mb-4">
                This is a minimalistic Mini App built with OnchainKit components.
              </p>
              <Button 
                onClick={() => setActiveTab('features')}
                icon={<Icon name="arrow-right" size="sm" />}
              >
                Explore Features
              </Button>
            </Card>
            
            <TodoList />
          </div>
        );
      
      case 'features':
        return (
          <div className="space-y-6 animate-fade-in">
            <Card title="Key Features">
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <Icon name="check" className="text-[#0052FF] mt-1 mr-2" />
                  <span className="text-gray-300">Minimalistic and beautiful UI design</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" className="text-[#0052FF] mt-1 mr-2" />
                  <span className="text-gray-300">Responsive layout for all devices</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" className="text-[#0052FF] mt-1 mr-2" />
                  <span className="text-gray-300">Dark mode support</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" className="text-[#0052FF] mt-1 mr-2" />
                  <span className="text-gray-300">OnchainKit integration</span>
                </li>
              </ul>
              <Button 
                variant="outline"
                onClick={() => setActiveTab('home')}
              >
                Back to Home
              </Button>
            </Card>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-white mini-app-theme bg-gradient-to-b from-black to-gray-800">
      <div className="w-full max-w-md mx-auto px-4 py-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            {address ? (
              <Identity address={address} className="!bg-inherit p-0 [&>div]:space-x-2">
                <Name className="text-inherit" />
              </Identity>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="text-gray-400 text-sm font-medium">Not Connected</div>
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={() => connect({ connector: connectors[0] })}
                >
                  Connect
                </Button>
              </div>
            )}
          </div>
          <div>{saveFrameButton}</div>
        </header>

        <main className="flex-1">
          {renderTabContent()}
        </main>

        <footer className="mt-8 pt-4 border-t border-gray-700/50 flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 text-xs"
            onClick={() => openUrl('https://base.org/builders/minikit')}
          >
            Built on Base with MiniKit
          </Button>
        </footer>
      </div>
    </div>
  );
}
