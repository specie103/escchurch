
function DropdownMenu1() {
    return (
      <NavDropdown title="Dropdown 1" id="basic-nav-dropdown-1">
        <LinkContainer to="/dropdown1/page1">
          <NavDropdown.Item>Page 1</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to="/dropdown1/page2">
          <NavDropdown.Item>Page 2</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
    );
  }

  export default DropdownMenu1;