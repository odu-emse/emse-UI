import * as React from 'react'

export const CommunityPage = ({
	questionCount,
	moduleIdentifier,
	moduleName,
	assignmentName,
}: CommunityPageProps): JSX.Element => {
    return (
        <div>Community Page</div>
    )
}

export type CommunityPageProps = {
	/**
	 * The count for total of questions for this assignment card.
	 */
	questionCount: number
	/**
	 * The module Identifier of this assignment card
	 */
	moduleIdentifier: string
	/**
	 * The module name of this assignment card
	 */
	moduleName: string
	/**
	 * The assignment name of this assignment card
	 */
	assignmentName: string
}
