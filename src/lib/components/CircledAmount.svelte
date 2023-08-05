<script>
	export let label = '';
	export let amount = '';
</script>

<div class="flex gap-x-4 bg-circle min-h-[6rem] min-w-[16rem] center float-right bg-no-repeat">
	<div class="font-bold">
		{label}
	</div>
	<div class="font-mono text-xl font-bold">
		{amount}
	</div>
</div>
