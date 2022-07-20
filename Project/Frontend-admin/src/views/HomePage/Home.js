import React from "react";
// import { withRouter } from "react-router";
// // import Color from "../HOC/Color";
// import logo from "../../assets/images/bg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from "@fortawesome/free-solid-svg-icons"
import { faHouseUser } from "@fortawesome/free-solid-svg-icons"
import { faFlag } from "@fortawesome/free-solid-svg-icons"
import car from "./oto.jpg";
import car2 from "./car2.png";
import car3 from "./car3.jpg";
import car4 from "./car4.jpg";

import "./Home.scss"
import { Carousel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tonken from "../../services/token";
class Home extends React.Component {
    // componentDidMount() {
    //     // setTimeout(() => {
    //     //     this.props.history.push('/todo')
    //     // }, 3000)  // hàm sẽ thực thi sau 3s, hàm này giúp chuyển trang
    // }
    render() {
        return (
            <>
                <div className="home-detail" >
                    <div className="home-header">
                        <div style={{ height: "5vh" }}></div>
                        <div className="page-title">Home Page of Admin</div>
                    </div>

                    <div id="carouselExampleSlidesOnly" class="carousel slide d-flex align-items-center justify-content-center car-slide" data-ride="carousel">
                        <div>
                            <div className='container-fluid' >
                                <div className="row">
                                    <div className="col-12">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={car3}
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3 >Good Car</h3>
                                                    <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={car3}
                                                    alt="Second slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3>Good Car</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={car3}
                                                    alt="Third slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3 >Good Car</h3>
                                                    <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                        crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
                        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                        crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
                        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                        crossorigin="anonymous"></script>
                </div>

            </>

        )
    }
}
// export default withRouter(Home);
// HOC dung hợp các thuộc tính của cái bọc và cái component trong
export default Home;