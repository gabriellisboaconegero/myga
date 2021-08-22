import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    display: inline-block;
    font-weight: 700;
    font-size: 3.75rem;
    color: red;
    span{
      color: #363636;
      font-size: 2rem;
    }
  }
`;

export const LinkPage = styled.button`
  margin: 0 30px;
  margin-top: 20px;
  background: #F5F5F5;
  height: 40px;
  width: 160px;
  border: none;
  cursor: pointer;
  border-radius: 10%/40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
  box-shadow: -5px 5px 30px rgba(0, 0, 0, 0.2);
  outline: none;
  transition: box-shadow 0.1s;
  svg{
    font-size: 1.75rem;
    color: #242F40;
  }
  &:hover{
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    svg{
      color: red;
    }
  }
`