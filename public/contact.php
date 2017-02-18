<?php
    require_once dirname(__FILE__) . '/app/bootstrap.php';

    $thisPage = $seo['root-index'];

    include SITEPATH . '/app/includes/header.php';
?>

        <main class="container">
            <h1>Hello World from contact.php page!</h1>
            <ul>
                <li>Home :: <a href="<?= SITE_URL ?>"><?= SITE_URL ?></a></li>
                <li>About :: <a href="<?= SITE_URL . '/about' ?>"><?= SITE_URL . '/about' ?></a></li>
                <li>Contact :: <a href="<?= SITE_URL. '/contact' ?>"><?= SITE_URL. '/contact' ?></a></li>
            </ul>
            <script src="<?= RSC_URL ?>/assets/js/scripts.js"></script>
        </main>

<?php
    include './app/includes/footer.php';
?>
