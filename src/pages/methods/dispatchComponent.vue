<template>
	<DocPage
		back-button-text="setOptions"
		back-button-url="methods-setOptions"
		next-button-text="destroy"
		next-button-url="methods-destroy"
		header="Methods - dispatch"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Send a command to all virtual-keyboard instances at once (if you have multiple instances).</div>
		<DocPageCode lang="js" code='keyboard.dispatch(instance => {
  instance.setOptions({
    buttonTheme: [
      {
        class: "myClass",
        buttons: `a b c`
      }
    ]
  })
});' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>

