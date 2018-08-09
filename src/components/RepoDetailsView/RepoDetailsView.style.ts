import styled from 'styled-components';

export const RepoDetailsViewArea = styled.div`
  background: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const RepoInformationArea = styled.div`
  background: rgba(0,0,0,0.2);
  padding: 20px;
`;

export const ContributorsListArea = styled.div`
  background: yellow;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 500px;
  overflow-y: scroll;
  column-count: 3;
  column-rule-style: solid;
`;
