import React from 'react'
import { func, string } from 'prop-types'
import { ReactComponent as MoonIcon } from '../assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg'
import styled from 'styled-components'

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 4rem;
  height: 2.0rem;
  margin: 0 1rem;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.3rem;
  overflow: hidden;
  cursor: pointer;

  :focus {
    outline: none;
  }

  svg {
    width: 1.1rem;
    height: auto;
    transition: all 0.3s linear;
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;


const Toggle = ({theme, toggleTheme}) => {
  const isLight = theme === 'light'
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon/>
    </ToggleContainer>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;
