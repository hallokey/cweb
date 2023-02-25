//import React
import React from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import Link
import { Link } from '@inertiajs/inertia-react';

export default function PostIndex({ data }) {
    { data.map((d, index) => (
        <h2>{ d.att_config_id }</h2>
    ))}
}