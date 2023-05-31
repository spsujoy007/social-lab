import React, { useContext, useState } from "react";
import { useLottie } from "lottie-react";
import loginManAnimatin from "../../assests/logingif.json";
import { Link, useNavigate } from "react-router-dom";
import "../Home/Home.css";
import { AuthContext } from "../../Context/AuthProvider";
import { crudContext } from "../../Context/DataProvider";
import { toast } from "react-hot-toast";

const Singup = () => {
  const { createUser } = useContext(AuthContext);
  const {createUserForDB} = useContext(crudContext)
  const navigate= useNavigate('')
  
  const [profilePic, setProfiePic] = useState(""); //get only file of image
  const [selectedImg, setSelectedImg] = useState(""); //get temporary image url
  const [loading, setLoading] = useState(false)

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

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true)

    // const photo = urlOfImage;
    const first_name = form.first_name.value;
    const last_name = form.last_name.value;
    const full_name = first_name + ' ' + last_name;
    const mobile = form.phone.value;
    const email = form.email.value;
    const username = email.split('@')[0] + '_sl'
    const password = form.password.value;

      const formData = new FormData()
      formData.append('file', profilePic)
      formData.append('upload_preset', 'social-lab');
      formData.append('cloud_name', 'dfxhlbsf2');
      fetch(`https://api.cloudinary.com/v1_1/dfxhlbsf2/upload`, {
        method: "POST",
        body: formData
      })
      .then(res => res.json())
      .then(data => {

        createUser(email, password) // for  google sign
        .then(result => {
          if(result.user.uid){
            const userDatas = {
              photoURL: data.url,
              first_name,
              last_name,
              full_name,
              username,
              mobile,
              email,
              password
            }
            // for store the data of user in backend 
            createUserForDB(userDatas)
            navigate('/')
            toast.success("Account created")
            setLoading(false)
          }
        })
        .catch(e => console.error(e))
      })



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
              <div className="bg-transparent  p-3 mb-6 rounded-full">
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
                {
                  loading ?
                  <button type="submit" className="w-full bg-primary loading px-5 py-2 text-white rounded-md">
                    Account creating...
                  </button>
                  :
                  <button type="submit" className="w-full bg-primary px-5 py-2 text-white rounded-md">
                    Sign up
                  </button>
                }

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
