import React from 'react'
import { FaAddressCard } from 'react-icons/fa';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import contact from '../images/contact.jpg'
var contactStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: `url(${contact})`
};


const Contact = () => {
    return (
        <div style={contactStyle}>
            <div class="contact">
            <div class="container">
                <h2 class="heading">Contact Us</h2>
                <p style={{ textAlign: 'center' }}>We like o create things with fun, open-minded people. Feel free to say Hello</p>
                <br /> <br />

                <div class="row">
                    <div class="col-md-6">
                        <form>
                            <input type="text" name="text" required="" placeholder="Your Name" class="form-control" /><br />
                            <input type="email" name="email" required="" placeholder="Your Email" class="form-control" /><br />
                            <textarea rows="6" required="" placeholder="Message" class="form-control"></textarea> <br />
                            <center>
                                <button class="btn btn-warning destibtn">Submit</button>
                            </center>
                        </form>                        
                    </div>
                    <div class="col-md-1"></div>

                            <div class="col-md-5">
                                <br />
                                <p>< FaAddressCard />&nbsp;&nbsp; Uttor Khan,Ajompur,Uttara,Dhaka.</p>
                                <p>< BiPhoneCall />&nbsp;&nbsp; 01687454958</p>
                                <p><HiOutlineMail />&nbsp;&nbsp; himelspark96@gmail.com</p>
                                <hr />

                                <div class="media">
                                    <ul class="list-unstyled">
                                        <li><FaFacebook/></li>
                                        <li><AiFillInstagram /></li>
                                        <li><AiFillTwitterCircle /></li>
                                        <li>< AiFillYoutube/></li>
                                        <li><  FaWhatsapp/></li>
                                    </ul>

                                </div>
                            </div>

                </div>

            </div>
        </div>
        </div>
        
    )
}

export default Contact
