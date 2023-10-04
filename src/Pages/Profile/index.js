import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Edit, Trash } from "react-feather";

const Profile = () => {
  const [userinfo, setUserinfo] = useState(
    JSON.parse(localStorage.getItem("signupdata")) || []
  );

  const deleteUser = (index) => {
    const updatedUserinfo = [...userinfo];
    updatedUserinfo.splice(index, 1);
    setUserinfo(updatedUserinfo);
    localStorage.setItem("signupdata", JSON.stringify(updatedUserinfo));
  };
  const [rowId, setRowId] = useState();
  const [errors, setErrors] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const handleClose = () => {
    setOpenModal(false);
    setErrors({});
    setInputValue({});
  };
  const handleOnAdd = () => {
    setOpenModal(true);
    setIsEdit(false);
  };
  const handleOnEdit = (item, i) => {
    setInputValue(item);
    setOpenModal(true);
    setIsEdit(true);
    setRowId(i);
  };
  const validate = () => {
    let isFormValid = true;
    let errors = {};

    if (inputValue && !inputValue?.address) {
      isFormValid = false;

      errors["address"] = "Please enter your adress!";
    }

    if (!inputValue?.phonenumber || inputValue?.phonenumber === "") {
      isFormValid = false;

      errors["phonenumber"] = "Please enter phone number!";
    } else if (!/^[0-9]{10}$/.test(inputValue.phonenumber)) {
      isFormValid = false;

      errors["phonenumber"] = "Invalid phone number format";
    }

    setErrors(errors);
    return isFormValid;
  };
  const handleOnSubmit = () => {
    if (validate()) {
      const existingDataString = localStorage.getItem("signupdata");
      const existingData = existingDataString
        ? JSON.parse(existingDataString)
        : [];

      existingData.push(inputValue);
      setUserinfo(existingData);
      localStorage.setItem("signupdata", JSON.stringify(existingData));
      setErrors({});
      setInputValue({});
      setOpenModal(false);
    }
  };

  const handleOnEditSubmit = () => {
    const existingDataString = localStorage.getItem("signupdata");
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];

    existingData[rowId] = inputValue;
    setUserinfo(existingData);

    localStorage.setItem("signupdata", JSON.stringify(existingData));
    setErrors({});
    setInputValue({});
    setOpenModal(false);
  };
  console.log(rowId);

  return (
    <>
    <br></br>
   
      <Modal show={openModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">
            {isEdit ? "Edit Page " : "Add page"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <div class="right-column">
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
              <label className="form-label"> Address</label>
              <input
                type="text"
                placeholder="Enter address"
                name="address"
                value={inputValue?.address}
                onChange={(e) => handleOnChange(e)}
                className="form-input"
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                  }
                }}
              />
              <span className="error-message">{errors.address}</span>
              <div>
                <button
                  onClick={() => {
                    isEdit ? handleOnEditSubmit() : handleOnSubmit();
                  }}
                  className="submit-button"
                >
                  {isEdit ? "Edit data" : "Add data"}
                </button>

                <button
                  style={{ backgroundColor: "red" }}
                  className="submit-button"
                  onClick={() => handleClose()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <table className="profile-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Action   &nbsp;   <button
         type="button"
         class="btn btn-primary"
        onClick={() => {
          handleOnAdd();
        }}
      >
        Add data
      </button></th>
          </tr>
        </thead>
        <tbody>
          {userinfo.length > 0 &&
            userinfo.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.phonenumber}</td>
                <td>{item.address ? item.address : "-"}</td>
                <td>
                  <div >
                    <Trash  size={20}  onClick={() => deleteUser(i)}/>
                    &nbsp;&nbsp;
                    <Edit size={20} onClick={() => handleOnEdit(item, i)} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Profile;
