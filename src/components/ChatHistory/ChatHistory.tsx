import * as React from 'react'
import * as moment from 'moment'
import { Chat } from './Chat'
import { useState } from 'react'

export const ChatHistory :React.FC<ChatHistoryProps> = ({ 
	messages, 
	handle 
}):React.ReactElement => {
	const [currentlyCheckedIndex, setCurrentlyCheckedIndex] = useState(0);
	return (
		<div className="flex flex-col w-full h-full max-h-screen border-r-2 overflow-y-scroll">

			{messages?.length &&
				messages.map((message, messageIndex) => (
					<div onClick={() => setCurrentlyCheckedIndex(messageIndex)} key={messageIndex}>
						<Chat message={message} checked={currentlyCheckedIndex === messageIndex} handle={handle} />
					</div>
				))}
		</div>
	)
}

export type ChatHistoryProps = {
	/**
	 * Assigning the below declared type "HistoryProps" to chat history
	 */
	messages: HistoryProps[]
	/**
	 * An event handler embedded in documents as attributes of HTML which you assign JavaScript code to execute
	 */
	handle: () => void
}
export type HistoryProps = {
	/**
	 * A string that indicates the contact name of the person
	 */
	name: string
	/**
	 * A string that indicates the url link of the contact person's image
	 */
	image: string
	/**
	 * A boolean that determines whether the chat history is selected 
	 */
	selected: boolean
	/**
	 * A Timestamp represents a point in time independent of any time zone or calendar, represented as seconds and fractions of seconds at nanosecond 
	 */
	timestamp: number
	/**
	 * A boolean that determines whether the chat history has been read
	 */
	newNotification: boolean
}
