import React from 'react';
// import { Link } from '@inertiajs/inertia-react';

const SideBarLayout =({children}) =>{
    return (
        <>
            <h1>Sidebar Layout</h1>     
            
            <main>
                { children }
            </main>
        </>
    )
}

export default SideBarLayout;
