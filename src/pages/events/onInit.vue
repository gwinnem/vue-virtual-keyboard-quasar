<template>
	<DocPage
		back-button-text="beforeRender"
		back-button-url="events-beforeRender"
		header="Events - onInit"
		show-back-button="true"
	>
		<div class="text-h6">
			Executes the callback function once virtual-keyboard is rendered for the
			first time (on initialization).
		</div>
		<DocPageCode
			lang="js"
			code='  const onInit = (): void => {
    console.log("onInit");
  };'
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
