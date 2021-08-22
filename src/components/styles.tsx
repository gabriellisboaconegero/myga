import styled, { css } from "styled-components";

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
      margin-left: 25%;
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

export const CheckboxFilterStyled = styled.button<{checked: boolean}>`
  padding: 5px 10px;
  cursor: pointer;
  border: 2px solid #E0E0E0;
  border-radius: 20px;
  background: transparent;
  outline: none;

  svg{
    max-width: 0;
    color: red;
  }
  ${(props) => {
    if (props.checked) return css`
      border-color: red;
      svg{
        margin-right: 5px;
        max-width: 100%;
      }
    `
  }}
`

export const FilterContainer = styled.div`
  border-radius: 20px;
  background: #F5F5F5;
  box-shadow:  -12px 12px 0px red;
  padding: 10px;
`

export const CheckboxFiltersContainer = styled(FilterContainer)`
  
`

export const MedalsFiltersContainer = styled(FilterContainer)`
  
`

export const GenreFiltersContainer = styled(FilterContainer)`


`