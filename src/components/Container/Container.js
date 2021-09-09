import PropTypes from 'prop-types';
import { MainContainer } from "./styles";

const Container = ({ children }) => (
        <MainContainer>
            {children}
        </MainContainer>
);

Container.propTypes = {
    children: PropTypes.node,
}

export default Container;