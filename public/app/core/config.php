<?php

/**
 * Maximize Flint - A Basic Built-in Application setup
 *
 * @package  Maximize
 * @author   Cyril de Wit <info@cyrildewit.nl>
 */

/*
|--------------------------------------------------------------------------
| Create global variable
|--------------------------------------------------------------------------
*/

 $config = array();


/*
|--------------------------------------------------------------------------
| Base information
|--------------------------------------------------------------------------
*/

$config['http']['localhost_address'] = '127.0.0.1:4000'; // like localhost
$config['http']['localhost_path'] = ''; // leave empty if you are using a port

/**
 * Checking the current used protocol (HTTP or HTTPS)
 * and assign value to the GLOBAL `$config` variable.
 */
if ( stripos($_SERVER['SERVER_PROTOCOL'], 'https') ) {
    // Assigning `https` to the GLOBAl `$config` variable.
    $config['http']['current'] = 'https';

} else {
    // Assigning `http` to the GLOBAl `$config`  variable.
    $config['http']['current'] = 'http';
 }

/**
 * Checking if the user is viewing the web application on localhost,
 * if so, then it will use the defined path. If not, then it will use
 * the current value of the server HTTP_HOST variable.
 * This gives us the ability to develop the web application on localhost
 * servers with ports instead of paths.
 *
 * @ example: if host === localhost:4000, the value of the `SITE_URL` constant will be http://localhost:4000
 */
define('SITE_URL', $config['http']['current'] . '://' . $_SERVER['HTTP_HOST']);
define('SITEPATH', $_SERVER['DOCUMENT_ROOT']);

define('RSC_URL', SITE_URL . '/assets');


/*
|--------------------------------------------------------------------------
| Meta information
|--------------------------------------------------------------------------
*/

$config['meta']['charset'] = 'utf-8';
$config['meta']['viewport'] = 'width=device-width, initial-scale=1.0';
$config['meta']['author'] = '';
$config['meta']['HandheldFriendly'] = '';
$config['meta']['MobileOptimized'] = '';
$config['meta']['robots'] = 'index, follow';
$config['meta']['revisit-after'] = '';
$config['meta']['X-UA-Compatible'] = '';
$config['meta']['kewords'] = true;
