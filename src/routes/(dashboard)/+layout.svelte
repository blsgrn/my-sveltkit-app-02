<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="grid min-h-screen grid-cols-12 md:gap-x-16 bg-whisper">
	<Navbar />
	<main class="px-4 pt-4 col-span-12 md:col-span-8 md:pt-10">
		<slot><!-- optional fallback --></slot>
	</main>
</div>
