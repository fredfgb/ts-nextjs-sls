import styled from 'styled-components'

export const Container = styled.div.attrs({className: 'w-screen h-screen flex justify-center items-center flex-col'})` /* Tailwind css */

  /* css padrão */

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
