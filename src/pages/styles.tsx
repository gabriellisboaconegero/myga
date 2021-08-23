import styled from 'styled-components';

//Home
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

//Profile
export const ProfileWrapper = styled.div`
  max-width: 70%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2{
    text-align: center;
  }
`

export const FavGameContainer = styled.div`
  width: 50%;
  h2{
    margin-bottom: 8px;
  }
`

export const FavGamesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  height: 500px;
  width: 100%;

  header{
    flex: 100%;
    align-self: stretch;
  }

  >div{
    flex: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
      display: none;
    }
  }
`