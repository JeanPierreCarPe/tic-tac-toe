import PropTypes from 'prop-types';

const Square = (props) => {
    const {children, setBoard, index} = props;
    return (
        <div className="square" onClick={() => {setBoard(index)}}>
            <span>{children}</span>
        </div>
    )
}

Square.propTypes = {
    children: PropTypes.node,
    setBoard: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default Square;