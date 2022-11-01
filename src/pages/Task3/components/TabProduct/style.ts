import styled from 'styled-components';

export const Container = styled.div.attrs(({ className }) => ({
  className: `tab-product ${className || ''}`,
}))``;
