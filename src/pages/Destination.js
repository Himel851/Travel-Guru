import React from 'react'
import coxBazar from "../images/coxBazar.jpg"
import sajek from "../images/sajek.jpg"
import sundorban from "../images/sundorban.jpg"
import destination from "../images/destination.jpg"

const Destination = () => {

    var sectionStyle = {
        width: "100%",
        height: "600px",
        backgroundImage: `url(${destination})`
    };

    return (
        <div class="destination" >
            <div class="container-fluid" style={sectionStyle}>
                <div class="row destinationInner">
                    <div class="col-4 text-light m-auto">

                        <h1>Cox's bazar</h1>
                        <p>Cox's Bazar is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.</p>

                    </div>
                    <div class="col-2 m-auto p-1">
                        <div class="card mt-5" style={{ width: '200px' }}>
                            <img class="card-img-top " src={coxBazar} alt="Card image"
                                style={{ width: '100%', height: '300px' }} />
                            <div class="card-body m-auto">
                                <h4 class="card-title">Cox's Bazar</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-2 m-auto p-1">
                        <div class="card mt-5" style={{ width: '200px' }}>
                            <img class="card-img-top" src={sajek} alt="Card image"
                                style={{ width: '100%', height: '300px' }} />
                            <div class="card-body m-auto">
                                <h4 class="card-title">Sajek Valley</h4>
                            </div>

                        </div>
                    </div>
                    <div class="col-2 m-auto p-1">
                        <div class="card mt-5" style={{ width: '200px' }}>
                            <img class="card-img-top" src={sundorban} alt="Card image"
                                style={{ width: '100%', height: '300px' }} />
                            <div class="card-body m-auto">
                                <h4 class="card-title">Sundaran</h4>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-warning mt-5">Booking</button>
                </div>
            </div>

        </div>
    )
}

export default Destination
