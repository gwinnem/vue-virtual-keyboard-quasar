<template>
	<DocPage header="Methods">
		<div class="text-h6">virtual-keyboard has a few methods you can use to further control it’s behavior.
			To access these functions, you need the instance of the keyboard component, like so:</div>
		<DocPageCode lang="js" code='const keyboard = new Keyboard({
  ...
});

// Then, use as follows...
keyboard.methodName(params);' />
		<q-list bordered separator class="q-mt-lg">
			<q-item v-for="item in methods" :key="item.name" clickable v-ripple :to="item.route">
				<q-item-section class="text-h6">{{item.name}}</q-item-section>
			</q-item>
		</q-list>
	</DocPage>
</template>

<script setup>
import DocPage from '../layouts/parts/DocPage.vue';
import DocPageCode from '../layouts/parts/DocPageCode.vue';

const methods = [
	{name: 'clearInput', route: 'methods-clearInput'},
	{name: 'getInput', route: 'methods-getInput'},
	{name: 'replaceInput', route: 'methods-replaceInput'},
	{name: 'setInput', route: 'methods-setInput'},
	{name: 'addButtonTheme', route: 'methods-addButtonTheme'},
	{name: 'removeButtonTheme', route: 'methods-removeButtonTheme'},
	{name: 'getButtonElement', route: 'methods-getButtonElement'},
	{name: 'recurseButtons', route: 'methods-recurseButtons'},
	{name: 'setOptions', route: 'methods-setOptions'},
	{name: 'dispatch', route: 'methods-dispatch'},
	{name: 'destroy', route: 'methods-destroy'},
	{name: 'getCaretPosition', route: 'methods-getCaretPosition'},
	{name: 'getCaretPositionEnd', route: 'methods-getCaretPositionEnd'},
	{name: 'setCaretPosition', route: 'methods-setCaretPosition'}
];
</script>
