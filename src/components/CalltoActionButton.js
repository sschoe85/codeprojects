import styled from "@emotion/styled"

const CalltoActionButton = styled.button`
  border: solid 3px transparent;
  border-radius: 100rem;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #78e4ff, #ff48fa);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #111 inset;
  color: white;
  font-family: inherit;
  padding: ${(props) => props.size === 'small' ? '0.3rem 1rem' : '0.5rem 3rem'};

  & :hover {
    animation: pulse 3s;
    box-shadow: 0 0 0 2em rgba(#fff, 0);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--gradient);
    }
  }
`




export default CalltoActionButton
