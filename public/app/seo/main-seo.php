<?php

    // 0. Creating an array
    $seo = array();

    // 1. Adding the seo

    //
    // Default keywords
    $defaultKeywords = 'PHP, Framework, web, smart, easy, to, use, builded by Cyril de Wit';

    //
    // Default twitter settings
    $twitter = array();
    $twitter['default']['site'] = '@cyrildewit';

    //
    // $config['base_url']/
    $seo['root-index'] = array(
        'title' => 'Home - Company',
        'description' => 'This is a basic description of a webpage.',
        'application-title' => 'Home - Comapny',
        'location' => '',
        'keywords' => '',
        'og:image' => '',
        'twitter:card' => '',
        'twitter:site' => '',
        'twitter:title' => '',
        'twitter:description' => '',
        'twitter:image' => '',
        'twitterImage' => ''
    );

    //
    // $config['base_url']/sample_page
    $seo['root-sample_page'] = array(
        'title' => 'Sample Page - Company',
        'description' => 'This is a basic example of a webpage.',
        'application-title' => 'Sample Page - Comapny',
        'location' => 'sample_page',
        'keywords' =>  $defaultKeywords . ' ' . 'Pasta',
        'facebookImage' => '',
        'twitterImage' => ''
    );
