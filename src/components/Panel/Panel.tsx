import * as React from 'react'

export const Panel: React.FC<PanelProps> = ({
	children,
	className,
	size,
	title,
}): React.ReactElement => {
	const classes = [
		'rounded bg-gray-100 shadow-md p-1 md:p-4',
		className,
		size === 1 && 'w-full',
		size === 2 && 'w-1/2',
		size === 4 && 'w-1/4',
		size === 6 && 'w-1/6',
	]
		.filter(Boolean)
		.join(' ')
	return (
		<section className={classes}>
			<h1 className="font-bold mb-2 text-2xl">{title}</h1>
			{children}
		</section>
	)
}

export type PanelProps = {
	/**
	 *  A special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component 
	 */
	children: JSX.Element | React.ReactNode
	/**
     *  A string that indicates the className - based on selection of a property named 'size', className is atlered 
     */
	className?: string
	/**
     *  A enum that indicates the size - user selective option
     */
	size?: 1 | 2 | 4 | 6
	/**
     *  A string that indicates the title of the panel component
     */
	title: string
}

export default Panel
