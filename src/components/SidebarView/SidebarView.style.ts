import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SidebarViewWrapper = styled.div`
  flex-grow: 0.2;
`;

export const ListLink = styled(Link)`
  display:block;
  line-height:2;
  padding: 0 10px;
`;
