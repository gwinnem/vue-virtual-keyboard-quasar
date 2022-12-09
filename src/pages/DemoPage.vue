<template>
	<DocPage header="Demo's">
		<div class="text-h6">Available demo's for the virtual-keyboard.</div>
		<q-list bordered separator class="q-mt-lg">
			<q-item
				v-for="item in methods"
				:key="item.name"
				clickable
				v-ripple
				:href="item.route"
				target="_blank"
			>
				<q-item-section class="text-h6">{{ item.name }}</q-item-section>
			</q-item>
		</q-list>
	</DocPage>
</template>

<script setup>
import DocPage from '../layouts/parts/DocPage.vue';

const methods = [
	{ name: 'default', route: 'methods-clearInput' },
	{ name: 'dark Theme', route: 'methods-clearInput' },
	{
		name: 'buttonTheme',
		route:
			'https://codesandbox.io/s/github/hodgef/simple-keyboard-npm-demos/tree/uc-customization/?from-embed=&file=/src/index.js',
	},
	{
		name: 'getButtonElement',
		route:
			'https://codesandbox.io/s/github/hodgef/simple-keyboard-npm-demos/tree/uc-getbuttonelement/?from-embed',
	},
	{
		name: 'inputName',
		route:
			'https://codesandbox.io/s/github/simple-keyboard/vue-simple-keyboard-multiple-inputs/tree/master/?from-embed=&file=/src/SimpleKeyboard.vue',
	},
	{
		name: 'inputPattern',
		route:
			'https://codesandbox.io/s/github/hodgef/simple-keyboard-npm-demos/tree/uc-inputPattern/?from-embed',
	},
	{
		name: 'maxLength',
		route:
			'https://codesandbox.io/s/github/hodgef/simple-keyboard-npm-demos/tree/uc-maxlength/?from-embed',
	},
	{
		name: 'preventMouseDownDefault',
		route:
			'https://codesandbox.io/s/github/simple-keyboard/simple-keyboard-preventmodefault-caret-pos/tree/master/?from-embed',
	},
	{
		name: 'physicalKeyboardHighlight',
		route:
			'https://codesandbox.io/s/github/hodgef/simple-keyboard-npm-demos/tree/full-keyboard/?from-embed=&file=/src/index.js',
	},
	{ name: 'All layouts', route: 'methods-clearInput' },
	{ name: 'Extended Keyboard', route: 'methods-clearInput' },
	{ name: 'Numpad', route: 'methods-clearInput' },
];
</script>
