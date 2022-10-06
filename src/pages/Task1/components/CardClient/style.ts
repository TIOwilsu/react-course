import styled from 'styled-components';

export const Container = styled.div.attrs(({ className }) => ({
  className: `card-client ${className || ''}`,
}))`
  .card-client {
    &__status {
      &-text {
        &--active {
          color: green;
        }
        &--inactive {
          color: red;
        }
      }
    }
  }
`;
