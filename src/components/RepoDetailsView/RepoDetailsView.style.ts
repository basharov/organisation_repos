import styled from 'styled-components';

export const RepoDetailsViewArea = styled.div`
  background: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const RepoInformationArea = styled.div`
  background: rgba(0,0,0,0.05);
  padding: 20px;
  position: relative;
  flex-shrink: 0;
  flex-basis: 200px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

export const ContributorsListAreaWrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  padding: 10px;
  flex-grow: 1;
`;

export const ContributorsListArea = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 500px;
  column-count: 3;
`;

export const ContributorLabel = styled.div`
  padding: 0 10px;
  line-height: 2;
  break-inside: avoid-column;
`;

export const ContributorImage = styled.img`
  width: 32px;
  height: 32px;
  padding: 0 4px;
`;

export const ContributorName = styled.span`
  line-height: 32px;
`;

export const ContributorLink = styled.a`
  display:flex;
  align-items:center;
  height: 40px;
  text-decoration: none;
  color: #456;

  &:hover{
    background:rgba(0,0,0,0.05)
  }
`;
