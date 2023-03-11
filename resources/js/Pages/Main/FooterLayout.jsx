import React from 'react';
// import { Link } from '@inertiajs/inertia-react';

const FooterLayout =({children}) =>{
    return (
        <>
            <footer class="footer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6">
                            <script>document.write(new Date().getFullYear())</script> © Chains | Church Attendance Information System
                        </div>
                        <div class="col-sm-6">
                            <div class="text-sm-end d-none d-sm-block">
                                Powered by : Ultra Solution
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterLayout;
