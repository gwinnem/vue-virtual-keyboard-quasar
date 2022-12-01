<template>
	<DocPage
		back-button-text="onChangeAll"
		back-button-url="events-onChangeAll"
		next-button-text="beforeFirstRender"
		next-button-url="events-beforeFirstRender"
		header="Events - onRender"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Executes the callback function every time virtual-keyboard is rendered (e.g: when you change layouts).</div>
		<DocPageCode lang="js" code='  const onRender = (): void => {
    console.log("onRender");
  };' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
