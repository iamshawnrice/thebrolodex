<?php

// Enable CORS if working locally (necessary for webpack-dev-server)
if (site_url() === 'http://localhost:8888/public/api') {
  function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
  }

  add_action('init','add_cors_http_header');
}

?>
