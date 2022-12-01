<template>
	<DocPage header="Demo's">
		<div class="text-h6">Available demo's for the virtual-keyboard.</div>
		<q-list bordered separator class="q-mt-lg">
			<q-item
				v-for="item in methods"
				:key="item.name"
				clickable
				v-ripple
				:to="item.route"
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
	{ name: 'All layouts', route: 'methods-clearInput' },
	{ name: 'Extended Keyboard', route: 'methods-clearInput' },
	{ name: 'Numpad', route: 'methods-clearInput' },
];
</script>
