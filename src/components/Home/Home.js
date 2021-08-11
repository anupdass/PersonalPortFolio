import React from 'react';
import './Home.css'
import SideMenu from '../SideMenu/SideMenu';

const Home = () => {
    return (
        <div className="row w-100" >
            <SideMenu></SideMenu>
            <div className="col-md-9 ms-auto" >
                <div className="home d-flex flex-column justify-content-center align-items-center">
                    <h1>Welcome to My Website</h1>
                    <button className='btn btn-primary mt-3'> <a className='text-white' target='_blank' href="https://github.com/anupdass">Visit My Git Hub Link</a> </button>
                </div>
            </div>
        </div>
    );
};

export default Home;