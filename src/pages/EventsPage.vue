<template>
	<DocPage>
		<div class="doc-heading doc-h1">Events</div>
		<div class="row">
			<div class="col-12">
				<q-list bordered separator>
					<q-item v-for="item in events" :key="item.name" clickable v-ripple :to="item.route">
						<q-item-section class="text-h6">{{item.name}}</q-item-section>
					</q-item>
				</q-list>
			</div>
		</div>
	</DocPage>
</template>

<script setup>
import DocPage from '../layouts/parts/DocPage.vue';

const events = [
	{name: 'onKeyPress', route: 'events-onKeyPress'},
	{name: 'onKeyReleased', route: 'events-onKeyReleased'},
	{name: 'onChange', route: 'events-onChange'},
	{name: 'onChangeAll', route: 'events-onChangeAll'},
	{name: 'onRender', route: 'events-onRender'},
	{name: 'beforeFirstRender', route: 'events-beforeFirstRender'},
	{name: 'beforeRender', route: 'events-beforeRender'},
	{name: 'onInit', route: 'events-onInit'},
];
</script>
