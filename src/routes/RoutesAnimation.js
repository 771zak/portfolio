export const RoutesAnimation = {
	hidden: {
		opacity: 0,
		x: -400,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {delay: .5, duration: 1}
	},
	exit: {
		x: '100vw',
		transition: {duration: .5}
	}
}
