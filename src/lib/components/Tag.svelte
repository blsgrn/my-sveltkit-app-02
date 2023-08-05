<script>
	export let label;
</script>

<div
	class="text-md w-20 rounded-full text-center font-bold capitalize border-1"
	class:inverted={label === 'draft'}
	class:success={label === 'sent' || label === 'current'}
	class:alert={label === 'late'}
	class:archive={label === 'paid'}
>
	{label}
</div>

<style lang="postcss">
	.inverted {
		@apply border-pastelPurple text-pastelPurple;
	}
	.success {
		@apply border-robinEggBlue bg-robinEggBlue text-blue-600;
	}
	.alert {
		@apply border-orange-600 bg-orange-600 text-goldenFizz;
	}
	.archive {
		@apply border-pastelPurple bg-pastelPurple text-white;
	}
</style>
