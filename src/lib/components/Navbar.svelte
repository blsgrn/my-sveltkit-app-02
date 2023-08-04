<script>
	import { page } from '$app/stores';
	import Close from '$lib/components/Icon/Close.svelte';
	import Hamburger from '$lib/components/Icon/Hamburger.svelte';

	let isNavShowing = false;
</script>

<!-- inject metadata into document to prevent scrolling in smaller screen-->

<svelte:head>
	{#if isNavShowing}
		<style lang="postcss">
			body {
				@apply overflow-hidden md:overflow-auto;
			}
		</style>
	{/if}
</svelte:head>

<!-- mobile nav control -->
<button
	class="fixed z-navBarToggle right-6 top-6 md:hidden"
	class:text-daisyBush={!isNavShowing}
	class:text-goldenFizz={isNavShowing}
	on:click={() => (isNavShowing = !isNavShowing)}
>
	{#if isNavShowing}
		<Close width={32} height={32} />
	{:else}
		<Hamburger width={32} height={32} />
	{/if}
</button>

<header
	class="fixed md:relative z-navBar transition-transform w-full h-screen md:h-full -translate-x-full md:translate-x-0 col-span-3 bg-daisyBush text-center"
	class:translate-x-0={isNavShowing}
>
	<div class="my-10 md:mb-24">
		<a href="/invoices">
			<img src="/images/logo.svg" alt="The dollar hollar" class="mx-auto" />
		</a>
	</div>
	<nav>
		<ul class="list-none text-2xl font-bold">
			<li>
				<a href="/invoices" class:active={$page.url.pathname === '/invoices'}>Invoices</a>
			</li>
			<li><a href="/clients" class:active={$page.url.pathname === '/clients'}>Clients</a></li>
			<li><a href="#">Settings</a></li>
			<li><a href="#">Logout</a></li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	nav ul li {
		@apply mb-6;
	}
	nav ul li a {
		@apply font-bold text-white hover:text-goldenFizz;
	}
	nav ul li a.active {
		@apply text-robinEggBlue px-8 transition-[padding];
		/* apply two background images */
		background: url('/images/active-nav--left.svg') left top no-repeat,
			url('/images/active-nav--right.svg ') right top no-repeat;
	}
	nav ul li a.active:hover {
		@apply px-9;
	}
</style>
