import { core, ITransfer, TransactionType } from '@klever/sdk';
import Button from 'components/Button';
import Loading from 'components/Loading';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import api from 'services/api';
import { IPlanItem } from 'types';
import { asyncDoIf } from 'utils';
import { useDidUpdateEffect } from 'utils/hooks';
import {
  Container,
  List,
  ListItem,
  PaymentContainer,
  Price,
  Status,
  StyledLink,
  Title,
  UnderText,
} from './styles';

const checkTxStatus = async (response: any): Promise<boolean> => {
  const hash = response.data.txsHashes[0];
  const txResponse = await api.get({ route: `transaction/${hash}` });
  if (txResponse.error !== '') {
    return false;
  }
  return txResponse.data.transaction.status === 'success';
};

const PlanItem: React.FC<IPlanItem> = ({
  name,
  price,
  pros,
  cons = [],
  productLink,
  main,
}) => {
  const [sucessful, setSucessful] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleCrypto = async () => {
    setLoading(true);
    if (!process.env.REACT_APP_RECEIVER) {
      toast.error('Please config a receiver address');
      return;
    }

    if (price === undefined) {
      return;
    }

    const payload: ITransfer = {
      amount: price * 10 ** 2,
      receiver: process.env.REACT_APP_RECEIVER,
      kda: 'TUSD-13T0',
    };

    try {
      const unsignedTx = await core.buildTransaction([
        {
          payload,
          type: TransactionType.Transfer,
        },
      ]);

      const signedTx = await core.signTransaction(unsignedTx);

      const response = await core.broadcastTransactions([signedTx]);
      toast.success('Transaction broadcasted');

      asyncDoIf(
        () => setSucessful(true),
        () => {
          setLoading(false);

          toast.error('Transaction failed');
        },
        () => checkTxStatus(response),
        20,
      );
    } catch (e: any) {
      setLoading(false);
      toast.error(e.message ? e.message : e);
    }
  };

  useDidUpdateEffect(() => {
    if (sucessful) {
      toast.success('Transaction successful');
      sessionStorage.setItem('plan', name);
      navigate('/files');
    }
  }, [sucessful]);

  return (
    <>
      {loading && <Loading />}
      <Container>
        <Title>{name}</Title>
        <List>
          {pros.map((pro, index) => (
            <ListItem>
              <Status>
                <p>✔️</p>
              </Status>
              <p>{pro}</p>
            </ListItem>
          ))}
          {cons.map((con, index) => (
            <ListItem>
              <Status>
                <p>❌</p>
              </Status>
              <p>{con}</p>
            </ListItem>
          ))}
        </List>
        <Price>
          {price === undefined
            ? 'Custom price'
            : `${price === 0 ? 'Free!' : `$${price}/Month`}`}
        </Price>
        {price !== 0 && (
          <PaymentContainer>
            <Button
              styleType={`${main ? 'primary' : 'outlined'}`}
              onClick={handleCrypto}
            >
              {price === undefined ? 'Contact us' : 'Pay with Crypto'}
            </Button>
            <StyledLink
              href={productLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <UnderText>
                {price !== undefined && price > 0 ? 'Pay with credit card' : ''}
              </UnderText>
            </StyledLink>
          </PaymentContainer>
        )}
      </Container>
    </>
  );
};

export default PlanItem;
