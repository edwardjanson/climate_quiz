import React from 'react';
import styled from 'styled-components';


const NavItem = ({children}) => {
  return (
    <Link>{children}</Link>
  );
}

const Link = styled.span`
`

export default NavItem;