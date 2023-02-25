//import React
import React from 'react';

//import Link
import { Link } from '@inertiajs/inertia-react';

function Layout({ children }) {
    return (
        <>
            <h1>Judul : Belajar React </h1>

            <h2>{ children }</h2>
        </>
    );
}