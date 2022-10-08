import React from 'react';
import { Container } from './style';

interface CardClientStatusElement {
  text: string;
  class: string;
}

interface CardClientPurchase {
  name: string;
  price: string;
}

interface CardClientProps {
  client: string;
  age: number;
  purchases: Array<CardClientPurchase>;
  status: boolean;
}

export const CardClient: React.FC<CardClientProps> = ({ client, age, purchases, status }) => {
  const getTotal = (): number => {
    return purchases.reduce((total, purchase) => {
      const price = +purchase.price.replace('R$ ', '');
      total += price;
      return total;
    }, 0);
  };

  const getStatus = (): CardClientStatusElement => {
    return status ? { class: 'active', text: 'Ativo' } : { class: 'inactive', text: 'Inativa' };
  };

  const isExpensive = (): boolean => getTotal() > 10000;

  return (
    <Container>
      <p className="card-client__name" role="client">
        Nome: {client}
      </p>
      <p className="card-client__age" role="age">
        Idade: {age}
      </p>
      <p className="card-client__status" role="status">
        Situação:{' '}
        <span className={`card-client__status-text card-client__status-text--${getStatus().class}`}>
          {getStatus().text}
        </span>
      </p>
      <p className="card-client__total" role="total">
        Total gasto: R$ {getTotal()}
      </p>
      {isExpensive() && (
        <p className="card-client__expensive" role="expensive">
          Voce está gastando muito.
        </p>
      )}
    </Container>
  );
};
