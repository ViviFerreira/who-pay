import { colorLight } from 'components/IU/variaveis';
import styled from 'styled-components';

const Main = styled.main`
   background-color: ${colorLight};
   padding: 1rem;
`;

export default ({ children }) => <Main>{children}</Main>;
