// import axios from "../axios";
import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { createUserAPI, generateUserAPI, getUsersAPI } from "../api";
// import { usersURL } from "../url";

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

const Users = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [change, setChange] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const refresh = () => {
    setChange((prev) => !prev);
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const getUsers = () => {
    // axios.get(usersURL).then((res) => {
    //   console.log(res.data);
    //   setUsers(res.data);
    // });
    const doGetUsers = async () => {
      try {
        const result = await getUsersAPI();
        console.log("Successfully fetched all users", result);
        setUsers(result);
      } catch (error) {
        console.log("error fetching users", error);
      }
    };
    doGetUsers();
  };
  const doGenerateUser = async () => {
    try {
      const result = await generateUserAPI();
      console.log("generation successful", result);
    } catch (error) {
      console.log("generation error", error);
    }
    // axios.post(usersURL, {
    //   // id: faker.datatype.uuid(),
    //   first_name: faker.name.firstName(),
    //   last_name: faker.name.lastName(),
    //   email: faker.internet.email(),
    //   avatar: faker.internet.avatar(),
    //   address: faker.address.city(),
    //   dob: faker.date.birthdate(),
    //   phone: faker.phone.number(),
    //   password:faker.internet.password(),
    //   username:faker.internet.userName()
    // });
    refresh();
  };
  const onSubmit = async (data) => {
    try {
      const result = await createUserAPI(data);
      console.log("creation successful", result);
      reset();
      closeModal();
      refresh();
    } catch (error) {
      console.log("creation error", error);
    }
    // axios
    //   .post(usersURL, {
    //     first_name: data.firstName,
    //     last_name: data.lastName,
    //     email: data.email,
    //     address: data.address,
    //     dob: data.dob,
    //     phone: data.phone,
    //     password: data.password,
    //     username: data.username,
    //     avatar: faker.internet.avatar(),
    //   })
    //   .then((res) => {
    //     reset();
    //     closeModal();
    //     refresh();
    //   })
    //   .catch((err) => {
    //     alert(err.response.data.message);
    //     console.log(err.response);
    //   });
  };
  useEffect(() => {
    getUsers();
    return () => {
      getUsers();
    };
  }, [change]);
  return (
    <div className="Pages">
      <div className="">
        {/* <Card title="Users" list={users} refresh={refresh} isTable /> */}
        <div className="Card">
          <div className="d-flex justify-content-between mb-2">
            <h2>Users</h2>
            <div>
              <button onClick={openModal}>Add User</button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="User Add"
                ariaHideApp={false}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h3>Add Users</h3>
                  <button className="closeBtn" onClick={closeModal}>
                    X
                  </button>
                </div>
                <div className="modal">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                      <span>First name</span>
                      <input
                        type="text"
                        {...register("first_name", { required: true })}
                      />
                    </label>
                    <label>
                      <span>Last name</span>
                      <input
                        type="text"
                        {...register("last_name", { required: true })}
                      />
                    </label>
                    <label>
                      <span>Password</span>
                      <input
                        type="password"
                        {...register("password", { required: true })}
                      />
                    </label>
                    <label>
                      <span>Username</span>
                      <input
                        type="text"
                        {...register("username", { required: true })}
                      />
                    </label>
                    <label>
                      <span>Email</span>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                      />
                    </label>
                    <label>
                      <span>Address</span>
                      <input type="text" {...register("address")} />
                    </label>
                    <label>
                      <span>Phone</span>
                      <input type="number" {...register("phone")} />
                    </label>
                    <label>A Random Avatar will be Generated</label>
                    <button type="submit" value="submit">
                      Add User
                    </button>
                  </form>
                </div>
              </Modal>
              <button onClick={doGenerateUser}>Generate User</button>
            </div>
          </div>
          <Table list={users} count={users.length} />
        </div>
      </div>
    </div>
  );
};

export default Users;
