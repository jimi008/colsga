<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit44d4961f19462e595290542522399515
{
    public static $files = array (
        'b8fd78bd8bad42cf01fe03da49995a12' => __DIR__ . '/../..' . '/inc/Helpers.php',
    );

    public static $prefixLengthsPsr4 = array (
        'J' => 
        array (
            'Jvbpd\\' => 6,
        ),
        'D' => 
        array (
            'Dotenv\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Jvbpd\\' => 
        array (
            0 => __DIR__ . '/../..' . '/inc',
        ),
        'Dotenv\\' => 
        array (
            0 => __DIR__ . '/..' . '/vlucas/phpdotenv/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit44d4961f19462e595290542522399515::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit44d4961f19462e595290542522399515::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
