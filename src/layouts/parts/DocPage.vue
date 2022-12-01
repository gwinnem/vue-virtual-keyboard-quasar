<template>
	<q-page class="doc-page">
		<div class="doc-heading doc-h1">{{props.header}}</div>
		<slot></slot>
		<div class="q-pt-md q-gutter-md flex justify-center">
			<q-btn v-if="props.showBackButton" :to="backButtonUrl" color="secondary" no-caps>
				<q-icon name="fa-solid fa-chevron-left" />
				{{backButtonText}}
			</q-btn>
			<q-btn to="/" color="secondary" no-caps>
				<q-icon class="q-pr-sm" name="fa-solid fa-home" />
				Home
			</q-btn>
			<q-btn v-if="props.showNextButton" :to="nextButtonUrl" color="secondary" no-caps>
				{{nextButtonText}}
				<q-icon name="fa-solid fa-chevron-right" />
			</q-btn>
		</div>
	</q-page>
</template>
<script lang="ts" setup>
const props = defineProps({
	backButtonText: String,
	backButtonUrl: String,
	header: String,
	nextButtonText: String,
	nextButtonUrl: String,
	showBackButton: Boolean,
	showNextButton: Boolean,
});
</script>
<style lang="scss">
.doc-heading {
	color: #00b4ff;
	cursor: pointer;
	margin-bottom: 30px;
}

.doc-h1 {
	font-size: 3rem;
	line-height: 3rem;
	font-weight: 600;
}

.doc-page {
	padding: 16px 46px;
	max-width: 900px;
	margin-left: auto;
	margin-right: auto;
}

.text-h6 {
	font-size: 1rem;
	font-weight: 400;
	line-height: 2rem;
	letter-spacing: 0.0125em;
}
</style>
