import * as PropTypes from 'prop-types'
import * as React from 'react'
import Loader from '../../util/Loader'

export const Button = ({
	primary,
	loading,
	size,
	label,
	disabled,
	type,
	...props
}: ButtonProps): JSX.Element => {
	const baseStyles =
		'rounded-md flex items-center focus:outline-dashed focus:outline-blue-500'
	const variant: string = primary
		? 'bg-blue-700 text-white hover:bg-blue-500 '
		: 'bg-blue-300 text-black hover:bg-blue-100 '
	let buttonSize = ''
	if (size === 'small') {
		buttonSize = 'h-4 w-auto py-4 px-2'
	} else if (size === 'large') {
		buttonSize = 'h-12 w-auto py-8 px-10'
	} else if (size === 'base') {
		buttonSize = 'h-10 w-auto py-2 px-5'
	}

	return (
		<button
			type={type}
			disabled={disabled}
			className={[
				disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
				baseStyles,
				buttonSize,
				variant,
			].join(' ')}
			{...props}
		>
			{loading ? (
				<Loader textColor={`${primary ? 'blue-700' : 'blue-200'}`} />
			) : null}
			{label}
		</button>
	)
}

type ButtonProps = {
	/**
	 * A boolean that determines whether the button is the principal call/action on the page
	 */
	primary?: boolean
	/**
	 * A boolean that determines whether the button is representing a loading state
	 */
	loading?: boolean
	/**
	 * An enum that defines the button's size
	 */
	size?: 'small' | 'base' | 'large'
	/**
	 * An enum that defines the button's type
	 */
	type: 'button' | 'submit' | 'reset'
	/**
	 * A descriptive label to display the text content on the button
	 */
	label: string
	/**
	 * A boolean that determines whether the button representing a disabled state
	 */
	disabled?: boolean
	/**
	 * A onclick event that executes a JavaScript's function when the button gets clicked
	 */
	onClick: () => void
}

Button.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary: PropTypes.bool,
	/**
	 * Is the button representing a loading state?
	 */
	loading: PropTypes.bool,
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(['small', 'base', 'large']),
	/**
	 * Button contents
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
	/**
	 * Is the button disabled?
	 */
	disabled: PropTypes.bool,
	/**
	 * What type of button is this?
	 */
	type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
}

Button.defaultProps = {
	primary: true,
	loading: false,
	size: 'base',
	onClick: undefined,
	label: 'Click here!',
	disabled: false,
	type: 'button',
}
