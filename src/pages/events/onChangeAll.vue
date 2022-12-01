<template>
	<DocPage
		back-button-text="onChange"
		back-button-url="events-onChange"
		next-button-text="onRender"
		next-button-url="events-onRender"
		header="Events - onChangeAll"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Executes the callback function on input change.
			Returns the input object with all defined inputs.
			This is useful if you’re handling several inputs with virtual-keyboard.</div>
		<DocPageCode lang="js" code='  const onChangeAll = (): void => {
    console.log("onChangeAll");
  };' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
