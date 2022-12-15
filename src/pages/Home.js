import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "reactstrap";
import "../assets/css/notfound.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../service/firebase";

export default function Home() {
  const currentUser = useAuth();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <Container
      className="d-flex align-items-center justify-content-center flex-column min-vh-100"
      id="notfound"
      fluid
    >
      {currentUser ? (
        <Row class="row d-flex justify-content-center align-items-center h-100">
          <Col>
            <Card class="card rounded-3">
              <CardBody class="p-4">
                <h4 class="text-center my-3 pb-3">To Do App</h4>

                <Form class="mb-4 pb-2">
                  <Row className="justify-content-center align-items-center">
                    <Col xs="9">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form1"
                          class="form-control"
                          placeholder="Enter your Task"
                        />
                      </div>
                    </Col>

                    <Col xs="3">
                      <Button type="submit" color="primary" block>
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>

                <Table class="table mb-4">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Buy groceries for next week</td>
                      <td>
                        <Button type="submit" color="danger">
                          Delete
                        </Button>
                        <Button type="submit" color="success" className="ms-1">
                          Finished
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Renew car insurance</td>
                      <td>
                        <Button type="submit" color="danger">
                          Delete
                        </Button>
                        <Button type="submit" color="success" className="ms-1">
                          Finished
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Sign up for online course</td>
                      <td>
                        <Button type="submit" color="danger">
                          Delete
                        </Button>
                        <Button type="submit" color="success" className="ms-1">
                          Finished
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : (
        <>
          <h1 className="text-white text-center mb-2 page-text">Welcome</h1>
          <h4 className="text-white mb-4">Please Login to Use To-Do List</h4>
          <Link to="/login">
            <Button color="primary">Login</Button>
          </Link>
        </>
      )}
    </Container>
  );
}
