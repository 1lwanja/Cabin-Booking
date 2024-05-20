import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>Hello world</H1>
      </div>
    </>
  );
}

export default App;
