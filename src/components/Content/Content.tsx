import * as React from 'react'

export const Content = ({ children }: ContentProps): JSX.Element => {
	return (
		<section
			className={`bg-gray-50 min-h-screen shadow rounded-md flex flex-col w-full p-2`}
		>
			{children}
		</section>
	)
}

type ContentProps = {
	children: React.ReactNode
}
