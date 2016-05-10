<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'shawnric_bro1');

/** MySQL database username */
define('DB_USER', 'shawnric_bro1');

/** MySQL database password */
define('DB_PASSWORD', 'OyR36FYZyKnk');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '<zET=@|h3;_Sa^^xe-Vn_&n#d>dm44+j4h`eKZo4+t{NUZT3!#M*SR;!s1dj,/:8');
define('SECURE_AUTH_KEY',  '5:suth`g&R:BD<pmgGlRW;v#aC%<{1ub0DLJj7gaP|$`4#rsKga{e4|CW?Lt7Tt3');
define('LOGGED_IN_KEY',    'DMpA(vF+.od?1cc-^JDFqu(@u{n B-@gzFa.9lh5+:>cw96hb7[!i[#Y^@F>Zu|Z');
define('NONCE_KEY',        'L@:B}xfomV(W]4XVs#fh-wXa?Ic5Erk0pr2I_#4jaY3(|sVp+9?uy[RSva*4>@B~');
define('AUTH_SALT',        '?k{/Hk%iRb}c2}kro`K::]oMf-PRO,9fcT1$-4#!1Q#,* P(i}C|^$a2& !SZJeq');
define('SECURE_AUTH_SALT', 'qTyP1fiOiA}9A,6/7B3iPu+|TZ<x:11%A=eoC|/)1>H.az2Vrs?1i.JQ:R1+A.7]');
define('LOGGED_IN_SALT',   'Tsx-P+5x3n4SdX#Cj|,C>1+`t[66o`j0e%%ytG,xDl`/h4o.A+zo-,9AXexGJ-[n');
define('NONCE_SALT',       'd,[.Fo%V8|Y|X1B.:gJVYg)Z*L|kWNlAu{3d{L)xz|5PSJTceR<|%mYgS^- :q3b');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'bro1_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

/* Enables JWT Authentication for WP REST API: https://github.com/Tmeister/wp-api-jwt-auth */
define('JWT_AUTH_SECRET_KEY', 'SpDX/z-=Y!Ca]ErRP1c& 5Qg-&,cU.I1W5tt*BV||hIJ*-FnU85jGI:hgNy9oln_');
define('JWT_AUTH_CORS_ENABLE', true);
