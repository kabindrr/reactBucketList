import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Button, Modal, Spinner } from "react-bootstrap";

import { Table } from "./components/Table";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";
const totalBudget = 24000;

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [bucketList, setBucketList] = useState([]);

  const totalMoney = bucketList.reduce((acc, item) => {
    return acc + Number(item.money);
  }, 0);

  const addBucketList = (taskObj) => {
    setShowModal(true);

    setTimeout(() => {
      const obj = {
        ...taskObj,
        id: randomIdGenerator(),
        type: "entry",
      };
      if (totalMoney + Number(taskObj.money) > totalBudget) {
        setShowModal(false);
        return toast.error(
          "Not enough Budget available. Let go of some holiday destination"
        );
      }

      setBucketList([...bucketList, obj]);
      setShowModal(false);
      
     
      toast.success("On your way to new Bucket");
    }, 3000);
  };

  const randomIdGenerator = () => {
    const str =
      "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    let id = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);

      id += str[randomIndex];
    }
    return id;
  };

  const handleOnSwitch = (id, type) => {
    const temArg = bucketList.map((item) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    setBucketList(temArg);
    toast.info(`Bucket list item switched to ${type}`);
  };

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to Delete the bucket list??")) {
      setBucketList(bucketList.filter((item) => item.id !== id));
      toast.error("Your bucket list has been deleted");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="wrapper">
        <div className="navBar p-3 rounded bg-dark" data-bs-theme="dark">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                BucketList
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="container">
          {/* <!-- header --> */}
          <div className="header">
            <h2>Bucket List</h2>
          </div>

          {/* <!-- form --> */}
          <div className="form rounded-3">
            <Form addBucketList={addBucketList} />
          </div>

          {/* <!-- tables --> */}

          <Table
            bucketList={bucketList}
            handleOnSwitch={handleOnSwitch}
            handleOnDelete={handleOnDelete}
          />
          <div className="alert alert-danger">
            Totoal money Spent On Holidays{" "}
            <span id="totalBudget">{totalMoney}</span>
          </div>

          {/* <!-- footer --> */}
        </div>
        <hr />
        <div className="footer d-flex align-items-center justify-content-center">
          <div>Copy right reserved made by Kabi with fun</div>
        </div>

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header style={{ backgroundColor: "green" }} closeButton>
            <Modal.Title
              id="example-custom-modal-styling-title"
              className="w-100 text-center"
            >
              <h3 style={{ color: "orange" }} className="text-center">
                Loading Please Wait ........
              </h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <p>
              <Spinner animation="grow" variant="success" />
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default App;
