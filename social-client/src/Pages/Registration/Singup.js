import React, { useContext, useState } from "react";
import { useLottie } from "lottie-react";
import loginManAnimatin from "../../assests/logingif.json";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import { AuthContext } from "../../Context/AuthProvider";

const Singup = () => {
  const { user, createUser } = useContext(AuthContext);
  // console.log(user);
  const [profilePic, setProfiePic] = useState("");
  const [selectedImg, setSelectedImg] = useState("");

  const options = {
    animationData: loginManAnimatin,
    loop: true,
  };
  const { View } = useLottie(options);

  const handleSelectImage = (e) => {
    const img = e.target.files[0];
    const url = URL.createObjectURL(img);
    setProfiePic(img);
    setSelectedImg(url);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;

    const photo = profilePic;
    const first_name = form.first_name.value;
    const last_name = form.last_name.value;
    const full_name = first_name + ' ' + last_name;
    const mobile = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(
      photo,
      first_name,
      last_name,
      full_name,
      mobile,
      email,
      password
    );
    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(e => console.error(e))
    


  };


  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <div className="p-10 flex items-center gap-20 bg-[#ffffff6a] rounded-xl justify-center">
        <div>{View}</div>
        <div>
          <h1 className="text-3xl text-primary font-bold uppercase">
            Sign Up Now
          </h1>
          <form onSubmit={handleSignUp}>

            <div className="mt-5 w-[500px]">
              {/* select Photo of id  */}
              <div className="bg-[#ffffff65] commonShadow p-3 mb-6 rounded-full">
                <label
                  htmlFor="selectPhoto"
                  className="flex items-center gap-5 text-black"
                >
                  <div className="w-[80px] overflow-hidden h-[80px] flex items-center justify-center rounded-full bg-gray-100  ring-primary ring-2">
                    {selectedImg ? (
                      <img className="" src={selectedImg} alt="profile img" />
                    ) : (
                      <h1 className="text-4xl">+</h1>
                    )}
                  </div>
                  <div>
                    <h5>Tap to select profile picture</h5>
                  </div>
                </label>

                <input
                  onChangeCapture={(e) => {
                    handleSelectImage(e);
                  }}
                  id="selectPhoto"
                  className="hidden"
                  type="file"
                />
              </div>

              <div className="flex items-center gap-x-5">
                {/* first name  */}
                <div>
                  <label htmlFor="" className="text-black mb-1">
                    First name
                  </label>
                  <input
                    name="first_name"
                    className="bg-[#ffffff35] border-b-[1px] border-primary text-black outline-none p-3  w-full"
                    type="text"
                    placeholder="first name"
                  />
                </div>
                {/* last name  */}
                <div>
                  <label htmlFor="" className="text-black mb-1">
                    Last name
                  </label>
                  <input
                    name="last_name"
                    className="bg-[#ffffff6a] border-b-[1px] border-primary text-black outline-none p-3  w-full"
                    type="text"
                    placeholder="last name"
                  />
                </div>
              </div>

              <div>
                <div className="mt-3">
                  <label htmlFor="phone" className="text-black mb-1">
                    Phone number
                  </label>
                  <input
                    name="phone"
                    id="phone"
                    className="bg-[#ffffff6a] border-b-[1px] border-primary text-black outline-none p-3  w-full"
                    type="tel"
                    placeholder="+8801800000008"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="email" className="text-black mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    className="bg-[#ffffff6a] border-b-[1px] border-primary text-black outline-none p-3  w-full"
                    type="email"
                    placeholder="john@gmail.com"
                  />
                </div>

                <div className="mt-3">
                  <label htmlFor="password" className="text-black mb-1">
                    Create a Password
                  </label>
                  <input
                    name="password"
                    id="password"
                    className="bg-[#ffffff6a] border-b-[2px] border-primary text-black outline-none p-3  w-full"
                    type="password"
                    placeholder="create a strong password"
                  />
                </div>
              </div>

              <div className="mt-5">
                <button type="submit" className="w-full bg-primary px-5 py-2 text-white rounded-md">
                  Sign up
                </button>

                <p className="mt-2 text-black">
                  If you already have an account please{" "}
                  <Link className="text-primary font-bold" to={"/login"}>
                    login
                  </Link>
                  !{" "}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
