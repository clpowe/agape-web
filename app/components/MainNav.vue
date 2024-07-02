<script setup lang="ts">
	import AgapeLogo from './AgapeLogo.vue'
	import Bars from '../assets/icons/menu-bars.vue'

	const { x, y } = useWindowScroll()

	const { isMobile } = useBreakpoints()
	const mobileMenu = ref<HTMLDialogElement | null>(null)

	const navBar = ref(null)
	const { height } = useElementSize(navBar)
	const menuHeight = defineModel()

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

	const expanded = useState(() => shallowRef(false))
	onClickOutside(mobileMenu, () => closeNav)

	function openNav() {
		expanded.value = true
		if (mobileMenu.value) {
			mobileMenu.value.showModal()
		} else {
			console.error("Mobile menu doesn't exist")
		}
	}
	function closeNav() {
		expanded.value = false
		if (mobileMenu.value) {
			mobileMenu.value.close()
		} else {
			console.error("Mobile menu doesn't exist")
		}
	}

	const router = useRouter()

	watch(router.currentRoute, () => {
		if (expanded.value) {
			closeNav()
		}
	})
</script>

<template>
	<header class="">
		<nav
			aria-label="Main"
			ref="navBar"
			class="main-nav breakout"
			:class="{ 'scrolled-nav': y > 0 }"
		>
			<ul role="list">
				<li class="logo"><AgapeLogo /> </li>

				<template v-if="!isMobile">
					<li v-for="{ name, link, id } in navigation"
						><NuxtLink :key="id" :to="link" class="nav-link">{{
							name
						}}</NuxtLink></li
					>
				</template>
				<div class="actions">
					<li v-if="!isMobile">
						<AppButton link="/">Pay Bill</AppButton>
					</li>
					<li v-if="!isMobile">
						<AppButton link="/" secondary>team prayer</AppButton>
					</li>
				</div>

				<li v-if="isMobile">
					<AppButton
						ref="mobileMenuControl"
						:expanded="expanded"
						ghost
						@click="openNav"
					>
						menu <Bars class="bars" />
					</AppButton>
				</li>
			</ul>
		</nav>
		<dialog v-if="isMobile" ref="mobileMenu" @clickoutside="closeNav">
			<header>
				<AgapeLogoDark class="" />
				<AppButton @click="closeNav" ghost class="dark close-btn">
					close <Bars class="bars" />
				</AppButton>
			</header>
			<section>
				<nav class="mobile-nav" aria-label="Main">
					<ul role="list">
						<li v-for="{ name, link, id } in navigation"
							><NuxtLink class="mobile-nav-link" :key="id" :to="link">{{
								name
							}}</NuxtLink></li
						>
						<div class="mobile-actions">
							<li>
								<AppButton link="/">Pay Bill</AppButton>
							</li>
							<li>
								<AppButton link="/" secondary>team prayer</AppButton>
							</li>
						</div>
					</ul>
				</nav>
			</section>
		</dialog>
	</header>
</template>

<style scoped>
	header {
		z-index: 100;
		//background-color: oklch(var(--bg--dark));
	}
	nav {
		width: 100%;
		padding-inline: 1rem;
		z-index: 100;
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

	.actions {
		display: flex;
		margin-left: 40px;
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

		header {
			display: flex;
			align-items: center;
			padding-inline: 1rem;
			padding-top: 1.5rem;
			justify-content: space-between;
		}

		header > svg {
			height: 60px;
		}

		.mobile-nav > ul {
			display: flex;
			width: 100%;
			gap: 0;
			flex-direction: column;
		}

		ul li:has(.mobile-nav-link) {
			height: 100%;
			display: flex;
			align-items: center;

			border-top: 1px solid oklch(var(--txt--light) / 0.2);
		}

		ul li:first-of-type {
			border-top: none;
		}

		li {
			width: 100%;
			padding-block: 1rem;
		}

		ul .mobile-actions {
			width: 100%;
			gap: 0.5rem;
			display: flex;
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

	.mobile-nav-link {
		display: block;
		overflow: wrap;
		word-break: initial;
		flex-direction: row;
		color: #000;

		width: 100%;
		position: relative;
		align-items: center;
		justify-content: center;
		font-family: 'Inter';
		font-size: var(--font-s);
		font-weight: initial;
		line-height: 20px;
		text-transform: uppercase;
		text-decoration: none;
	}

	.mobile-nav-link:nth-of-type(1) {
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
