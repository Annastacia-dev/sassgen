import { useState } from 'react';
import { IoIosSend } from 'react-icons/io';

const Messages = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Working out conversation
  const randomMessages = [
    'Hi',
    'How are you?',
    'I am good',
    'What are you doing?',
    'Lunges are the best',
    'Squats help you build muscles',
    'Walking is good for health',
  ];

  function sendMessage() {
    if (message.trim() !== '') {
      const newSentMessage = {
        sender: 'You',
        message,
        messageType: 'sent',
        timestamp: Date.now(),
      };
      setMessages([...messages, newSentMessage]);
      setMessage('');
      receiveMessage();
    }
  }

  function receiveMessage() {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    const randomMessage = randomMessages[randomIndex];

    setTimeout(() => {
      const newReceivedMessage = {
        sender: 'Stranger',
        message: randomMessage,
        messageType: 'received',
        timestamp: Date.now(),
      };
      setMessages((prevMessages) => [...prevMessages, newReceivedMessage]);
    }, 1000); // Simulate delay in receiving message
  }

  return (
    <div className="bg-[#F0F3F8] sm:h-[33rem] xs:h-40 h-26 border-t border-r border-[#F0F3F8] overflow-hidden flex flex-col">
      <div className="ml-32 mt-4 mr-4">
        <div className="m-0 p-0 flex justify-center items-center sm:h-[31rem] xs:h-40 h-26 bg-gray-200">
          <div className="border border-gray-300 sm:h-[31rem] xs:h-40 h-26 w-full rounded-lg flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-scroll p-10" id="chatMessages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-1 items-${
                    message.messageType === 'sent' ? 'end' : 'start'
                  }`}
                >
                  <div
                    className={`${
                      message.messageType === 'sent'
                        ? 'bg-primary text-right text-white'
                        : 'bg-white text-left text-black'
                    } rounded-sm py-2 px-6 max-w-[30%]`}
                  >
                    {message.message}
                  </div>
                  <div className="text-xs text-gray-500 mr-2 ml-2">
                    {message.sender}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center p-10 bg-transparent">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 p-3 border border-primary bg-transparent text-primary placeholder:text-primary focus:ring-transparent focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    sendMessage();
                  }
                }}
              />
              <button
                className="px-8 py-3 bg-primary text-white border-none ml-10 cursor-pointer"
                onClick={sendMessage}
              >
                <IoIosSend className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
