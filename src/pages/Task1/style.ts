import styled from 'styled-components';

export const Container = styled.div.attrs(({ className }) => ({
  className: `app-home ${className || ''}`,
}))``;
