import React from 'react';
import SideMenu from '../SideMenu/SideMenu'
import './About.css'

const About = () => {
    return (
        <div className='row w-100'>
            <SideMenu></SideMenu>
            <div className="col-md-9 ms-auto p-5 mt-5 ">
                <div>
                    <h1 className='text-center'>Know Me More</h1>
                    <div className="model mb-5"></div>
                </div>
                <div className="row d-flex align-items-center" >
                    <div className="col-md-8">
                        <h2>I'm Anup Das, a Web Developer</h2>
                        <p>I help you build brand for your business at an affordable price. Hundred of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                    </div>
                    <div className="col-md-4">
                        <p><b>Name</b>      : Anup Chandra Das</p>
                        <p><b>Birth Date</b>: 7/12/1998</p>
                        <p><b>Present</b>   : Mirpur 10,Dhaka</p>
                        <p><b>Permanent</b> : Dhanbari,Tangail,Dhaka</p>
                        <div className="btn btn-primary text-center">Download CV</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;