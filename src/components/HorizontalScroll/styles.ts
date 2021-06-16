import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Typography } from '@material-ui/core';

export const Container = styled(ScrollContainer)`
  width: 100%;
  align-self: center;
  white-space: nowrap;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

export const StyledTypography = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  margin-left: 5%;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledLinkButton = styled.a`
  color: ${({ theme }) => theme.palette.primary.main};
  margin-right: 5%;
  font-weight: lighter;
`;
