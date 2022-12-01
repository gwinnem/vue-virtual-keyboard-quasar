<template>
	<DocPage
		back-button-text="onRender"
		back-button-url="events-onRender"
		next-button-text="beforeRender"
		next-button-url="events-beforeRender"
		header="Events - beforeFirstRender"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Executes the callback function before the first virtual-keyboard render.</div>
		<DocPageCode lang="js" code='  const beforeFirstRender = (): void => {
    console.log("beforeFirstRender");
  };' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
