// import axios from "./../axios";
import React, { useEffect, useState } from "react";
// import { usersURL } from "../url";
import Modal from "react-modal";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { deleteUserAPI, getUserProfileAPI, updateUserAPI } from "../api";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#ebecff",
    border: "none",
    width: "450px",
    maxHeight: "80vh",
  },
  overlay: {
    background: "#0000006c",
  },
};

const UserProfile = () => {
  const navigate = useNavigate();
  let subtitle;
  const location = useLocation();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [profile, setProfile] = useState([]);
  const [change, setChange] = useState(false);
  const { register, handleSubmit } = useForm();
  
  console.log(location.state.props.id);
  const refresh = () => {
    setChange((prev) => !prev);
  };
  function openModal1() {
    setIsOpen(true);
  }
  function openModal2() {
    setIsOpen2(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal1() {
    setIsOpen(false);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  const getUserProfile = () => {
    const doGetUsers = async (id) => {
      try {
        const result = await getUserProfileAPI(id);
        console.log(id);
        console.log("successfully fetched user", result);
        setProfile(result);
      } catch (error) {
        console.log("error fetching user", error);
      }
    };
    doGetUsers(location.state.props.id);
  };
  useEffect(() => {
    getUserProfile();
    // axios.get(`${usersURL}?id=${location.state.props.id}`).then((res) => {
    //   setProfile(res.data[0]);
    // });
    return () => {
      getUserProfile();
    };
  }, [change]);

  const deleteUser = () => {
    const doDeleteUser = async (id) => {
      try {
        const result = await deleteUserAPI(id);
        console.log("deletion successful", result);
      } catch (error) {
        console.log("deletion error", error);
      }
    };
    doDeleteUser(location.state.props.id);
    // axios
    //   .delete(`${usersURL}/${location.state.props.id}`, {
    //     data: { id: profile.id },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    closeModal2();
    returnBack();
  };

  const returnBack = () => {
    navigate("/users", { replace: true });
  };

  const editSubmit = (data) => {
    const doUpdateUser = async (id, data) => {
      try {
        const result = await updateUserAPI(id, data);
        console.log("updation successful", result);
        closeModal1();
        refresh();
      } catch (error) {
        console.log("updation error", error);
      }
    };
    doUpdateUser(location.state.props.id, {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      address: data.address,
      dob: data.dob,
      phone: data.phone,
      username: data.username,
    });
    // axios
    //   .put(`${usersURL}/${location.state.props.id}`, {
    //     first_name: data.firstName,
    //     last_name: data.lastName,
    //     email: data.email,
    //     address: data.address,
    //     dob: data.dob,
    //     phone: data.phone,
    //     username: data.username,
    //   })
    //   .then((res) => {
    //     console.log("success");
    //     closeModal1();
    //     refresh();
    //   });
  };
  return (
    <div className="Pages">
      <button className="backBtn" onClick={returnBack}>
        Back
      </button>
      <div className="Card">
        <div className="container d-flex justify-content-evenly">
          <div>
            <div>
              {profile ? <img src={profile.avatar} alt={profile.avatar} /> : ""}
            </div>
            <h4 className="mt">ID: {profile ? profile.id : ""}</h4>
            <h4>First Name: {profile ? profile.first_name : ""}</h4>
            <h4>Last Name: {profile ? profile.last_name : ""}</h4>
            <h4>Username: {profile ? profile.username : ""}</h4>
            <h4>Email: {profile ? profile.email : ""}</h4>
            <h4>Address: {profile ? profile.address : ""}</h4>
            <h4>Phone: {profile ? profile.phone : ""}</h4>
          </div>
          <div className="d-flex flex-column">
            <button className="profileBtn" onClick={openModal1}>
              Edit
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal1}
              style={customStyles}
              contentLabel="Edit User"
              ariaHideApp={false}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h3>Edit User</h3>
                <button className="closeBtn" onClick={closeModal1}>
                  X
                </button>
              </div>
              <div className="modal">
                <form onSubmit={handleSubmit(editSubmit)}>
                  <label>
                    <span>First name</span>
                    <input
                      defaultValue={profile ? profile.first_name : ""}
                      type="text"
                      {...register("firstName", { required: true })}
                    />
                  </label>
                  <label>
                    <span>Last name</span>
                    <input
                      defaultValue={profile ? profile.last_name : ""}
                      type="text"
                      {...register("lastName", { required: true })}
                    />
                  </label>
                  <label>
                    <span>Username</span>
                    <input
                      defaultValue={profile ? profile.username : ""}
                      type="text"
                      {...register("username", { required: true })}
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      defaultValue={profile ? profile.email : ""}
                      type="email"
                      {...register("email", { required: true })}
                    />
                  </label>
                  <label>
                    <span>Address</span>
                    <input
                      type="text"
                      defaultValue={profile ? profile.address : ""}
                      {...register("address")}
                    />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input
                      type="text"
                      defaultValue={profile ? profile.phone : ""}
                      {...register("phone")}
                    />
                  </label>
                  <button type="submit" value="submit">
                    Edit User
                  </button>
                </form>
              </div>
            </Modal>
            <button className="profileBtn" onClick={openModal2}>
              Delete
            </button>
            <Modal
              isOpen={modalIsOpen2}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal2}
              style={customStyles}
              contentLabel="Edit User"
              ariaHideApp={false}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h3>Delete Users</h3>
                <button className="closeBtn" onClick={closeModal2}>
                  X
                </button>
              </div>
              <div className="modal">
                <h4>
                  Are you sure you want to delete{" "}
                  {profile ? profile.first_name : ""}{" "}
                  {profile ? profile.last_name : ""}?
                </h4>
                <span className="d-flex justify-content-center">
                  <button className="m-5" onClick={deleteUser}>
                    Yes
                  </button>
                  <button className="m-5" onClick={closeModal2}>
                    No
                  </button>
                </span>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
