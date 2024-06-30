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
				<li role="none" class="logo" tabindex="1"><AgapeLogo /> </li>

				<template v-if="!isMobile">
					<li role="none" v-for="{ name, link, id } in navigation"
						><NuxtLink role="menuitem" :key="id" :to="link" class="nav-link">{{
							name
						}}</NuxtLink></li
					>
				</template>

				<li role="none" v-if="!isMobile">
					<AppButton role="menuitem" link="/">Pay Bill</AppButton>
				</li>
				<li role="none" v-if="!isMobile">
					<AppButton role="menuitem" link="/" secondary>team prayer</AppButton>
				</li>

				<li role="none" v-if="isMobile">
					<AppButton ghost @click="openNav">
						menu <Bars class="bars" />
					</AppButton>
				</li>
			</ul>
		</nav>
		<dialog v-if="isMobile" ref="mobileMenu" @clickoutside="closeNav">
			<AppButton @click="closeNav" ghost>
				close <Bars class="bars" />
			</AppButton>
			<nav>
				<ul>
					<li role="none" v-for="{ name, link, id } in navigation"
						><NuxtLink role="menuitem" :key="id" :to="link">{{
							name
						}}</NuxtLink></li
					>
					<li role="none">
						<NuxtLink role="menuitem" to="/">Pay Bill</NuxtLink>
					</li>
					<li role="none">
						<NuxtLink role="menuitem" to="/">team prayer</NuxtLink>
					</li>
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
		gap: 1rem;
		font-weight: 300;
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

	.menu-btn {
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

	.nav-link {
		display: block;
		overflow: wrap;
		word-break: initial;
		flex-direction: row;
		height: 100%;
		position: relative;
		align-items: center;
		justify-content: center;
		font-family: 'Inter';
		font-size: var(--font-s);
		font-weight: initial;
		line-height: 20px;
		color: white;
		text-transform: uppercase;
		text-decoration: none;

		&:hover::after {
			content: '';
			position: absolute;
			top: -24px;
			left: 0;
			width: 100%;
			height: 4px;
			background-color: var(--red);
		}

		&.btn {
			background-color: var(--red);
		}
		&.btn:hover::after {
			content: '';
		}
	}

	.li {
		display: flex;
		align-items: center;
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

	@media (min-width: 768px) {
	}
</style>
