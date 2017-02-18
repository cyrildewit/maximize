<?php
/**
 * Maximize Flint - A Basic Built-in Application setup
 *
 * @package  Maximize
 * @author   Cyril de Wit <info@cyrildewit.nl>
 */

$theHead = '';

// add charset meta tag
$theHead .= '<meta charset="' . $config['meta']['charset'] . '" />';

// add viewport meta tag
$theHead .= '<meta name="viewport" content="' . $config['meta']['viewport'] . '" />';

// add optional author meta tag
if ( $config['meta']['author'] ) {
    $theHead .= '<meta name="author" content="' . $config['meta']['author'] . '" />';
}

// add Handeld Friendly meta tag
$theHead .= '<meta name="HandheldFriendly" content="' . $config['meta']['HandheldFriendly'] . '" />';

// add optional Mobile Optimized meta tag
if ( $config['meta']['MobileOptimized'] ) {
    $theHead .= '<meta name="MobileOptimized" content="' . $config['meta']['MobileOptimized'] . '" />';
}

// add canonical link tag
$thisPageCanonical = SITEPATH . $thisPage['location'];
$theHead .= '<link rel="canonical" href="' . $thisPageCanonical . '" />';

// add og:url meta tag
$theHead .= '<meta property="og:url" content="' . $thisPageCanonical . '" />';

// add robots meta tag
$theHead .= '<meta name="robots" content="' . $config['meta']['robots'] . '" />';

// add optional revisit-after meta tag
if ( $config['meta']['revisit-after'] ) {
    $theHead .= '<meta name="revisit-after" content="' . $config['meta']['revisit-after'] . '" />';
}

// add X-UA-Compatible meta tag
if ( $config['meta']['X-UA-Compatible'] ) {
    $theHead .= '<meta name="revisit-after" content="' . $config['meta']['X-UA-Compatible'] . '" />';
}

// add kewords meta tag
if ( empty($thisPage['keywords']) ) {
    $thisPageKeywords = $defaultKeywords;
} else {
    $thisPageKeywords = $thisPage['keywords'];
}
if ( $config['meta']['kewords'] === true ) {
    $theHead .= '<meta name="keywords" content="' . $thisPageKeywords . '" />';
}

// add title tag
$theHead .= '<title>' . $thisPage['title'] . '</title>';

// add descripton meta tag
$theHead .= '<meta name="description" content="' . $thisPage['description'] . '" />';

// add open graph title meta tag
$theHead .= '<meta property="og:title" content="' . $thisPage['title'] . '" />';

// add open graph image meta tag
if ( !empty($thisPage['og:image']) ) {
    $theHead .= '<meta property="og:image" content="' . $thisPage['og:image'] . '" />';
}

// add twitter:card meta tag
if ( empty($thisPage['twitter:card']) ) {
    $theHead .= '<meta name="twitter:card" content="summary" />';
} else {
    $theHead .= '<meta name="twitter:card" content="' . $thisPage['twitter:card'] . '" />';
}

// add twitter:site meta tag
if ( empty($thisPage['twitter:site']) ) {
    $theHead .= '<meta name="twitter:site" content="' . $twitter['default']['site'] . '" />';
} else {
    $theHead .= '<meta name="twitter:site" content="' . $thisPage['twitter:site'] . '" />';
}

// add twitter:title meta tag
if ( empty($thisPage['twitter:title']) ) {
    $theHead .= '<meta name="twitter:title" content="' . $thisPage['title'] . '" />';
} else {
    $theHead .= '<meta name="twitter:title" content="' . $thisPage['twitter:title'] . '" />';
}

// add twitter:description meta tag
if ( empty($thisPage['twitter:description']) ) {
    $theHead .= '<meta name="twitter:description" content="' . $thisPage['description'] . '" />';
} else {
    $theHead .= '<meta name="twitter:description" content="' . $thisPage['twitter:description'] . '" />';
}

// add twitter:image meta tag
if ( !empty($thisPage['twitter:image']) ) {
    $theHead .= '<meta name="twitter:image" content="' . $thisPage['twitter:image'] . '" />';
}

// add apple mobile web app tile meta tag

$theHead .= '';
$theHead .= '';
$theHead .= '';
$theHead .= '';





echo $theHead;
