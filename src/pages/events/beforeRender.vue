<template>
	<DocPage
		back-button-text="beforeFirstRender"
		back-button-url="events-beforeFirstRender"
		next-button-text="onInit"
		next-button-url="events-onInit"
		header="Events - beforeRender"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Executes the callback function before a virtual-keyboard render.</div>
		<DocPageCode lang="js" code='  const beforeRender = (): void => {
    console.log("beforeRender");
  };' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
