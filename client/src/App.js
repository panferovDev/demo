import { useEffect } from 'react';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import MyNav from './Components/MyNav/MyNav';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import { checkUser } from './Redux/actions/userAction';
import Main from './Components/Main/Main';
import AuthRouter from './Components/AuthRouter/AuthRouter';
import MySpin from './Components/MySpin/MySpin';

function App() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <Container>
      {user.isFetch
        ? <MySpin />
        : (
          <>
            <MyNav />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/signin"
                element={(
                  <AuthRouter>
                    <SignIn />
                  </AuthRouter>
        )}
              />
              <Route
                path="/signup"
                element={(
                  <AuthRouter>
                    <SignUp />
                  </AuthRouter>
        )}
              />
            </Routes>
          </>
        )}
    </Container>

  );
}

export default App;
