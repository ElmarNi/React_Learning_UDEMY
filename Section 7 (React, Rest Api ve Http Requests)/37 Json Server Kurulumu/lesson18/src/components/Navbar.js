import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
    return (
        <h1 className='text-left mt-5 mb-0'>{props.title}</h1>
    )
}
Navbar.defaultProps = {
    title : "Default App"
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
export default Navbar;