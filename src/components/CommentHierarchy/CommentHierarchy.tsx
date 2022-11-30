import * as React from 'react'
import { Thread } from '../Thread'

export const CommentHierarchy: React.FC<CommentHierarchyProps> = ({
	comments,
}): React.ReactElement => {
	const [index, setIndex] = React.useState(0)
	const [index1, setIndex1] = React.useState(0)
	/*{comments[index].user.uName}*/
	return (
		<div className="antialiased mx-auto max-w-screen-sm">
			<div className="space-y-4">
				{comments?.length &&
					comments.map((message, messageIndex) => (
						<div className="flex" key={messageIndex}>
							<div className="flex-1  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
								<div className="shadow-lg rounded-md w-full">
									<p className="text-sm">
										<Thread
											body={message.content}
											upvotes={0}
											userProfile={{
												id: '',
												firstName:
													comments[messageIndex].user
														.firstName,
												lastName:
													comments[messageIndex].user
														.lastName,
												image: comments[messageIndex]
													.user.icon,
											}}
											id={''}
										/>
									</p>
								</div>
								<div className="border-l-2 ml-3">
									<div className="space-y-4">
										{comments[messageIndex].sub?.length
											? comments[messageIndex].sub.map(
													(value, valueIndex) => (
														<div
															className="flex ml-0.1"
															key={valueIndex}
														>
															<div className="flex-1  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
																<div className="shadow-lg rounded-md w-full">
																	<p className="text-xs sm:text-sm">
																		<Thread
																			body={
																				value.content
																			}
																			upvotes={
																				0
																			}
																			userProfile={{
																				id: '',
																				firstName:
																					comments[
																						valueIndex
																					]
																						.user
																						.firstName,
																				lastName:
																					comments[
																						valueIndex
																					]
																						.user
																						.lastName,
																				image: comments[
																					valueIndex
																				]
																					.user
																					.icon,
																			}}
																			id={
																				''
																			}
																		/>
																	</p>
																</div>
																{comments[
																	messageIndex
																].sub[
																	valueIndex
																].sub?.length &&
																	comments[
																		messageIndex
																	].sub[
																		valueIndex
																	].sub.map(
																		(
																			value1,
																			valueIndex1
																		) => (
																			<div
																				className="flex ml-0.1"
																				key={
																					valueIndex1
																				}
																			>
																				<div className="border-l-2 ml-3">
																					<div className="flex-1  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
																						<div className="shadow-lg rounded-md w-full">
																							<p className="text-xs sm:text-sm">
																								<Thread
																									body={
																										value1.content
																									}
																									upvotes={
																										0
																									}
																									userProfile={{
																										id: '',
																										firstName:
																											comments[
																												valueIndex1
																											]
																												.user
																												.firstName,
																										lastName:
																											comments[
																												valueIndex1
																											]
																												.user
																												.lastName,
																										image: comments[
																											valueIndex1
																										]
																											.user
																											.icon,
																									}}
																									id={
																										''
																									}
																								/>
																							</p>
																						</div>
																					</div>
																				</div>
																			</div>
																		)
																	)}
															</div>
														</div>
													)
											  )
											: null}
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}

export type CommentHierarchyProps = {
	comments: HistoryProps[]
}

type HistoryProps = {
	user: User
	content: string
	sub: sub[]
}
type User = {
	firstName: string
	lastName: string

	icon: string
}
type sub = {
	content: string
	sub: sub[]
}
