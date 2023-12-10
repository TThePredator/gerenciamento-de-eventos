import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const defaultButton = css`
  text-decoration: none;
  color: #000000;
  background-color: #ffa500;
  border-radius: 3px;
  border: 2px solid;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-weight: bold;
`

export const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  width: 100%;
`

export const Button = styled.button`
  ${defaultButton}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  width: 100%;
`

export const StyledLink = styled(Link)`
  ${defaultButton}
`

export const SearchContainer = styled.div`
  display: flex;
`

export const EventsContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  li {
    padding: 8px;
    background-color: #4169e180;
    color: white;
    border-radius: 8px;
  }
`

export const CreateEventContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;


  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    margin-top: 1rem;
    max-width: 496px;

    label {
      display: block;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    select {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
`
