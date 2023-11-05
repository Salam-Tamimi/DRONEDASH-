import React from 'react'
import { Link } from 'react-router-dom'
import simg1 from '../../images/room/img-7.jpg'
import simg2 from '../../images/room/img-8.jpg'

import rv1 from '../../images/room/r1.jpg'
import rv2 from '../../images/room/r2.jpg'
import RoomSidebar from './RoomSidebar'

const RoomDetails = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="Room-details-area pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="room-description">
                            <div className="room-title">
                                <h2>Description</h2>
                            </div>
                            <p className="p-wrap">It's difficult to find examples of lorem ipsum in use before Letraset made
                                it popular as a dummy text in the 1960s, although McClintock says he remembers coming
                                across the lorem ipsum passage in a book of old metal type samples.</p>
                            <p>So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging. It's
                                like the props in a furniture store—filler text makes it look like someone is home. The
                                same Wordpress template might eventually be home to a fitness blog, a photography
                                website, or the online journal of a cupcake fanatic. Lorem ipsum helps them imagine what
                                the lived-in website might look like.</p>
                            <p>Second, use lorem ipsum if you think the placeholder text will be too distracting. For
                                specific projects, collaboration between copywriters and designers may be best, however,
                                like Karen McGrane said, draft copy has a way of turning any meeting about layout
                                decisions into a discussion about word choice. So don't be afraid to use lorem ipsum to
                                keep everyone focused.</p>
                        </div>


                        <div className="room-details-service">
                            <div className="row">
                                <div className="room-details-item">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5">
                                            <div className="room-d-text">
                                                <div className="room-title">
                                                    <h2>Amenities</h2>
                                                </div>
                                                <ul>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">Refrigerator and water</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">Air Conditioner Facilities</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">Fruits are always available</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">2 Sets of nightwear</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">Tables and Chairs</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">2 Elevator Available</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">Room Side Belcony</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-7">
                                            <div className="room-d-img">
                                                <img src={simg1} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-7">
                                            <div className="room-d-img">
                                                <img src={simg2} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-sm-5">
                                            <div className="room-d-text2">
                                                <div className="room-title">
                                                    <h2>Room Services</h2>
                                                </div>
                                                <ul>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">Daily Cleaning</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">Special Swimming Pool</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">Free Parking</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">Free-to-use smartphone </Link></li>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">Free Wifi</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">2 Elevator Available</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/room-single/1">Room Side Belcony</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="pricing-area">
                            <div className="room-title">
                                <h2>Pricing Plans</h2>
                            </div>
                            <div className="pricing-table">
                                <table className="table-responsive pricing-wrap">
                                    <thead>
                                        <tr>
                                            <th>Mon</th>
                                            <th>Tue</th>
                                            <th>Wed</th>
                                            <th>Thu</th>
                                            <th>Fri</th>
                                            <th>Sat</th>
                                            <th>Sun</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>$250</td>
                                            <td>$250</td>
                                            <td>$250</td>
                                            <td>$250</td>
                                            <td>$250</td>
                                            <td>$250</td>
                                            <td>$250</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="map-area">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
                            </div>
                        </div>
                        <div className="room-review">
                            <div className="room-title">
                                <h2>Room Reviews</h2>
                            </div>
                            <div className="review-item">
                                <div className="review-img">
                                    <img src={rv1} alt=""/>
                                </div>
                                <div className="review-text">
                                    <div className="r-title">
                                        <h2>Marry Watson</h2>
                                        <ul>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                </div>
                            </div>
                            <div className="review-item">
                                <div className="review-img">
                                    <img src={rv2} alt=""/>
                                </div>
                                <div className="review-text">
                                    <div className="r-title">
                                        <h2>Lily Havenly</h2>
                                        <ul>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                        </ul>
                                    </div>
                                    <p> Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                        lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                        <div className="add-review">
                            <div className="room-title">
                                <h2>Add Review</h2>
                            </div>
                            <div className="wpo-blog-single-section review-form ">
                                <div className="give-rat-sec">
                                    <p>Your rating *</p>
                                    <div className="give-rating">
                                        <label>
                                            <input type="radio" name="stars" value="1" />
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="stars" value="2" />
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="stars" value="3" />
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="stars" value="4" />
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="stars" value="5" />
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="review-add">
                                    <div className="comment-respond">
                                        <form id="commentform" className="comment-form" onSubmit={SubmitHandler}>
                                            <div className="form-inputs">
                                                <input placeholder="Your Name*" type="text" />
                                                <input placeholder="Your Email*" type="email" />
                                            </div>
                                            <div className="form-textarea">
                                                <textarea id="comment" placeholder="Your Review"></textarea>
                                            </div>
                                            <div className="form-check">
                                                <div className="shipp pb">
                                                    <input type="checkbox" id="c2" name="cc" />
                                                    <label htmlFor="c2"><span></span>Save my name, email, and website in
                                                        this browser for the next time I comment.</label>
                                                </div>
                                            </div>
                                            <div className="form-submit">
                                                <input id="submit" value="Submit Now" type="submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <RoomSidebar/>
                </div>
            </div>
        </div>
    )
}

export default RoomDetails;