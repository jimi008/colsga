<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 *
 */

get_header(); ?>

<div class="container">

	<div class="row align-stretch">

		<div <?php Awps\Core\Layout::content_attributes();?>>

			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">

					<?php
					if ( have_posts() ) :

						if ( is_home() && ! is_front_page() ) : ?>
							<header>
								<h1 class="page-title"><?php single_post_title(); ?></h1>
							</header>

						<?php
						endif;

						/* Start the Loop */
						while ( have_posts() ) : the_post();

							get_template_part( 'views/content', get_post_format() );

						endwhile;

						the_posts_navigation();

					else :

						get_template_part( 'views/content', 'none' );

					endif; ?>

				</main><!-- #main -->
			</div><!-- #primary -->

		</div><!-- .col- -->

		<?php if(Awps\Core\Layout::is_active_sidebar()) { ?>
			<div id="sidebar" class="col-sm-3">
				<?php get_sidebar(); ?>
			</div><!-- .col- -->
		<?php } ?>
	</div><!-- .row -->

</div><!-- .container -->

<?php
get_footer();