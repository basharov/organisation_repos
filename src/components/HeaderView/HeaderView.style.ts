import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderViewArea = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #405;
  flex-shrink: 0;
`;

export const LogoArea = styled.div`
  padding: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 300px;
`;

export const LightLink = styled(Link)`
  color: #fff;
`;

export const OrganisationSelectorArea = styled.div`
  display: flex;
  padding: 20px;
  flex-grow: 0;
`;

export const RatesLimitsArea = styled.div`
  align-content: center;
  justify-content: center;
  display: flex;
  padding: 20px;
  flex-grow: 1;
`;
