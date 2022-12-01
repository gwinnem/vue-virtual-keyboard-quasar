<template>
	<DocPage
		back-button-text="recurseButtons"
		back-button-url="methods-recurseButtons"
		next-button-text="dispatch"
		next-button-url="methods-dispatch"
		header="Methods - setOptions"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Set new option or modify existing ones after initialization. The changes are applied immediately.</div>
		<DocPageCode lang="js" code='keyboard.setOptions({
  theme: "my-custom-theme"
});' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>

