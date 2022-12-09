<template>
	<q-layout view="lHh Lpr fff" class="bg-grey-1">
		<q-header elevated class="bg-white text-grey-8" height-hint="64">
			<q-toolbar class="GPL__toolbar" style="height: 64px">
				<q-btn
					flat
					dense
					round
					@click="toggleLeftDrawer"
					aria-label="Menu"
					icon="fa-solid fa-bars"
					class="q-mx-md"
				/>

				<q-toolbar-title
					v-if="$q.screen.gt.sm"
					shrink
					class="row items-center no-wrap"
				>
					<q-icon size="26px" name="fa-solid fa-keyboard" />
					<span class="q-ml-sm">Vue Virtual Keyboard Documentation</span>
				</q-toolbar-title>

				<q-space />

				<!--        <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap color="primary" icon="add" no-caps label="Create" class="q-ml-sm q-px-md">-->
				<!--          <q-menu anchor="top end" self="top end">-->
				<!--            <q-list class="text-grey-8" style="min-width: 100px">-->
				<!--              <q-item aria-hidden="true">-->
				<!--                <q-item-section class="text-uppercase text-grey-7" style="font-size: 0.7rem">Create New</q-item-section>-->
				<!--              </q-item>-->
				<!--              <q-item v-for="menu in createMenu" :key="menu.text" clickable v-close-popup aria-hidden="true">-->
				<!--                <q-item-section avatar>-->
				<!--                  <q-icon :name="menu.icon" />-->
				<!--                </q-item-section>-->
				<!--                <q-item-section>{{ menu.text }}</q-item-section>-->
				<!--              </q-item>-->
				<!--            </q-list>-->
				<!--          </q-menu>-->
				<!--        </q-btn>-->

				<NavbarRightSide />
			</q-toolbar>
		</q-header>

		<q-drawer
			v-model="leftDrawerOpen"
			behavior="mobile"
			bordered
			@click="leftDrawerOpen = false"
		>
			<q-scroll-area class="fit">
				<q-toolbar class="GPL__toolbar">
					<q-toolbar-title class="row items-center text-grey-8">
						<span class="q-ml-sm">Vue Virtual Keyboard Documentation</span>
					</q-toolbar-title>
				</q-toolbar>

				<q-list padding>
					<q-item
						v-for="link in links1"
						:key="link.text"
						clickable
						class="GPL__drawer-item"
						:to="link.route"
					>
						<q-item-section avatar>
							<q-icon :name="link.icon" />
						</q-item-section>
						<q-item-section>
							<q-item-label>{{ link.text }}</q-item-label>
						</q-item-section>
					</q-item>

					<q-separator class="q-my-md" />
				</q-list>
			</q-scroll-area>
		</q-drawer>
		<LeftSideMenu />
		<q-page-container class="GPL__page-container">
			<router-view />
			<q-page-scroller>
				<q-btn
					fab-mini
					color="brand-primary"
					glossy
					icon="fa-solid fa-chevron-up"
				></q-btn>
			</q-page-scroller>
		</q-page-container>
	</q-layout>
</template>

<script>
import { ref } from 'vue';
import LeftSideMenu from './parts/LeftSideSmallMenu.vue';
import NavbarRightSide from './parts/NavbarRightSide.vue';

export default {
	name: 'VueVirtualKeyboardWebsite',
	components: { NavbarRightSide, LeftSideMenu },
	setup() {
		const leftDrawerOpen = ref(false);

		function toggleLeftDrawer() {
			leftDrawerOpen.value = !leftDrawerOpen.value;
		}

		return {
			leftDrawerOpen,

			links1: [
				{ icon: 'fa-solid fa-house', text: 'Welcome', route: '/' },
				{ icon: 'fa-solid fa-play', text: 'Getting Started', route: 'start' },
				{ icon: 'fa-solid fa-keyboard', text: 'Demos', route: 'demos' },
				{ icon: 'fa-solid fa-toolbox', text: 'Props', route: 'props' },
				{ icon: 'fa-solid fa-gear', text: 'Methods', route: 'methods' },
				{ icon: 'fa-solid fa-globe', text: 'Events', route: 'events' },
				{ icon: 'fa-solid fa-keyboard', text: 'Layouts', route: 'layouts' },
				{ icon: 'fa-solid fa-display', text: 'Display', route: 'display' },
				{ icon: 'fa-solid fa-laptop', text: 'Interfaces', route: 'interfaces' },
			],
			createMenu: [
				{ icon: 'photo_album', text: 'Album' },
				{ icon: 'people', text: 'Shared Album' },
				{ icon: 'movie', text: 'Movie' },
				{ icon: 'library_books', text: 'Animation' },
				{ icon: 'dashboard', text: 'Collage' },
				{ icon: 'book', text: 'Photo book' },
			],

			toggleLeftDrawer,
		};
	},
};
</script>

<style lang="sass">
.GPL

  &__toolbar
    height: 64px

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500

  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>
