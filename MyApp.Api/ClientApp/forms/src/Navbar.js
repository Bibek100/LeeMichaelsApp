import React, { useState, useEffect } from 'react';
import { Menu, Container, Button, Dropdown, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
 return(
     <div>
    <Menu inverted>
        <Menu.Item header position='left'>
            <Link to="/">Necklaces</Link>
        </Menu.Item>
    </Menu>
    </div>

 )
}
export default Navbar;