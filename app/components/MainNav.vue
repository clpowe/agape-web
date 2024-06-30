<script setup lang="ts">
	import AgapeLogo from './AgapeLogo.vue'
	import Bars from '../assets/icons/menu-bars.vue'

	const menuHeight = defineModel()

	const { x, y } = useWindowScroll()

	const { isMobile } = useBreakpoints()
	const navBar = ref(null)
	const { height } = useElementSize(navBar)
	const mobileMenu = ref<HTMLDialogElement>(null)

	watchEffect(() => {
		menuHeight.value = height.value
	})

	const navigation = ref([
		{
			id: '1',
			name: 'Home',
			link: '/'
		},
		{
			id: '2',
			name: 'About',
			link: '/about'
		},
		{
			id: '3',
			name: 'Contact',
			link: '/contact'
		},
		{
			id: '4',
			name: 'Services',
			link: '/services'
		}
	])

	function openNav() {
		mobileMenu.value.showModal()
	}
	function closeNav() {
		mobileMenu.value.close()
	}
</script>

<template>
	<header>
		<nav ref="navBar" class="main-nav" :class="{ 'scrolled-nav': y > 0 }">
			<ul role="menubar">
				<li role="none" class="logo"><AgapeLogo /> </li>

				<template v-if="!isMobile">
					<li role="none" v-for="{ name, link, id } in navigation"
						><NuxtLink role="menuitem" :key="id" :to="link">{{
							name
						}}</NuxtLink></li
					>
				</template>

				<li role="none" v-if="isMobile">
					<button class="btn menu_open" @click="openNav">
						menu <Bars class="bars" />
					</button>
				</li>
			</ul>
		</nav>
		<dialog v-if="isMobile" ref="mobileMenu" @clickoutside="closeNav">
			<button class="btn menu_close" @click="closeNav">
				close <Bars class="bars" />
			</button>
			<nav>
				<ul>
					<li role="none" v-for="{ name, link, id } in navigation"
						><NuxtLink role="menuitem" :key="id" :to="link">{{
							name
						}}</NuxtLink></li
					>
				</ul>
			</nav>
		</dialog>
	</header>
</template>

<style scoped>
	nav {
		width: 100%;
		padding-inline: 1rem;
	}

	ul {
		display: flex;
		width: 100%;
		margin: 0;
		padding: 0;
		justify-content: space-between;
		padding-block: 1rem;
		list-style-type: none;
		align-items: center;
	}

	.logo {
		order: 0;
		margin-right: auto;

		svg {
			width: fit-content;
			height: 60px;
		}
	}

	.btn {
		border: none;
		margin: 0;
		padding: 0;
		background: none;
		display: flex;
		align-items: center;
		gap: 0.5rem;

		&.menu_open {
			color: white;
		}

		&.menu_close {
			color: black;
		}
	}

	.bars {
		height: 2rem;
	}

	dialog {
		--timing: 0.3s;

		width: 100%;
		max-width: 100vw;
		animation: slideOut var(--timing) ease-in-out;
		transition:
			display var(--timing) allow-discrete,
			overlay var(--timing) allow-discrete,
			opacity var(--timing) allow-discrete;

		&[open] {
			animation: slideIn var(--timing) ease-in-out;
		}

		nav > ul {
			display: grid;
			gap: 2rem;
		}
	}

	::backdrop {
		--timing: 0.3s;

		transition:
			display var(--timing) allow-discrete,
			overlay var(--timing) allow-discrete,
			opacity var(--timing) allow-discrete;
		opacity: 0;
		animation: fadeOut var(--timing) ease-in-out;
	}

	[open]::backdrop {
		background-color: rgb(0 0 0 / 50%);
		opacity: 1;
		animation: fadeIn var(--timing) ease-in-out;
	}

	@keyframes slideIn {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideOut {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-100%);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
