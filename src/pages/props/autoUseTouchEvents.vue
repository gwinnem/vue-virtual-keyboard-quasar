<template>
	<DocPage
		back-button-text="excludeFromLayout"
		back-button-url="props-excludeFromLayout"
		next-button-text="useMouseEvents"
		next-button-url="props-useMouseEvents"
		header="Props - autoUseTouchEvents"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">This enables the option "useTouchEvents" automatically on touch capable devices.</div>
		<DocPageCode lang="js" code='autoUseTouchEvents: true' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
