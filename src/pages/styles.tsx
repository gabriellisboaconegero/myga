import styled from 'styled-components';

export const HomeWrapper = styled.div`
  padding: 4rem 4rem;
`

export const PaginationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;

  transform: translateX(-50%);
  display: flex;
  align-items: center;
  
  span{
    padding: 0 1rem;
    font-weight: 700;
  }

  button{
    padding: 4px 8px;
    background: transparent;
    border: 3px solid red;
    border-radius: 8px;
    color: black;
    font-size: 1rem;
    cursor: pointer;

    svg{
      stroke: 4px;
    }
  }
`

export const GamesListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin-top: 1rem;
`

export const ProfileWrapper = styled.div`
  
`