<template>
	<DocPage
		back-button-text="autoUseTouchEvents"
		back-button-url="props-autoUseTouchEvents"
		next-button-text="useTouchEvents"
		next-button-url="props-useTouchEvents"
		header="Props - useMouseEvents"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			PointerEvents are used on browsers that support it. However, if you wish to
			fall back to the previous mouse event logic, you can use this option.
		</div>
		<DocPageCode lang="js" code="useMouseEvents: true" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
