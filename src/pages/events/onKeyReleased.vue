<template>
	<DocPage
		back-button-text="onKeyPress"
		back-button-url="events-onKeyPress"
		next-button-text="onChange"
		next-button-url="events-onChange"
		header="Events - onKeyReleased"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Executes the callback function once a virtual-keyboard button is released (keyUp).</div>
		<DocPageCode lang="js" code='  const onKeyReleased = (): void => {
    console.log("onKeyReleased");
  };' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
