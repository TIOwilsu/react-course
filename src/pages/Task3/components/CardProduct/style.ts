import styled from 'styled-components';

export const Container = styled.div.attrs(({ className, style }) => ({
  className: `card-product ${className || ''}`,
  style,
}))`
  border: 1px solid black;
  padding: 16px;

  .card-product {
    &__title {
      font-size: 16px;
      margin-top: 0;
      margin-bottom: 20px;
    }

    &__proprieties {
      list-style: square;
    }
  }
`;
