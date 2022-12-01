<template>
	<DocPage
		back-button-text="useMouseEvents"
		back-button-url="props-useMouseEvents"
		next-button-text="preventMouseDownDefault"
		next-button-url="props-preventMouseDownDefault"
		header="Props - useTouchEvents"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">PointerEvents are used on browsers that support it. However, if you wish to only support touch events, you can use this option.</div>
		<DocPageCode lang="js" code='useTouchEvents: true' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
