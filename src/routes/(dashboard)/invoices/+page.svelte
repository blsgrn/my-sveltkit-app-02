<script>
	import Search from '$lib/components/Search.svelte';
</script>

<svelte:head>
	<title>Invoices | The Dollar Hollar</title>
</svelte:head>

<div class="flex justify-between items-center mb-16">
	<!-- search field -->
	<Search />
	<!-- new invoice button -->
	<div>
		<button
			class="relative whitespace-nowrap rounded-lg bg-lavenderIndigo px-10 py-3 font-sansSerif text-xl font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all"
			>+ Invoice</button
		>
	</div>
</div>
<!-- List of invoices -->
<div>
	<!-- header -->
	<div>
		<h3>Status</h3>
		<h3>Due Date</h3>
		<h3>ID</h3>
		<h3>Client</h3>
		<h3>Amount</h3>
		<div />
		<div />
	</div>
	<!-- invoices -->
	<div>
		<div>Tag</div>
		<div>08/01/22</div>
		<div>12345</div>
		<div>Compressed.fm</div>
		<div>$504.00</div>
		<div>View</div>
		<div>More</div>
	</div>
</div>
<div>Total: $2,355.00</div>
