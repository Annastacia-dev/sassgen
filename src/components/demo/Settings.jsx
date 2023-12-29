import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/Dark';
import { TbBulbFilled, TbBulbOff } from 'react-icons/tb';
import { UserContext } from '../../contexts/User';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { user, setUser } = useContext(UserContext);

  const onNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const onImageChange = (e) => {
    setUser({ ...user, image: e.target.value });
  };

  const onGenderChange = (e) => {
    setUser({ ...user, gender: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success('Profile updated successfully');
  };

  return (
    <div className="bg-[#F0F3F8] dark:border-gray-500 dark:bg-gray-900 dark:text-white sm:h-[33rem] xs:h-40 h-26 border-t border-r border-[#F0F3F8] overflow-hidden flex flex-col">
      <ToastContainer />
      <div className="ml-32 mt-4 mr-4 px-6">
        <div className="flex flex-col gap-1 mt-4">
          <h2 className="font-bold tracking-wide">Appearance</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Manage the appearance for the website
          </p>
          <hr className="border-gray-300 my-2 dark:border-gray-100" />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <h2 className="font-bold tracking-wide">Theme</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Affects the colour palette of the website
          </p>
          <div className="flex gap-2 mt-2">
            <button
              className={`flex items-center gap-1 border px-4 py-2 justify-center ${
                darkMode ? '' : 'bg-yellow-500'
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <TbBulbFilled
                className={`${darkMode ? 'text-yellow-500' : 'text-gray-100'}`}
              />
              <p className="text-sm font-bold">Light</p>
            </button>
            <button
              className={`flex items-center gap-1 border px-4 py-2 justify-center ${
                darkMode ? 'bg-gray-800' : ''
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <TbBulbOff className="text-gray-500" />
              <p className="text-sm font-bold">Dark</p>
            </button>
          </div>
          <hr className="border-gray-300 my-2 dark:border-gray-100" />
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <h2 className="font-bold tracking-wide">Account</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Manage your account settings
          </p>
          <hr className="border-gray-300 my-2 dark:border-gray-100" />
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <h2 className="font-bold tracking-wide">Profile</h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Manage your profile settings
          </p>
          <form className="flex flex-col gap-2 mt-2">
            <div className=" flex gap-2 items-center">
              <div className=" flex gap-2 items-center">
                <label className="text-sm font-bold">
                  Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border px-4 py-2 text-sm dark:text-black"
                  value={user.name}
                  onChange={onNameChange}
                  required
                />
              </div>
              <div className=" flex gap-2 items-center">
                <label className="text-sm font-bold">Image</label>
                <input
                  type="text"
                  className="border px-4 py-2 text-sm dark:text-black"
                  value={user.image}
                  onChange={onImageChange}
                  name="image"
                  id="image"
                />
              </div>
            </div>
            <div className=" flex gap-2 items-center">
              <div className=" flex gap-2 items-center">
                <label className="text-sm font-bold">
                  Gender
                  <span className="text-red-500">*</span>
                </label>
                <select
                  value={user.gender}
                  className="border px-4 py-2 text-sm w-[232px] dark:text-black"
                  onChange={onGenderChange}
                  name="gender"
                  id="gender"
                  selected={user.gender}
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <button
                className="bg-blue-500 text-white px-4 py-2  text-sm font-bold w-60 ml-12"
                onClick={onSubmit}
              >
                Save
              </button>
            </div>
          </form>

          <hr className="border-gray-300 my-2 dark:border-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
