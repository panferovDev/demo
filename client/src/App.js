import { Row, Col, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './Components/MyNav/MyNav';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <Container>
      <MyNav />
      <Row>
        <Col>Hi</Col>
      </Row>
    </Container>

  );
}

export default App;
