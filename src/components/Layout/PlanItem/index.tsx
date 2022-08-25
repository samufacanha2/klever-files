import { core, ITransfer, TransactionType } from '@klever/sdk';
import Button from 'components/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import api from 'services/api';
import { IPlanItem } from 'types';
import { doIf } from 'utils';
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

const PlanItem: React.FC<IPlanItem> = ({
  name,
  price,
  pros,
  cons = [],
  productLink,
  main,
}) => {
  const [sucessful, setSucessful] = useState(false);

  const navigate = useNavigate();

  const handleCrypto = async () => {
    if (!process.env.REACT_APP_RECEIVER) {
      toast.error('Please config a receiver address');
      return;
    }

    const payload: ITransfer = {
      amount: price * 10 ** 6,
      receiver: process.env.REACT_APP_RECEIVER,
      kda: 'TUSD-13T0',
    };

    const unsignedTx = await core.buildTransaction([
      {
        payload,
        type: TransactionType.Transfer,
      },
    ]);

    const signedTx = await core.signTransaction(unsignedTx);

    const response = await core.broadcastTransactions([signedTx]);
    toast.success('Transaction broadcasted');

    const checkTxStatus = async () => {
      const hash = response.data.txsHashes[0];
      const txResponse = await api.get({ route: `/transactions/${hash}` });
      return txResponse.data.transaction.status === 'success';
    };

    doIf(
      () => setSucessful(true),
      () => setSucessful(false),
      async () => await checkTxStatus(),
    );
  };

  useDidUpdateEffect(() => {
    if (sucessful) {
      toast.success('Transaction successful');
      sessionStorage.setItem('plan', name);
      navigate('/files');
    }
  }, [sucessful]);

  return (
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
      <Price>{price ? `$${price}/Month` : 'Free!'}</Price>
      {!!price && (
        <PaymentContainer>
          <Button
            styleType={`${main ? 'primary' : 'outlined'}`}
            onClick={handleCrypto}
          >
            Pay with Crypto
          </Button>
          <StyledLink
            href={productLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <UnderText>Pay with credit card</UnderText>
          </StyledLink>
        </PaymentContainer>
      )}
    </Container>
  );
};

export default PlanItem;
