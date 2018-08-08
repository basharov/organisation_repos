import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SidebarViewWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 400px;
  background: rgba(0,0,0,0.1);
  overflow-y: scroll;
  position:relative;
`;

export const ListLink = styled(Link)`
  display: block;
  line-height: 2;
  padding: 0 10px;
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ActiveLabel = styled.div`
  display: block;
  line-height: 2;
  padding: 0 10px;
  background: rgba(0,0,0,0.2);
`;
