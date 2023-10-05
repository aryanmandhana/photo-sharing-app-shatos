import React, { useState, useContext } from "react";
import { LoginContext } from "../../common/components/context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./NewLocation.css";
const NewLocation = () => {
    const login = useContext(LoginContext);
    const history = useHistory();
    const [error, setError] = useState(null);
    const [picture, setPicture] = useState();
    const [newlocation, setNewLocation] = useState({
        title: "",
        desc: "",
        address: "",
    })

    const submitHandler = async (event) => {
        event.preventDefault();
        setError(null);
        try {

            const formdata = new FormData();
            formdata.append("title", newlocation.title);
            formdata.append("desc", newlocation.desc);
            formdata.append("address", newlocation.address);
            formdata.append("userid", login.userId)
            formdata.append("pic", picture);
            const response = await fetch("http://localhost:5000/", {
                method: 'POST',
                // headers: {
                //     "Content-type": "application/json",
                // },
                // body: JSON.stringify({
                //     title: newlocation.title,
                //     desc: newlocation.desc,
                //     address: newlocation.address,
                //     userid: login.userId,
                // })
            })
            const responseData = await response.json();
            console.log("new location page : ", responseData.message);
            if (!response.ok) {
                throw new Error(responseData.message);
            }
            history.push("/");
        } catch (err) {
            alert(err.message, () => {
                setError(null);
            })
            setError(err.message);
        }



    };

    const changeHandler = (event) => {
        const newValue = event.target.value;
        const inputname = event.target.name;

        setNewLocation((previousvalue) => {
            if (inputname === "newlocationdesc") {
                return {
                    title: previousvalue.title,
                    desc: newValue,
                    address: previousvalue.address,
                }
            }

            else if (inputname === "newlocationtitle") {
                return {
                    title: newValue,
                    desc: previousvalue.desc,
                    address: previousvalue.address,
                }
            }


            else if (inputname === "newlocationaddr") {
                return {
                    title: previousvalue.title,
                    desc: previousvalue.desc,
                    address: newValue,
                }
            }
        }
        );
    };
    const getPicHandler = (event) => {
        let picfile;
        if (event.target.files && event.target.files.length === 1) {
            picfile = event.target.files[0];
            setPicture(picfile);
            // console.log(picfile);
        } else {
            alert("Photo not uploaded", () => {
                setError(null);
            });
        }
    };

    return (
        <form className="location-form" onSubmit={submitHandler}>
            <div className="form-control">
                <label>
                    Title
                    <input name="newlocationtitle" type="text" required
                        onChange={changeHandler}
                    />
                </label>
            </div>
            <div className="form-control">
                <label>
                    Description
                    <textarea name="newlocationdesc" rows="3" type="text" required
                        onChange={changeHandler}
                    />
                </label>
            </div>
            <div className="form-control">
                <label>
                    Address
                    <input name="newlocationadrr" type="text" required
                        onChange={changeHandler}
                    />
                </label>
            </div>
            <div className="form-control">
                <label>
                    upload picture

                    <input name="newimagefile"
                        type="file"
                        accept="image/png,image/jpg,image/jpeg"
                        required
                        onChange={getPicHandler}
                    />
                </label>
            </div>
            <div className="form-control">
                <button>Submit</button>
            </div>
        </form>
    );
};


export default NewLocation;


