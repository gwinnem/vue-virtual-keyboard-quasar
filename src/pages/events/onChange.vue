<template>
	<DocPage
		back-button-text="onKeyReleased"
		back-button-url="events-onKeyReleased"
		next-button-text="onChangeAll"
		next-button-url="events-onChangeAll"
		header="Events - onChange"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Executes the callback function on input change. Returns the current input’s
			string.
		</div>
		<DocPageCode
			lang="js"
			code='  const onChange = (value: string): void => {
    console.log(value, "onChange - value");
  };'
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
