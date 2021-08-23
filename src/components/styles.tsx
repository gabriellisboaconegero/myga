import styled, { css } from "styled-components";

//all
export const Button = styled.button`
  background: transparent;
  border: 3px solid #363636;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;

  transition: background 0.2s;

  &:hover{
    background: #EBEBEB;
    border-color: red;
  }
`

export const CheckedButton = styled(Button)<{checked: boolean}>`
  ${(props) => {
    if (props.checked) {
      return css`
        border-color: red;
        
      `
    }
  }}
`

// Filter
export const FilterWrapper = styled.div`
  position: fixed; 
  width: 25%;
  height: 100vh;

  background: #D6D6D6;
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 1.5rem;
  border-right: 2px solid red;

  transform: translateX(-100%);
  transition: transform 0.2s;

  h1{
    text-align: center;
  }

  & + main{
    transition: margin 0.2s;
  }

  &.open{
    transform: translateX(0);
    overflow: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar{
      display: none;
    }
    & + main{
      margin-left: 30%;
    }

    >button{
      transform: rotateY(180deg) translateY(-50%);
      svg{
        transform: rotateZ(180deg);
      }
    }
  }
`

export const ShowFiltersButton = styled.button`
  position: fixed;
  top: 50%;
  right: 0;

  font-size: 1.25rem;
  display: flex;
  align-items: center;
  padding: 16px 0;
  background: red;
  border: none;
  border-radius: 0 8px 8px 0;
  color: #F5F5F5;
  cursor: pointer;

  transform: translateX(100%) translateY(-50%);
`

export const ButtonFilter = styled.button<{checked: boolean, showSvg?: boolean, color?: string}>`
  padding: 5px 10px;
  cursor: pointer;
  border: 2px solid #E0E0E0;
  border-radius: 20px;
  background: transparent;
  outline: none;
  flex-shrink: 0;
  
  span{
    margin-left: 5px;
  }

  
  ${(props) => {
    if (!props.showSvg){ return css`
      svg{
        max-width: 0;
      }
    `}
  }}

  ${(props) => {
    const color = props.color? props.color: 'red';
    if (props.checked) return css`
      border-color: ${color};
      svg{
        max-width: 100%;
        color: ${color};
      }
    `
  }}
` 

export const FilterContainer = styled.div`
  border-radius: 20px;
  background: #F5F5F5;
  box-shadow:  -12px 12px 0px red;
  padding: 10px;
  padding-right: 4px;

  >button{
    margin-left: 6px;
  }

  .filters{
    padding: 8px 0;
    padding-left: 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
`

// Header
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

//Search bar
export const SearchBarWrapper = styled.header`
  display: inline-flex;
  flex-direction: column;

  p{
    font-size: 0.75rem;
    color: #505050;
    margin-left: 6px;
  }

  form{
    display: flex;
    flex-wrap: wrap;

    background: white;
    border: 3px solid #363636;
    border-radius: 8px;
    margin-top: 8px;

    input{
      flex: 1;
      padding: 4px 16px;
      border: none;
      background: transparent;
      border-radius: inherit;
      outline: none;
      font-family: 'Roboto', sans-serif;
      font-size: 1.1rem;
      font-weight: 500;
    }

    button{
      font-size: 1rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      background: transparent;
      border: none;
      border-radius: inherit;
      padding-right: 10px;
    }
  }

  >button{
    align-self: flex-start;
  }
`

// Game card
export const GameCardWrapper = styled.div`
  flex: 1;
  flex-basis: 250px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`

export const GameImage = styled.div`
  position: relative;
  font-size: 0;
  border-radius: 20px;
  img{
    width: 100%;
    border-radius:inherit;
  }

  .blurredDiv{
    font-size: 1.5rem;
    background: #0000009b;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    border-radius: inherit;
    color: #F5F5F5;
    font-weight: 700;
    opacity: 0;
    transform: rotateY(90deg);
    transition: transform 0.2s ease-in-out;

    button{
      background: transparent;
      color: #E0E0E0;
      cursor: pointer;
      font-size: 2rem;
      display: flex;
      padding: 1rem;
      border-radius: 50%;
      outline: none;

      &.checked{
        color: yellow;
        border-color: yellow;
      }
    }
  }

  &:hover .blurredDiv{
    opacity: 1;
    transform: rotateY(0);
  }
`

export const MedalsContainer = styled.header`
  display: flex;
  gap: 4px;
`

export const MainContainer = styled.main`
`

export const FotterContainer = styled.footer`
  margin-top: auto;
  .tags{
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    justify-content: center;
  }

  a{
    display: block;
    text-decoration: none;
    color: #F5F5F5;
    background: red;
    margin-top: 8px;
    text-align: center;
    padding: 4px;
    transition: filter 0.2s;
    cursor: pointer;

    &:hover{
      filter: brightness(0.8);
    }
  }
`