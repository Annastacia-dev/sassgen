const workouts = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1599552683573-9dc48255fe85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtvdXR8ZW58MHx8MHx8fDA%3Dg',
    title: 'ultimate bodyweight workout',
    trainer: 'james',
    duration: '210',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1591258370814-01609b341790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdvcmtvdXR8ZW58MHx8MHx8fDA%3D',
    title: 'beginner to advanced gym',
    trainer: 'smith',
    duration: '75',
  },
];

const Recommended = () => {
  return (
    <div className="flex flex-col gap-1">
      {workouts.map((workout) => (
        <div
          className="flex justify-between items-center bg-white dark:bg-gray-800 dark:text-white py-2 px-2 rounded-lg"
          key={workout.id}
        >
          <div className="flex gap-4">
            <img
              src={workout.image}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col justify-center items-start">
              <h3 className=" font-bold tracking-wide text-xs capitalize">
                {workout.title}
              </h3>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex gap-1 items-center">
              <p className="text-gray-800 dark:text-gray-200 text-xs capitalize">
                {workout.trainer}
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <p className="text-gray-800 dark:text-gray-200 text-xs">
                {workout.duration}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
