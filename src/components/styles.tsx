import styled, { css } from "styled-components";

export const FilterWrapper = styled.div<{open: boolean}>`
  /* position: absolute;
  ${props => {
    return !props.open? css`
      transform: translateX(-100%);
    `: ''
  }} */

`

export const CheckboxFilterStyled = styled.button<{checked: boolean}>`
  padding: 5px 15px;
  cursor: pointer;
  border: 2px solid #E0E0E0;
  border-radius: 20px;
  background: #EBEBEB;
  outline: none;

  svg{
    max-width: 0;
    color: red;
  }
  ${(props) => {
    if (props.checked) return css`
      border-color: red;

      svg{
        margin-right: 10px;
        max-width: 100%;
      }
    `
  }}
`