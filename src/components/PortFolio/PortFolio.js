import React from 'react';
import SideMenu from '../SideMenu/SideMenu'
import Data from '../FakeData/FakeData.js'
import PortItem from '../PortItem/PortItem';

const PortFolio = () => {
    const use = Data.use;
    console.log(use)
    return (
        <div className="row w-100" >
            <SideMenu></SideMenu>
            <div className="col-md-9 ms-auto p-3" >
                <div className='row d-flex w-100'>
                    {
                        Data.map(data => <PortItem data={data}></PortItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PortFolio;