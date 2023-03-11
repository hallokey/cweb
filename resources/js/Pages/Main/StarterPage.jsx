import React from 'react';
import TopBar from '../Main/TopBarLayout';
import SideBar from '../Main/SideBarLayout';
import FooterLayout from '../Main/FooterLayout';
import CustomizerLayout from '../Main/CustomizerLayout';

function StarterPage(){
    return (
        <>
        {/* Copy from Here */}
        {/* Begin page */}
        <div id="layout-wrapper">
            <TopBar></TopBar>
            <SideBar></SideBar>

            {/* Start right Content here */}
            <div class="main-content">
                <div class="page-content">
                    <div class="container-fluid">
                        {/* Content Here */}
                        <h1>Testing Page</h1>
                    </div>               
                </div>
                {/* End Page Content */}
            <FooterLayout></FooterLayout>
            </div>
            {/* End Main Content */}
        </div>
        {/* End layout Wrapper */}

        {/* Customizer */}
        <CustomizerLayout></CustomizerLayout>

        {/* End copy here */}
        </>
    );
}

export default StarterPage;