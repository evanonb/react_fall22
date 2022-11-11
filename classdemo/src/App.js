import Header from "./components/Header";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#Introduction">Introduction</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Education">Education</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Experience">Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#FunFacts">Fun Facts</Nav.Link>
        </Nav.Item>
        <Nav.Item variant="text-right">
          <Button variant="danger" onClick={() => {
            localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark');
            window.location.reload()
          }}>
            Change Theme
          </Button>
        </Nav.Item>
        </Nav>
      <Header
        linkText="Learn React"
        linkUrl="https://reactjs.org"
      />
    </div>
  );
}

export default App;