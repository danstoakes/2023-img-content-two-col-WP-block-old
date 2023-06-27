<?php
/**
 * Plugin Name: Image Beside Content Block
 * Plugin URI: https://github.com/danstoakes/2023-img-content-two-col-WP-plugin
 * Description: A simple plugin for creating an Image Beside Content block.
 * Version: 1.0.0
 * Author: Dan Stoakes
 */

defined("ABSPATH") || exit;

function danstoakes_img_content_two_col_register_block () 
{
	if (!function_exists("register_block_type"))
		return;

	register_block_type( __DIR__ ); // location of block.json
}

add_action("init", "danstoakes_img_content_two_col_register_block");