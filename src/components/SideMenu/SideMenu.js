import React from 'react';
import './SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTwitter , faGithub} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const SideMenu = () => {
    return (
        <div className='bgcolor position-fixed d-flex flex-column col-md-3  justify-content-center align-items-center'>

            <div className='align-self-center' style={{ position:'relative'}}>
                <img className='img-fluid ' style={{ borderRadius: '100%',height:'150px',width:'150px',border:'5px solid white' }} src="https://ae01.alicdn.com/kf/Hcca185921fd54583a7c7f6cc50a2e9a95/UV400-Square-Glasses-Frame-Men-Male-Clear-Fake-Glasses-Eyeglass-Fashion-Transparent-Optical-Spectacles-Frames-TR90.jpg" alt="" />
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center mt-5 style' >
                <Link to='/' style={{textDecoration:'none'}}><a style={{textDecoration:'none'}} href="#" className='text-white mt-2 '>Home</a></Link>
                <Link to='/about' style={{textDecoration:'none'}}><a style={{textDecoration:'none'}} href="#" className='text-white mt-2 '>About Me</a></Link>
                <Link to='/portfolio' style={{textDecoration:'none'}}><a style={{textDecoration:'none'}} href="#" className='text-white mt-2 '>Portfolio</a></Link>
                <Link to='/' style={{textDecoration:'none'}}><a style={{textDecoration:'none'}} href="#" className='text-white mt-2 '>Contact Me</a></Link>

            </div>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <a target='_blank' href="https://www.facebook.com/anup.dass.ad/"><FontAwesomeIcon className='m-3 text-white' icon={faFacebook}></FontAwesomeIcon></a>
                <FontAwesomeIcon className='m-3 text-white' icon={faTwitter}></FontAwesomeIcon>
                <FontAwesomeIcon className='m-3 text-white' icon={faGithub}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default SideMenu;