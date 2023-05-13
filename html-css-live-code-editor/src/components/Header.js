import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;
function Header() {
  //const logo = 'https://unsplash.com/photos/_t-l5FFH8VA';
  return (
    <Container position="static">
      <Toolbar>
        <h1 style={{ color: 'tomato' }}>CodeEditor</h1>
      </Toolbar>
    </Container>
  );
}

export default Header;
