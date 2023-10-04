import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link,  useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./Navbar.scss";
import { Eye, EyeOff } from "react-feather";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../../img/Random Symboles 3.png";
import logoimg from "../../../img/TheBox.png";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [inputValue, setInputValue] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfrimPassword] = useState(false);

  const userinfo = localStorage.getItem("logindata");
  console.log("userinfo", userinfo);
  const navigate = useNavigate();

  const handleOnSignup = () => {
    setOpenModal(true);
    setLoginModal(false);
  };
  const handleOnLogin = () => {
    setOpenModal(true);
    setLoginModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
    setErrors({});
  };
  useEffect(() => {
    console.log("aaaaaa");
  }, [userinfo]);

  const validate = () => {
    let isFormValid = true;
    let errors = {};

    if (inputValue && !inputValue?.firstname) {
      isFormValid = false;

      errors["firstname"] = "Please enter your first name!";
    }

    if (!inputValue?.phonenumber || inputValue?.phonenumber === "") {
      isFormValid = false;

      errors["phonenumber"] = "Please enter phone number!";
    } else if (!/^[0-9]{10}$/.test(inputValue.phonenumber)) {
      isFormValid = false;

      errors["phonenumber"] = "Invalid phone number format";
    }

    if (inputValue && !inputValue?.email) {
      isFormValid = false;

      errors["email"] = "Please enter your email!";
    }

    if (inputValue?.email && regexEmail.test(inputValue.email) === false) {
      isFormValid = false;

      errors["email"] = "Please enter a valid email!";
    }

    if (!inputValue?.password || inputValue?.password === "") {
      isFormValid = false;

      errors["password"] = "Please enter a password!";
    }

    if (!inputValue?.confirmpassword || inputValue?.confirmpassword === "") {
      isFormValid = false;

      errors["confirmpassword"] = "Please confirm your password!";
    }

    if (inputValue?.password !== inputValue?.confirmpassword) {
      isFormValid = false;

      errors["confirmpassword"] = "Passwords do not match!";
    }

    setErrors(errors);
    return isFormValid;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const regexEmail =
    /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i;
  const handleOnSubmit = () => {
    if (validate()) {
      const existingDataString = localStorage.getItem("signupdata");
      const existingData = existingDataString
        ? JSON.parse(existingDataString)
        : [];

      existingData.push(inputValue);

      localStorage.setItem("signupdata", JSON.stringify(existingData));

      setInputValue({ email: "", password: "" });
      toast.success("Login successfully");
      setLoginModal(true);
      setErrors({});
    } else {
      toast.error("Unknown error occurred");
    }
  };

  const handleOnLoginSubmit = () => {
    const storedDataString = localStorage.getItem("signupdata");
    const storedData = storedDataString ? JSON.parse(storedDataString) : [];
    const foundUser = storedData.find(
      (user) =>
        user.email === inputValue.email && user.password === inputValue.password
    );

    if (foundUser) {
      setInputValue({});
      toast.success("Login successfully");
      localStorage.setItem("logindata", JSON.stringify(inputValue));

      setOpenModal(false);

      navigate("/");
      setErrors({});
    } else {
      toast.error("user not found");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfrimPasswordVisibility = () => {
    setConfrimPassword(!showConfirmPassword);
  };

  console.log(errors);

  const handleOnLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} /> <span></span>
          <img src={logoimg} />
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {userinfo ? (
            <>
              <Button onClick={()=>handleOnLogout()}>Logout</Button>
            </>
          ) : (
            <>
              <Button onClick={()=>handleOnSignup()}>Signup</Button>
              <Button onClick={()=>handleOnLogin()}>Login</Button>
            </>
          )}
        </ul>
      </nav>

      <Modal show={openModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">
            {loginModal ? "Login Page " : "Signup page"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <ToastContainer />
            <div class="right-column">
              {loginModal && (
                <span>
                  Don't have account ?
                  <span onClick={handleOnSignup}>SignUp</span>
                </span>
              )}
              {!loginModal && (
                <>
                  <p>
                    Already have an account?{" "}
                    <span onClick={handleOnLogin}>Login page</span>
                  </p>
                  <h4>Signup</h4>
                  <label className="form-label"> Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="firstname"
                    value={inputValue?.firstname}
                    onChange={(e) => handleOnChange(e)}
                    className="form-input"
                    onKeyDown={(e) => {
                      if (e.key === " ") {
                        e.preventDefault();
                      }
                    }}
                  />
                  <span className="error-message">{errors.firstname}</span>
                  <label className="form-label">Phone number</label>
                  <input
                    type="number"
                    placeholder="enter phonenumber"
                    name="phonenumber"
                    value={inputValue?.phonenumber}
                    className="form-input"
                    onKeyDown={(e) => {
                      if (
                        e.key === "e" ||
                        e.key === "E" ||
                        e.key === "+" ||
                        e.key === "-"
                      ) {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) => {
                      if (e.target.value.length <= 10) {
                        handleOnChange(e);
                      }
                    }}
                  />
                  <span className="error-message">{errors.phonenumber}</span>{" "}
                </>
              )}

              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={inputValue?.email}
                onChange={(e) => handleOnChange(e)}
                className="form-input"
              />
              <span className="error-message">{errors.email}</span>

              <label className="form-label">Password</label>
              <div className="input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  value={inputValue?.password}
                  onChange={(e) => handleOnChange(e)}
                  className="form-input with-icon"
                  onKeyDown={(e) => {
                    if (e.key === " ") {
                      e.preventDefault();
                    }
                  }}
                />
                <div
                  className="icon-container"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </div>
              </div>
              <span className="error-message">{errors.password}</span>
              {!loginModal && (
                <>
                  <label className="form-label">Confrim password</label>
                  <div className="input-container">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Enter confirmpassword"
                      name="confirmpassword"
                      value={inputValue?.confirmpassword}
                      onChange={(e) => handleOnChange(e)}
                      className="form-input with-icon"
                      onKeyDown={(e) => {
                        if (e.key === " ") {
                          e.preventDefault();
                        }
                      }}
                    />
                    <div
                      className="icon-container"
                      onClick={toggleConfrimPasswordVisibility}
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={14} />
                      ) : (
                        <Eye size={14} />
                      )}
                    </div>
                  </div>
                  <span className="error-message">
                    {errors.confirmpassword}
                  </span>
                  <div>
                    <input type="checkbox" />
                    <span>i agree terms & conditions</span>
                  </div>
                </>
              )}
              <div>
                <button
                  onClick={() => {
                    loginModal ? handleOnLoginSubmit() : handleOnSubmit();
                  }}
                  className="submit-button"
                >
                  {loginModal ? "Login" : "Signup"}
                </button>

                <button
                  style={{ backgroundColor: "red" }}
                  className="submit-button"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
