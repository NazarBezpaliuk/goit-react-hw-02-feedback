import styled from '@emotion/styled';

export const StatContainer = styled.div``;

export const StatList = styled.ul`
  margin-top: 0;
  padding-left: 0;
`;

export const StatItem = styled.li`
  list-style: none;
  font-size: 36px;
  padding-left: 0;
  &:nth-child(1) {
    color: forestgreen;
  }
  &:nth-child(2) {
    color: blue;
  }
  &:nth-child(3) {
    color: red;
  }
  &:nth-child(4) {
    font-size: 46px;
    color: black;
  }
  &:nth-child(5) {
    color: magenta;
  }
`;
