<script>
	import Search from '$lib/components/Search.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import View from '$Icon/View.svelte';
	import ThreeDots from '$Icon/ThreeDots.svelte';
	import CircledAmount from '$lib/components/CircledAmount.svelte';
</script>

<svelte:head>
	<title>Invoices | The Dollar Hollar</title>
</svelte:head>

<div
	class="flex flex-col-reverse md:flex-row justify-between items-start md:items-center mb-7 lg:mb-16 gap-y-6 md:gap-y-4"
>
	<!-- search field -->
	<Search />
	<!-- new invoice button -->
	<div>
		<button
			class="relative whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 lg:px-10 py-2 lg:py-3 font-sansSerif text-base lg:text-xl font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all"
			>+ Invoice</button
		>
	</div>
</div>
<!-- List of invoices -->
<div>
	<!-- header -->
	<div class="table-header hidden lg:grid invoice-table text-daisyBush">
		<h3>Status</h3>
		<h3>Due Date</h3>
		<h3>ID</h3>
		<h3>Client</h3>
		<h3>Amount</h3>
		<div />
		<div />
	</div>
	<!-- invoices -->
	<div
		class="invoice-table invoice-row items-center bg-white py-3 lg:py-6 rounded-lg shadow-tableRow"
	>
		<div class="status"><Tag label="paid" className="ml-auto lg:ml-0" /></div>
		<div class="text-sm lg:text-lg dueDate">08/01/22</div>
		<div class="text-sm lg:text-lg invoiceNumber">12345</div>
		<div class="text-base lg:text-xl font-bold clientName">Compressed.fm</div>
		<div class="text-sm lg:text-lg font-mono font-bold amount">$504.00</div>
		<div class="center text-sm lg:text-lg viewButton">
			<a href="#" class="text-pastelPurple hover:text-daisyBush hidden lg:block">
				<View />
			</a>
		</div>
		<div class="text-sm lg:text-lg center moreButton">
			<button class="text-pastelPurple hover:text-daisyBush hidden lg:block">
				<ThreeDots />
			</button>
		</div>
	</div>
</div>
<CircledAmount label="Total" amount="$1,140.99" />

<style lang="postcss">
	.table-header h3 {
		/* @apply provided by tailwindcss  */
		@apply text-xl font-black leading-snug;
	}
	.invoice-row {
		grid-template-areas:
			'invoiceNumber invoiceNumber'
			'clientName amount'
			'dueDate status';
	}

	@media (min-width: 1024px) {
		.invoice-row {
			grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
		}
	}

	.invoice-row .status {
		grid-area: status;
	}

	.invoice-row .dueDate {
		grid-area: dueDate;
	}

	.invoice-row .invoiceNumber {
		grid-area: invoiceNumber;
	}

	.invoice-row .clientName {
		grid-area: clientName;
	}

	.invoice-row .amount {
		grid-area: amount;
	}
	.invoice-row .viewButton {
		grid-area: viewButton;
	}

	.invoice-row .viewMore {
		grid-area: viewMore;
	}
</style>
