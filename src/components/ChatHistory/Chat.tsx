import * as React from 'react'
import * as moment from 'moment'

import { FaTrash, FaArchive } from 'react-icons/fa'

export const Chat :React.FC<ChatHistoryProps> = ({ 
	checked,
    message, 
	handle 
}):React.ReactElement => {
    
	return (
        <div
            className={
                [
                    'chat-element',
                    'flex flex-row py-4 px-2 justify-center items-center',
                    'border-l-4',
                    checked ? 'border-l-blue-700' : 'border-l-transparent'
                ].join(' ')
            }
            // onClick={() => setIsChecked(index)}
        >
            <div className="w-1/4">
                <img
                    src={message.image}
                    className="object-cover h-12 w-12 rounded-full aspect-square"
                    alt=""
                />
            </div>
            <div className="w-full">
                <div className="flex flex-col gap-3">
                    <div className="text-lg font-semibold">
                        {message.name}
                    </div>
                    <span className="text-gray-500 text-xs">
                        {moment.unix(message.timestamp).fromNow()}
                    </span>
                </div>
            </div>
            <div className="flex flex-row">
                <button aria-label="delete chat history" className="flex items-center justify-center px-4 cursor-pointer delete-icon">
                    <FaTrash
                        size={20}
                        className="mr-1"
                        onClick={handle}
                    />
                </button>
                <button  aria-label="archive chat history" className="flex items-center justify-center px-4 cursor-pointer archive-icon">
                    <FaArchive
                        size={20}
                        className="mr-1"
                        onClick={handle}
                    />
                </button>
            </div>
        </div>
	)
}

export type ChatHistoryProps = {
    /**
     * A boolean that indicates whether the chat history is selected 
     */
    checked: boolean
	/**
	 * Assigning the below declared type "HistoryProps" to chat history
	 */
	message: HistoryProp
	/**
	 * An event handler embedded in documents as attributes of HTML which you assign JavaScript code to execute
	 */
	handle: () => void
}

export type HistoryProp = {
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
