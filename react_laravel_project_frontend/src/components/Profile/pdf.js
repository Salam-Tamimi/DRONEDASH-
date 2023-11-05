import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from '../../main-component/axios/axios';
import { throttle } from 'lodash';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useAuthContext } from "../../main-component/Contexts/ContextProvider";



function PDF() {
    const { currentUser } = useAuthContext();

    const pdfRef = useRef(null);

    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('landscape', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - pdfWidth * ratio) / 50;
            const imgY = 5;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('DroneDash.pdf');
        })
    }

    const [userOrder, setUserOrder] = useState({
        item_id: '',
        date: '',
        time: '',
        location: '',
        notes: '',
        editing: '',
        totalPrice: ''
    });

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

    let user_id = currentUser.id;

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
        getUserInfo();
    }, []);

    let itemId = 0;
    // let item_name = '';
    let catId = 0;
    // let cat_name = '';

    const getTheLastUserOrder = async () => {

        await axios
            .get(`/api/getTheLastUserOrder/${user_id}`)
            .then((response) => {
                itemId = response.data.item_id;
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
        <div ref={pdfRef}>
            <div className="container bootstrap snippets bootdey">
                <hr />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 well profile">
                        <section className="wpo-about-section-s2 section-padding" style={{ background: 'none', padding: '60px 0px' }}>
                            {/* <img src='../../images/DroneDash__3_-removebg-preview.png' /> */}
                            <div className="container-fluid">
                                <div className="">
                                    <h2>{userData.name}</h2>
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
                                                        <button className="theme-btn" onClick={downloadPDF}>Download PDF</button>
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

    );
}

export default PDF;
