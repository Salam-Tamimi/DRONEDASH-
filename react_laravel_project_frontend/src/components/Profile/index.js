import React, { useState, useEffect } from 'react';
// import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import axios from '../../main-component/axios/axios';
import { throttle } from 'lodash';
import localStorage from 'redux-persist/es/storage';
import { useAuthContext } from "../../main-component/Contexts/ContextProvider";


function Profile() {
    const navigate = useNavigate();
    const { currentUser } = useAuthContext();
    console.log(currentUser)

    const [activeTab, setActiveTab] = useState('tab');
    const [editableField, setEditableField] = useState(null);
    const [userOrder, setUserOrder] = useState({
        item_id: '',
        date: '',
        time: '',
        location: '',
        notes: '',
        editing: '',
        totalPrice: ''
    });

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleEditClick = (field) => {
        setEditableField(field);
    };

    const [itemData, setItemData] = useState({
        item_name: '',
        cat_name: ''
    });

    const [userData, setUserData] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        image: '',
        password: '',
    });
    const [userPass, setUserPass] = useState('');

    const user_id = currentUser.id;


    /*------------------------------------------- getUserInfo API -------------------------------------------*/
    const getUserInfo = () => {
        axios
            .get(`/api/getUserInfo/${user_id}`)
            .then((response) => {
                setUserData(response.data);

            })
            .catch((error) => {
                console.error('Error fetching user info:', error);
            });
    };

    useEffect(() => {
        console.log('test');
        getUserInfo();
        console.log('test1222');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const oldPassword = e.target.elements.oldPass.value;
        const newPassword = e.target.elements.password.value;
        const confirmPassword = e.target.elements.confPass.value;

        if (oldPassword === userData.password) {
            if (newPassword === confirmPassword) {
                setUserPass(newPassword);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "New password and confirmation do not match",
                    showConfirmButton: false,
                    timer: 2500,
                });
                console.log('New password and confirmation do not match');
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Old password is incorrect",
                showConfirmButton: false,
                timer: 2500,
            });
            console.log('Old password is incorrect');
        }
    };

    useEffect(() => {
        if (userPass !== '') {
            const updateUserPass = async (param) => {
                // param.preventDefault();
                const csrfResponse = await axios.get("/get-csrf-token");
                const csrfToken = csrfResponse.data.csrf_token;

                axios.defaults.headers.common["XSRF-TOKEN"] = csrfToken;

                await axios
                    .put(`/api/updateUserPass/${userData.id}`, {
                        password: userPass,
                    })
                    .then((response) => {
                        Swal.fire({
                            icon: "success",
                            title: "Your Password updated successfully",
                            showConfirmButton: false,
                            timer: 2500,
                        });
                        console.log('Password changed successfully');
                    })
                    .catch((error) => {
                        console.error('Error updating password:', error);
                    });
            };
            updateUserPass();
        }
    }, [userPass, userData.id]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imagePreview = event.target.result;
                setUserData({ ...userData, image: imagePreview });
            };
            reader.readAsDataURL(file);

            setUserData({ ...userData, image: file });
        }
    };

    const handleEditInfo = async (param) => {
        param.preventDefault();
        const csrfResponse = await axios.get("/get-csrf-token");
        const csrfToken = csrfResponse.data.csrf_token;

        axios.defaults.headers.common["XSRF-TOKEN"] = csrfToken;

        // console.log(userData);

        if (editableField === 'image') {
            const formData = new FormData();
            formData.append('image', param.target.elements.image.files[0]);

            await axios
                .post(`/api/updateUserImage/${userData.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    console.log('User image updated successfully');
                })
                .catch((error) => {
                    console.error('Error updating user image:', error);
                });
        }

        await axios
            .put(`/api/updateUserInfo/${userData.id}`, userData)
            .then((response) => {
                console.log('User information updated successfully');
            })
            .catch((error) => {
                console.error('Error updating user information:', error);
            });

        Swal.fire({
            icon: "success",
            title: "Your information updated successfully",
            showConfirmButton: false,
            timer: 2500,
        });

        setEditableField(null);
    }

    let itemId = 0;
    // let item_name = '';
    let catId = 0;
    // let cat_name = '';

    const getTheLastUserOrder = async () => {

        await axios
            .get(`/api/getTheLastUserOrder/${user_id}`)
            .then((response) => {
                console.log(response.data.item.category.name);
                itemData.item_name = response.data.item.name;
                itemData.cat_name = response.data.item.category.name;

                setUserOrder({
                    item_id: response.data.item_id,
                    date: response.data.date,
                    time: response.data.time,
                    location: response.data.location,
                    notes: response.data.notes,
                    editing: response.data.editing,
                    totalPrice: response.data.totalPrice
                });
            })

    }
    const ThrottledGetTheLastUserOrder = throttle(getTheLastUserOrder, 1000);

    useEffect(() => {
        ThrottledGetTheLastUserOrder(user_id, setUserOrder);
    }, [user_id]);


    return (
        <div>
            <link
                rel="stylesheet"
                type="text/css"
                href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
            />
            <div className="container bootstrap snippets bootdey">
                <hr />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="well profile">
                            <img
                                className="user img-circle pull-left clearfix col-lg-1"
                                height="65"
                                style={{ marginBottom: '10px' }}
                                // width="54"
                                src={`${process.env.PUBLIC_URL}/${userData.image}`}
                                alt={userData.name}
                            />
                            <h3 className="name pull-left clearfix" style={{ marginLeft: '10px' }}>{userData.name}</h3>
                            <div className="clearfix"></div>
                            <ul className="nav nav-tabs">
                                <li className={activeTab === 'tab' ? 'active' : ''}>
                                    <a href="#tab" data-toggle="tab" onClick={() => handleTabClick('tab')}>
                                        User Information
                                    </a>
                                </li>
                                <li className={activeTab === 'tab2' ? 'active' : ''}>
                                    <a href="#tab2" data-toggle="tab" onClick={() => handleTabClick('tab2')}>
                                        Change Password
                                    </a>
                                </li>
                                <li className={activeTab === 'tab3' ? 'active' : ''}>
                                    <a href="#tab3" data-toggle="tab" onClick={() => handleTabClick('tab3')}>
                                        Your Booking
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className={`tab-pane ${activeTab === 'tab' ? 'active' : ''}`} id="tab">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                                            <div>
                                                <br />
                                                <form onSubmit={handleEditInfo} method="PUT">

                                                    <div style={{ marginLeft: '20px', width: '50%' }}>
                                                        <h4 style={{ display: 'inline' }}>Name:</h4>
                                                        {editableField === 'name' ? (
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className="form-control"
                                                                value={userData.name}
                                                                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                                            />
                                                        ) : (
                                                            <span style={{ display: 'inline', marginLeft: '10px' }}>{userData.name}</span>
                                                        )}
                                                        {editableField !== 'name' && (
                                                            <FontAwesomeIcon
                                                                color='black'
                                                                icon={faEdit}
                                                                onClick={() => handleEditClick('name')}
                                                                style={{ cursor: 'pointer', marginLeft: '5px', float: 'right' }}
                                                            />
                                                        )}
                                                        <br /><br />

                                                        <h4 style={{ display: 'inline' }}>Email:</h4>
                                                        {editableField === 'email' ? (
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                className="form-control"
                                                                value={userData.email}
                                                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                                            />
                                                        ) : (
                                                            <span style={{ display: 'inline', marginLeft: '10px' }}>{userData.email}</span>
                                                        )}
                                                        {editableField !== 'email' && (
                                                            <FontAwesomeIcon
                                                                color='black'
                                                                icon={faEdit}
                                                                onClick={() => handleEditClick('email')}
                                                                style={{ cursor: 'pointer', marginLeft: '5px', float: 'right' }}
                                                            />
                                                        )}
                                                        <br /><br />

                                                        <h4 style={{ display: 'inline' }}>Phone:</h4>
                                                        {editableField === 'phone' ? (
                                                            <input
                                                                type="text"
                                                                name="phone"
                                                                className="form-control"
                                                                value={userData.phone}
                                                                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                                                            />
                                                        ) : (
                                                            <span style={{ display: 'inline', marginLeft: '10px' }}>{userData.phone}</span>
                                                        )}
                                                        {editableField !== 'phone' && (
                                                            <FontAwesomeIcon
                                                                icon={faEdit}
                                                                color='black'
                                                                onClick={() => handleEditClick('phone')}
                                                                style={{ cursor: 'pointer', marginLeft: '5px', float: 'right' }}
                                                            />
                                                        )}
                                                        <br /><br />

                                                        <h4>Image: </h4>
                                                        {editableField === 'image' ? (
                                                            <input
                                                                type="file"
                                                                name="image"
                                                                className="form-control"
                                                                onChange={handleImageChange}
                                                            />
                                                        ) : (
                                                            <img
                                                                className="i user pull-left clearfix col-lg-8"
                                                                style={{ borderRadius: '20%' }}
                                                                height="240"
                                                                width='240'
                                                                src={userData.image}
                                                                alt={userData.name}
                                                            />
                                                        )}
                                                        {editableField !== 'image' && (
                                                            <FontAwesomeIcon
                                                                icon={faEdit}
                                                                color='black'
                                                                onClick={() => handleEditClick('image')}
                                                                style={{ cursor: 'pointer', marginLeft: '5px', float: 'right' }}
                                                            />
                                                        )}
                                                    </div>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <br></br>
                                                    <button type='submit' className='theme-btn' style={{ display: 'block' }}>Save</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === 'tab2' ? 'active' : ''}`} id="tab2">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="basic" style={{ marginLeft: '10px' }}>
                                                    <h4>Change Your Password</h4><br></br>
                                                    <form className="form-horizontal" onSubmit={handleSubmit} method="PUT" style={{ marginLeft: '10px' }}>
                                                        <label htmlFor="oldPass">Current Password:</label>
                                                        <div className="form-field2">
                                                            <input name="oldPass" type="password" id="oldPass" required />
                                                        </div>

                                                        <label htmlFor="password">New Password:</label>
                                                        <div className="form-field2">
                                                            <input name="password" type="password" id="password" required />
                                                        </div>

                                                        <label htmlFor="confPass">Confirm New Password:</label>
                                                        <div className="form-field2">
                                                            <input name="confPass" type="password" id="confPass" required />
                                                        </div>
                                                        <br></br>
                                                        <br></br>
                                                        <button type="submit" className="theme-btn">Change</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === 'tab3' ? 'active' : ''}`} id="tab3">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="basic">
                                                    <section className="wpo-about-section-s2 section-padding" style={{ background: 'none', padding: '60px 0px' }}>
                                                        <div className="container-fluid">
                                                            <div className="">
                                                                <div className="row align-items-center">
                                                                    <div className="col-xl-5 col-lg-8 col-md-8 col-12 offset-xl-6 offset-lg-4 offset-md-2" style={{ marginLeft: '280px' }}>
                                                                        <div className="wpo-about-content">
                                                                            <div className="about-title">
                                                                                <span>{itemData.item_name}</span>
                                                                                <h2>{itemData.cat_name}</h2>
                                                                            </div>
                                                                            <div className="wpo-about-content-inner">
                                                                                <div className="about-info-wrap">
                                                                                    <div className="about-info-left">
                                                                                        <p>Date / Time</p>
                                                                                        <p>{userOrder.date} / {userOrder.time}</p>
                                                                                        {/* <ul>
                                                                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                                            <li><span><i className="fa fa-star" aria-hidden="true"></i></span></li>
                                                                                        </ul> */}
                                                                                    </div>
                                                                                    <div className="about-info-right">
                                                                                        <p>Location</p>
                                                                                        <h3>{userOrder.location}</h3>
                                                                                    </div>
                                                                                    <div className="about-info-right">
                                                                                        <p>Price</p>
                                                                                        <h3>{userOrder.totalPrice}</h3>
                                                                                    </div>
                                                                                    <Link className="theme-btn" to="/pdf">Print</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
