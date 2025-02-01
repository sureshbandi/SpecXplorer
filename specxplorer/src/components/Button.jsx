// src/components/Button.jsx
import PropTypes from 'prop-types';

function Button({ children, onClick }) {
  return (
    <button
      className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
