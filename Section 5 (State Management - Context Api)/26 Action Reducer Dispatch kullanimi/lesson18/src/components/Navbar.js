import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
    return (
        <h1 className='text-left my-5'>{props.title}</h1>
    )
}
Navbar.defaultProps = {
    title : "Default App"
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
export default Navbar;