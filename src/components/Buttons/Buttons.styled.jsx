import styled from '@emotion/styled';

export const ContainerBtn = styled.div`
  display: inline-flex;
  min-width: 100px;
  justify-content: space-evenly;
`;

export const Btn = styled.button`
  padding: 8px;
  min-width: 65px;
  font-size: 20px;
  border-radius: 15px;
  transition: all 250ms linear;
  outline: none;
  &:hover {
    color: #fff;
    box-shadow: 10px 5px 5px grey;
    background-color: #252525;
    transform: scale(1.12);
  }
`;
