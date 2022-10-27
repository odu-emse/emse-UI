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
		buttonSize = 'h-4 w-auto py-4 px-3 text-xs'
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
	 * Is this the principal call to action on the page?
	 * @default true
	 */
	primary?: boolean
	/**
	 * Is the button representing a loading state?
	 * @default false
	 */
	loading?: boolean
	/**
	 * How large should the button be?
	 * @default 'base'
	 */
	size?: 'small' | 'base' | 'large'
	/**
	 * What type of button is this?
	 */
	type: 'button' | 'submit' | 'reset'
	/**
	 * Button contents
	 */
	label: string
	/**
	 * Is the button disabled?
	 * @default false
	 */
	disabled?: boolean
	/**
	 * Optional click handler
	 */
	onClick?: () => void
	/**
	 * Optional HTML role attribute for the button element
	 */
	role?: string
}

Button.defaultProps = {
	primary: true,
	loading: false,
	type: 'button',
	size: 'base',
	disabled: false,
}
