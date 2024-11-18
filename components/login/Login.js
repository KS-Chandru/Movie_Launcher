import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "@/styles/Login.module.css";
import { toast } from "react-toastify";
import visible from "@/public/visibility.svg";
import invisible from "@/public/invisibility.svg";

const Login = () => {
  const [Username, SetUsername] = useState("");
  const [Password, SetPassword] = useState("");
  const [Login, SetLogin] = useState(false);
  const [visibility, SetVisibility] = useState(false);
  const [passtxt, SetPasstxt] = useState(false);

  const LoginClickHandler = () => {
    if (Username === "Admin" && Password === "Admin") {
      toast.success("Login Successfull");
      SetLogin(true);
    } else {
      toast.error("Username or Password incorrect");
    }
  };

  const visiblitytoggle = () => {
    if (visibility === false) {
      SetVisibility(true);
      SetPasstxt(true);
    } else {
      SetVisibility(false);
      SetPasstxt(false);
    }
  };
  return (
    <>
      <div className={Styles.outerlogindiv}>
        <div>
          <Image
            className="logo"
            src={"next.svg"}
            alt="logo image"
            height={100}
            width={100}
            priority
          ></Image>
          <h2>Login Page</h2>
        </div>
        <div className={Styles.datapoint}>
          <label className={Styles.labels} htmlFor="">
            User Name
          </label>
          <input
            onChange={(e) => {
              SetUsername(e.target.value);
            }}
            type="text"
            className={Styles.txt}
          />

          <label className={Styles.labels} htmlFor="">
            Password
          </label>
          <div className={Styles.passdiv}>
            <input
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
              type={passtxt ? "Text" : "password"}
              className={Styles.passtxt}
            />
            <button
              className={Styles.privacy}
              onClick={() => {
                visiblitytoggle();
              }}
            >
              {visibility ? (
                <Image
                  className={Styles.privacy}
                  src={visible}
                  alt="privacy true image"
                  height={25}
                  width={25}
                  priority
                ></Image>
              ) : (
                <Image
                  className={Styles.privacy}
                  src={invisible}
                  alt="privacy false image"
                  height={25}
                  width={25}
                  priority
                ></Image>
              )}
            </button>
          </div>
        </div>
        <div className={Styles.click}>
          <button
            onClick={() => {
              LoginClickHandler();
            }}
            className={Styles.btn}
          >
            Login
          </button>
          <Link href={"/Signup"}>
            <button className={Styles.btn}>SignUp</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
