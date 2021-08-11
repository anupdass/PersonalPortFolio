import React from 'react';
import './portItem.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const PortItem = (props) => {
    const { tools, img, name, discription, url } = props.data;
    console.log(tools)
    return (
        <div className='hover card p-3 m-3 col-md-5'>
            <div className='hover'>
                <img className="img-fluid w-100" src={img} />
            </div>
            <h1>{name}</h1>
            <small>{discription}</small>
            <div className='d-flex flex-wrap'>
                {
                    tools.map(tool => <div className='rounded bg-light m-2 p-2'>{tool}</div>)
                }
            </div>
            <div className='d-flex align-items-center '>
                <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon> 
                <a className='ms-3' target='_blank' href={url}>{url}</a>
            </div>
        </div>
    );
};

export default PortItem;