import React from 'react';
// import { Link } from '@inertiajs/inertia-react';

const SideBarLayout =() =>{
    return (
        <>
            <div class="app-menu navbar-menu">
                <div class="navbar-brand-box">
                    {/* Dark Logo */}
                    <a href="index" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="/assets/images/logo-sm.png" alt="" height="22" />
                        </span>
                        <span class="logo-lg">
                            <img src="/assets/images/logo-dark.png" alt="" height="17" />
                        </span>
                    </a>

                    {/* Light Logo */}
                    <a href="index" class="logo logo-light">
                        <span class="logo-sm">
                            <img src="/assets/images/logo-sm.png" alt="" height="22" />
                        </span>
                        <span class="logo-lg">
                            <img src="/assets/images/logo-light.png" alt="" height="17" />
                        </span>
                    </a>

                    <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                        <i class="ri-record-circle-line"></i>
                    </button>
                </div>

                <div id="scrollbar">
                    <div class="container-fluid">
                        <div id="two-column-menu"></div>

                        <ul class="navbar-nav" id="navbar-nav">
                            <li class="menu-title"><span>Menu</span></li>
                            <li class="nav-item">
                                <a class="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                                    <i class="ri-dashboard-2-line"></i> <span>Dashboard</span>
                                </a>
                                <div class="collapse menu-dropdown" id="sidebarDashboards">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <a href="dashboard-analytics" class="nav-link">Analisa</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="dashboard-crm" class="nav-link">Event <span class="badge badge-pill bg-success">New</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                        <ul class="navbar-nav" id="navbar-nav">
                            <li class="menu-title"><span>Master Data</span></li>
                            <li class="nav-item">
                                <a class="nav-link menu-link" href="#sidebarUsers" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarUsers">
                                    <i class="ri-account-pin-box-line"></i> <span>Pengguna</span>
                                </a>
                                <div class="collapse menu-dropdown" id="sidebarUsers">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <a href="dashboard-analytics" class="nav-link">Admin</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="dashboard-crm" class="nav-link">Jemaat</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link menu-link" href="#">
                                    <i class="ri-home-2-line"></i> <span>Gereja</span>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link menu-link" href="#">
                                    <i class="ri-calendar-check-fill"></i> <span>Agenda</span>
                                </a>
                            </li>
                        </ul>

                        <ul class="navbar-nav" id="navbar-nav">
                            <li class="menu-title"><span>Konfigurasi</span></li>
                            <li class="nav-item">
                                <a class="nav-link menu-link" href="#">
                                    <i class="ri-global-line"></i> <span>Website</span>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link menu-link" href="#">
                                    <i class="ri-qr-scan-2-line"></i> <span>Kehadiran</span>
                                </a>
                            </li>
                        </ul>

                        <ul class="navbar-nav" id="navbar-nav">
                            <li class="menu-title"><span>Kehadiran</span></li>
                            <li class="nav-item">
                                <a class="nav-link menu-link" href="#">
                                    <i class="ri-file-list-3-line"></i> <span>Daftar Hadir</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sidebar-background"></div>
            </div>     

            {/* Vertical Overlay */}
            <div class="vertical-overlay"></div>
        </>
    )
}

export default SideBarLayout;
