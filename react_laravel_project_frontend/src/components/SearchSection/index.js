import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const SearchSection = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());

    const [searchActive, setsearchState] = useState(false);


    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [adult, setCount] = useState(0);
    const adultincrementCount = () => {
        setCount(adult + 1);
    };
    const adultdecrementCount = () => {
        setCount(adult - 1);
    };

    const [child, setChild] = useState(0);
    const childincrementCount = () => {
        setChild(child + 1);
    };
    const childdecrementCount = () => {
        setChild(child - 1);
    };

    const [room, setroom] = useState(0);
    const roomincrementCount = () => {
        setroom(room + 1);
    };
    const roomdecrementCount = () => {
        setroom(room - 1);
    };


    return (
        <div className={`wpo-select-section ${props.svClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wpo-select-wrap">
                            <div className="wpo-select-area">
                                <form className="clearfix" onSubmit={SubmitHandler}>
                                    <div className="select-sub">
                                        <div className="input-group date">
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                            <i className="fi flaticon-calendar"></i>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        <div className="input-group date">
                                            <DatePicker selected={endDate} onChange={(date) => setendDate(date)} />
                                            <i className="fi flaticon-calendar"></i>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        <div className="form-group tourist-group">
                                            <div className="tourist-group-wrap">
                                                <div className="tourist-inner" onClick={() => setsearchState(!searchActive)}>
                                                    <i className="fi flaticon-user"></i>
                                                    <ul>
                                                        <li><input disabled type="text" id="adults" value={adult}/>Adults
                                                        </li>
                                                        <li><input disabled type="text" id="children" value={child}/>
                                                            Children</li>
                                                        <li><input disabled type="text" id="rooms" value={room}/> Room</li>
                                                    </ul>
                                                    <i className={`ti-angle-down ${searchActive ? "rotate" : ""}`}></i>
                                                </div>
                                                <div className={`tourist-dropdown ${searchActive ? "active" : ""}`}>
                                                    <div className="tourist-item">
                                                        <span>Adults</span>
                                                        <div className="tourist-item-group">
                                                            <button type="button" onClick={adultdecrementCount} id="adults_dec">-</button>
                                                            <input disabled id="adults_val" value={adult} type="text" />
                                                            <button type="button" onClick={adultincrementCount} id="adults_inc">+</button>
                                                        </div>
                                                    </div>
                                                    <div className="tourist-item">
                                                        <span>Children</span>
                                                        <div className="tourist-item-group">
                                                            <button type="button" onClick={childdecrementCount} id="children_dec">-</button>
                                                            <input disabled id="children_val" value={child} type="text" />
                                                            <button type="button" onClick={childincrementCount} id="children_inc">+</button>
                                                        </div>
                                                    </div>
                                                    <div className="tourist-item">
                                                        <span>Rooms</span>
                                                        <div className="tourist-item-group">
                                                            <button type="button" onClick={roomdecrementCount} id="rooms_dec">-</button>
                                                            <input disabled id="rooms_val" value={room} type="text" />
                                                            <button type="button" onClick={roomincrementCount} id="rooms_inc">+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="select-sub">
                                        <Link onClick={ClickHandler} className="theme-btn" to="/search-result">Check Availability</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SearchSection;

