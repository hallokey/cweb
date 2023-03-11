<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CFAuthController extends Controller
{
    public function Index(){
        $ptype = 'signin';

        return Inertia::render('Auth/AuthSignin', [
            'ptype' => $ptype,
        ]);
    }
}
