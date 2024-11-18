import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Signup.module.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { UserRegistration } from "@/redux/slice/UserRegistrationslice";
import { useSelector } from "react-redux";

const Registrationpage = () => {
  const [UserData, SetUserData] = useState({
    emailid: "",
    mobileno: "",
    password: "",
  });
  const dispatch = useDispatch();

  const Registerhandler = () => {
    dispatch(UserRegistration(UserData));
    //const data=useSelector(state)=>state.users
    //console.log(UserData);
    SetUserData({ emailid: "", mobileno: "", password: "" });
    toast.success("registration has been done successfully");
  };

  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.topbox}>
          <Image
            className="logo"
            src={"next.svg"}
            alt="logo image"
            height={100}
            width={100}
            priority
          ></Image>
          <h2>Registration Page</h2>
        </div>
        <div className={styles.middlebox}>
          <label>Enter Email Id</label>
          <input
            name="emailid"
            type="text"
            onChange={(e) => {
              SetUserData((previousdata) => ({
                ...previousdata,
                [e.target.name]: e.target.value,
              }));
            }}
          />

          <label>Enter Mobile no</label>
          <input
            name="mobileno"
            type="text"
            onChange={(e) => {
              SetUserData((previousdata) => ({
                ...previousdata,
                [e.target.name]: e.target.value,
              }));
            }}
          />

          <label>Enter Password</label>
          <input
            name="password"
            type="text"
            onChange={(e) => {
              SetUserData((previousdata) => ({
                ...previousdata,
                [e.target.name]: e.target.value,
              }));
            }}
          />
        </div>
        <div className={styles.lastbox}>
          <button
            onClick={() => {
              Registerhandler();
            }}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Registrationpage;
