import { core } from '@klever/sdk';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { doIf, stringEllipsis } from 'utils';
import { useDidUpdateEffect } from 'utils/hooks';
import { ConnectButton, ConnectContainer } from './styles';

interface IConnectWalletProps {
  handleMenu?: () => void;
}

const ConnectWallet: React.FC<IConnectWalletProps> = ({ handleMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [extensionInstalled, setExtensionInstalled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (typeof window !== 'undefined') {
        await doIf(
          () => setExtensionInstalled(true),
          () => handleLogout(),
          () => window.kleverWeb !== undefined,
        );
      }
    };
    init();
  }, []);

  useDidUpdateEffect(() => {
    if (extensionInstalled) {
      handleConnect(true);
    }
  }, [extensionInstalled]);

  const handleLogout = useCallback(() => {
    if (location.pathname.includes('/create-transaction')) {
      window.innerWidth < 1025 && handleMenu && handleMenu();
      navigate('/');
    }
  }, [handleMenu]);

  const handleConnect = async (silent?: boolean) => {
    if (!walletAddress) {
      window.kleverWeb.provider = {
        api:
          process.env.DEFAULT_API_HOST ||
          'https://api.testnet.klever.finance/v1.0',
        node:
          process.env.DEFAULT_NODE_HOST ||
          'https://node.testnet.klever.finance',
      };

      try {
        if (!core.isKleverWebActive()) {
          setLoading(true);
          await core.initialize();
          setLoading(false);
        }

        const address: string = await window.kleverWeb.getWalletAddress();

        if (address.startsWith('klv') && address.length === 62) {
          setWalletAddress(address);
        } else {
          !silent &&
            toast.error(
              'Invalid wallet address, please switch to a klv wallet',
            );
        }
      } catch (e) {
        setLoading(false);
        !silent && toast.error(String(e).split(':')[1]);
      }
    }
  };

  return (
    <>
      {extensionInstalled && (
        <ConnectContainer>
          <ConnectButton
            onClick={() => handleConnect()}
            key={String(extensionInstalled)}
          >
            {loading ? (
              <span> Loading... </span>
            ) : (
              <>
                {walletAddress && (
                  <span>{stringEllipsis(walletAddress, 25)}</span>
                )}
                {!walletAddress && <span>Connect your wallet</span>}
              </>
            )}
          </ConnectButton>
        </ConnectContainer>
      )}
    </>
  );
};

export default ConnectWallet;
