import styled from 'styled-components';

export const Container = styled.div.attrs(({ className }) => ({
  className: `app-task1 ${className || ''}`,
}))``;
