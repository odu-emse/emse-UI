import * as React from 'react'

export const CommentHierarchy: React.FC<CommentHierarchyProps> = ({
	comments,
}): React.ReactElement => {
	const [index, setIndex] = React.useState(0)
	const [index1, setIndex1] = React.useState(0)

	return (
		<div className="antialiased mx-auto max-w-screen-sm">
			<div className="space-y-4">
				{comments?.length &&
					comments.map((message, messageIndex) => (
						<div className="flex" key={messageIndex}>
							<div className="flex-1  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
								<div className="shadow-lg rounded-md w-full">
									<div className="flex items-center space-x-3">
										<div className="flex flex-wrap justify-center">
											<div className="relative aspect-square w-8 h-auto rounded-full shadow">
												<img
													src={
														comments[index].user
															.icon
													}
													alt="user profile image"
													className="shadow-lg rounded-full max-w-full h-8 align-middle border-none"
												/>
											</div>
										</div>

										<div className="mt-5 mb-6">
											<div className="mb-1 text-lg font-bold text-slate-700">
												{comments[index].user.uName}
											</div>
										</div>
									</div>
									<p className="text-sm">{message.content}</p>
								</div>
								<div className="border-l-2 ml-3">
									<div className="space-y-4">
										{comments[index].sub?.length &&
											comments[index].sub.map(
												(value, valueIndex) => (
													<div
														className="flex ml-0.1"
														key={valueIndex}
													>
														<div className="flex-1  rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
															<div className="shadow-lg rounded-md w-full">
																<div className="flex items-center space-x-3">
																	<div className="flex flex-wrap justify-center">
																		<div className="relative aspect-square w-8 h-auto rounded-full shadow">
																			<img
																				src={
																					comments[
																						index
																					]
																						.user
																						.icon
																				}
																				alt="user profile image"
																				className="shadow-lg rounded-full max-w-full h-8 align-middle border-none"
																			/>
																		</div>
																	</div>

																	<div className="mt-5 mb-6">
																		<div className="mb-1 text-lg font-bold text-slate-700">
																			{
																				comments[
																					index
																				]
																					.user
																					.uName
																			}
																		</div>
																	</div>
																</div>
																<p className="text-xs sm:text-sm">
																	{
																		value.content
																	}
																</p>
															</div>
															{comments[index]
																.sub[index].sub
																?.length &&
																comments[
																	index
																].sub[
																	index
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
																						<div className="flex items-center space-x-3">
																							<div className="flex flex-wrap justify-center">
																								<div className="relative aspect-square w-8 h-auto rounded-full shadow">
																									<img
																										src={
																											comments[
																												index
																											]
																												.user
																												.icon
																										}
																										alt="user profile image"
																										className="shadow-lg rounded-full max-w-full h-8 align-middle border-none"
																									/>
																								</div>
																							</div>

																							<div className="mt-5 mb-6">
																								<div className="mb-1 text-lg font-bold text-slate-700">
																									{
																										comments[
																											index
																										]
																											.user
																											.uName
																									}
																								</div>
																							</div>
																						</div>
																						<p className="text-xs sm:text-sm">
																							{
																								value1.content
																							}
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
											)}
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
	uName: string
	icon: string
}
type sub = {
	content: string
	sub: sub[]
}
