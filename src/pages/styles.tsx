import styled from 'styled-components';

//Home
export const HomeWrapper = styled.div`
  padding: 4rem 4rem;
`

export const PaginationContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  background: red;
  border-radius: 8px 0 0 8px;
  color: white;

  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
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

    &:hover{
      background: white;
    }

    &:disabled{
      color: gray;
      background: red;
    }

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
    margin-bottom: 20px;
  }
`

export const FavGameContainer = styled.div`
  width: 50%;
`

export const GamesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  height: 500px;
  width: 100%;
  gap: 4px;
  flex: 1;

  h2{
    flex: 100%;
    align-self: stretch;
  }

  .gameImgContainer{  
    flex-basis: 20%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    clip-path: circle(34%);
    -webkit-clip-path: circle(50%);
    transition: clip-path 0.1s;
    margin-bottom: 10px;

    img{
      width: 100%;
    }

    &:hover{
      clip-path: circle(75%);
      -webkit-clip-path: circle(75%);
    }
  }
`

export const MedalsPodioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  height: 500px;
  width: 100%;
  gap: 4px;
  flex: 1;

  h2{
    flex: 100%;
    align-self: stretch;
  }
`

export const MedalBar = styled.div<{quantidade: number}>`
  width: 80px;
  background: red;
  color: #F5F5F5;

  display: flex;
  justify-content: center;
  height: ${(props => props.quantidade * 30)}px;
  max-height: 160px;
`