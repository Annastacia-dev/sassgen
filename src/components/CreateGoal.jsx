import { useState } from 'react';
import { CiSquarePlus, CiClock1, CiCalendar } from 'react-icons/ci';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateGoal = () => {
  const goalsData = [
    {
      title: 'Squats',
      description: 'Do 100 squats daily',
      duration: '3 months',
      time: '12:00',
    },
  ];

  const [goal, setGoal] = useState({
    title: '',
    description: '',
    duration: '',
    time: '',
  });
  const [goals, setGoals] = useState(goalsData);

  const onChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    if (goals.length >= 4) {
      e.preventDefault();
      toast.error('You can only create 4 goals');
      setGoal({
        title: '',
        description: '',
        duration: '',
        time: '',
      });
    } else {
    e.preventDefault();
    const newGoal = {
      title: goal.title,
      description: goal.description,
      duration: goal.duration,
      time: goal.time,
    };
    setGoals([...goals, newGoal]);
    setGoal({
      title: '',
      description: '',
      duration: '',
      time: '',
    });
    toast.success('Goal created successfully');
    }
  };

  return (
    <div className="bg-gray-100 sm:h-[33rem] xs:h-40 h-26 border-t border-r border-[#F0F3F8]">
      <div className="ml-32 mt-4">
      <ToastContainer />
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <h2 className="text-sm uppercase">create Goal</h2>
            <hr className="border-gray-300 my-2" />

            <form
              className="flex flex-col justify-center gap-4 shadow-lg p-4 rounded-lg mt-4"
              onSubmit={onSubmit}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-xs">
                  Title
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="border border-black bg-transparent px-2 py-1 text-xs outline-none text-gray-700 focus:ring-transparent focus:outline-none w-56"
                  placeholder="Enter title"
                  required
                  value={goal.title}
                  onChange={onChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-xs text-gray-500">
                  Description
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="4"
                  className="border border-black bg-transparent px-2 py-1 text-xs outline-none text-gray-700 focus:ring-transparent focus:outline-none w-56"
                  placeholder="Enter description"
                  required
                  value={goal.description}
                  onChange={onChange}
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="duration" className="text-xs text-gray-500">
                  Duration
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="duration"
                  id="duration"
                  className="border border-black bg-transparent px-2 py-1 text-xs outline-none text-gray-700 focus:ring-transparent focus:outline-none w-56"
                  placeholder="Enter duration"
                  required
                  value={goal.duration}
                  onChange={onChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="time" className="text-xs text-gray-500">
                  Time
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="border border-black bg-transparent px-2 py-1 text-xs outline-none text-gray-700 focus:ring-transparent focus:outline-none w-56"
                  placeholder="Enter time"
                  required
                  value={goal.time}
                  onChange={onChange}
                />
              </div>

              <div className="my-4">
                <button
                  type="submit"
                  className="bg-[#F67E49] flex justify-center items-center text-white px-4 py-2 text-xs  w-56"
                >
                  <CiSquarePlus className="inline-block mr-2" />
                  <p>Create</p>
                </button>
              </div>
            </form>
          </div>

          <div className="col-span-1 px-2">
            <div className="flex gap-2">
              <CiCalendar />
              <h2 className="text-sm uppercase">Goals</h2>
            </div>
            <hr className="border-gray-300 my-2" />

            {goals.map((goal, index) => (
              <div
                className={`flex flex-col gap-4 ${
                  index % 2 === 0
                    ? 'bg-gradient-to-r from-primary to-primaryDark text-white'
                    : 'bg-white text-black'
                } p-4 rounded-lg mt-4 shadow-sm`}
                key={index}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xs font-bold">{goal.title}</h3>
                    <p className="text-xs">{goal.duration}</p>
                  </div>
                  <p className="text-xs">{goal.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 justify-center items-center">
                      <CiClock1 className="text-xs" />
                      <p className="text-xs">{goal.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGoal;
