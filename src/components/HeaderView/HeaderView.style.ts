import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderViewArea = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #422;
`;

export const LeftSide = styled.div`
  padding: 20px;
`;

export const LightLink = styled(Link)`
  color: #fff;
`;

export const RightSide = styled.div`
  align-content: right;
  display: flex;
  padding: 20px;
  flex-grow: 1;
`;
