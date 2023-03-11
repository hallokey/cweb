import React from 'react';
import TopBar from '../Main/TopBarLayout';
import SideBar from '../Main/SideBarLayout';
import FooterLayout from '../Main/FooterLayout';

function StarterPage(){
    return (
        <>
        <TopBar></TopBar>
        <SideBar>
            <h1>Selamat Datang di Starter Pages</h1>
        </SideBar>               
        <FooterLayout></FooterLayout>
        </>
    );
}

export default StarterPage;