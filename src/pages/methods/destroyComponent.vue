<template>
	<DocPage
		back-button-text="dispatch"
		back-button-url="methods-dispatch"
		next-button-text="getCaretPosition"
		next-button-url="methods-getCaretPosition"
		header="Methods - destroy"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Removes keyboard listeners and DOM elements.</div>
		<DocPageCode lang="js" code='keyboard.destroy();' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>

