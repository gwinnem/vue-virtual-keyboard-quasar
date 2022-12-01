<template>
	<q-page-sticky v-if="$q.screen.gt.sm" expand position="left">
		<div class="fit q-pt-xl q-px-sm column">
			<q-btn
				to="/"
				round
				flat
				color="grey-8"
				stack
				no-caps
				size="26px"
				class="GPL__side-btn"
			>
				<q-icon size="22px" name="fa-solid fa-house" />
				<div class="GPL__side-btn__label">Welcome</div>
			</q-btn>

			<q-btn
				to="start"
				round
				flat
				color="grey-8"
				stack
				no-caps
				size="26px"
				class="GPL__side-btn"
			>
				<q-icon size="22px" name="fa-solid fa-play" />
				<div class="GPL__side-btn__label">Getting Started</div>
			</q-btn>

			<q-btn
				to="demos"
				round
				flat
				color="grey-8"
				stack
				no-caps
				size="26px"
				class="GPL__side-btn"
			>
				<q-icon size="22px" name="fa-solid fa-keyboard" />
				<div class="GPL__side-btn__label">Demo's</div>
			</q-btn>

			<q-btn
				to="props"
				round
				flat
				color="grey-8"
				stack
				no-caps
				size="26px"
				class="GPL__side-btn"
			>
				<q-icon size="22px" name="fa-solid fa-toolbox" />
				<div class="GPL__side-btn__label">Props</div>
			</q-btn>

			<q-btn
				to="methods"
				round
				flat
				color="grey-8"
				stack
				no-caps
				size="26px"
				class="GPL__side-btn"
			>
				<q-icon size="22px" name="fa-solid fa-gear" />
				<div class="GPL__side-btn__label">Methods</div>
			</q-btn>

			<q-btn
				to="events"
				round
				flat
				color="grey-8"
				stack
				no-caps
				size="26px"
				class="GPL__side-btn"
			>
				<q-icon size="22px" name="fa-solid fa-globe" />
				<div class="GPL__side-btn__label">Events</div>
			</q-btn>

			<q-btn
				to="layouts"
				round
				flat
				color="grey-8"
				stack
				no-caps
				size="26px"
				class="GPL__side-btn"
			>
				<q-icon size="22px" name="fa-solid fa-keyboard" />
				<div class="GPL__side-btn__label">Layouts</div>
			</q-btn>

			<q-btn
				to="display"
				round
				flat
				color="grey-8"
				stack
				no-caps
				size="26px"
				class="GPL__side-btn"
			>
				<q-icon size="22px" name="fa-solid fa-display" />
				<div class="GPL__side-btn__label">Display</div>
			</q-btn>
		</div>
	</q-page-sticky>
</template>
