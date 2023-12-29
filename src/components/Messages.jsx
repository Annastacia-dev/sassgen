import { useState, useEffect, useRef } from 'react';
import { IoIosSend } from 'react-icons/io';

const Messages = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const chatContainerRef = useRef(null);

  // Working out conversation
  const randomMessages = [
    'Fun fact: The first recorded use of the word “gymnasium” was in 1598, meaning “school for gymnastics.”',
    'Workout Tip: Don’t skip leg day!',
    'Quote of the day: “The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not a champion.” – Arnold Schwarzenegger',
    'Question of the day: What is your favorite workout?',
    'Fun fact: The word “gymnasium” comes from the Greek word gymnazein, which means “to exercise naked.”',
    'Did you know? The first modern gym was opened in 1849 by Hippolyte Triat.',
    'Lunges are a great exercise for strengthening, sculpting and building several muscles/muscle groups, including the quadriceps (or thighs), the gluteus maximus (or buttocks) as well as the hamstrings.',
    'Did you know? The first dumbbells were actually bells, with the clappers removed.',
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
        sender: 'Gymes',
        message: randomMessage,
        messageType: 'received',
        timestamp: Date.now(),
      };
      setMessages((prevMessages) => [...prevMessages, newReceivedMessage]);
    }, 1000); // Simulate delay in receiving message
  }

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-[#F0F3F8] dark:bg-gray-900 sm:h-[33rem] xs:h-40 h-26 border-t border-r border-[#F0F3F8] overflow-hidden flex flex-col dark:border-gray-500">
      <div className="ml-32 mt-4 mr-4">
        <div className="m-0 p-0 flex justify-center items-center sm:h-[31rem] xs:h-40 h-26 bg-gray-200 dark:bg-gray-800 rounded-lg">
          <div className="border border-gray-300 dark:border-gray-700 sm:h-[31rem] xs:h-40 h-26 w-full rounded-lg flex flex-col overflow-hidden">
            <div
              className="flex-1 overflow-y-scroll p-10"
              id="chatMessages"
              ref={chatContainerRef}
            >
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
                        ? 'bg-primary dark:bg-secondaryDark text-right dark:text-white'
                        : 'bg-white dark:bg-gray-600 text-left dark:text-white'
                    } rounded-sm py-2 px-6 max-w-[80%]`}
                  >
                    {message.message}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-200 mr-2 ml-2">
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
                className="flex-1 p-3 border border-primary dark:border-secondary dark:text-secondary bg-transparent text-primary placeholder:text-primary dark:placeholder:text-secondary focus:ring-transparent focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    sendMessage();
                  }
                }}
              />
              <button
                className="px-8 py-3 bg-primary dark:bg-secondary text-white border-none ml-10 cursor-pointer"
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
