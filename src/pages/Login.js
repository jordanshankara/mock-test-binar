import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  LOGIN,
  LOGIN_TRUE,
  REGISTER,
  REGISTER_TRUE,
} from "../redux/actions/login";
import "../assets/css/login.css";
import { signIn, signup, useAuth } from "../service/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const login = useSelector((state) => state.login.login);
  const register = useSelector((state) => state.login.register);
  const acc = useSelector((state) => state.login.switch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useAuth();

  const onInputChange = (e) => {
    dispatch({
      type: LOGIN,
      payload: { [e.target.name]: e.target.value },
    });
  };
  const onRegisterChange = (e) => {
    dispatch({
      type: REGISTER,
      payload: { [e.target.name]: e.target.value },
    });
  };
  const toLogin = () => {
    dispatch({
      type: LOGIN_TRUE,
    });
  };
  const toRegister = () => {
    dispatch({
      type: REGISTER_TRUE,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!login.email || !login.password)
      return alert("Please Insert Missing Details");
    signIn(login.email, login.password)
      .then((userCredential) => {
        navigate("/");
        toast.success("Login Success");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!register.email || !register.password)
      return toast.error("Please Fill the Form");
    signup(register.email, register.password)
      .then((userCredential) => {
        toast.success("Register Success");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <Container
      fluid
      id="log-container"
      className=" d-flex align-items-center justify-content-center m-0"
    >
      <ToastContainer />
      <Row
        xs="1"
        className=" d-flex align-items-center justify-content-center m-0"
      >
        <Col
          className=" d-flex align-items-center justify-content-center flex-column px-3 py-4"
          id="log-box1"
        >
          {!currentUser ? (
            <>
              <h1 className="log-h1">{acc ? "Register" : "Login"}</h1>

              <Form
                className="w-100"
                onSubmit={acc ? handleRegister : handleLogin}
              >
                <FormGroup className="mt-2">
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="user@mail.com"
                    type="email"
                    onChange={acc ? onRegisterChange : onInputChange}
                    value={acc ? register.email : login.email}
                    required
                  />
                </FormGroup>
                <FormGroup className="mt-2">
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                    onChange={acc ? onRegisterChange : onInputChange}
                    value={acc ? register.password : login.password}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Button color="primary" className="mt-2 w-100" type="submit">
                    {acc ? "Register" : "Login"}
                  </Button>
                </FormGroup>
              </Form>

              <div className="mt-2 text-white">
                {acc ? "Have An Account?" : "Not a Member?"}
              </div>

              <Button color="link" onClick={acc ? toLogin : toRegister}>
                {acc ? "Login" : "Register"}
              </Button>
            </>
          ) : (
            <>
              <h1 className="text-white mb-4">User Logged In</h1>
              <Link to="/">
                <Button color="danger" block>
                  Return to Home
                </Button>
              </Link>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}
