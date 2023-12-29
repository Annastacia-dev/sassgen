import { useContext } from "react"
import { DarkModeContext } from "../contexts/Dark"
import { TbBulbFilled, TbBulbOff } from "react-icons/tb";

const Settings = () => {
  const { darkMode, setDarkMode} = useContext(DarkModeContext)

  return (
    <div className="bg-[#F0F3F8] dark:border-gray-500 dark:bg-gray-900 dark:text-white sm:h-[33rem] xs:h-40 h-26 border-t border-r border-[#F0F3F8] overflow-hidden flex flex-col">
    <div className="ml-32 mt-4 mr-4 px-6">
      <div className='flex flex-col gap-1 mt-4'>
        <h2 className='font-bold tracking-wide'>
          Appearance
        </h2>
        <p className='text-sm text-gray-500 dark:text-gray-300'>
          Manage the appearance for the website
        </p>
        <hr className='border-gray-300 my-2 dark:border-gray-100' />
      </div>
      <div className='flex flex-col gap-1 mt-4'>
        <h2 className='font-bold tracking-wide'>
          Theme
        </h2>
        <p className='text-sm text-gray-500 dark:text-gray-300'>
          Affects the colour palette of the website
        </p>
        <div className='flex gap-2 mt-2'>
          <button className={`flex items-center gap-1 border px-4 py-2 justify-center ${darkMode ? '' : 'bg-yellow-500'}`}
          onClick={() => setDarkMode(!darkMode)}
          >
            <TbBulbFilled className={`${darkMode ? 'text-yellow-500' : 'text-gray-100'}`} />
            <p className='text-sm font-bold'>
              Light
            </p>
          </button>
          <button className={`flex items-center gap-1 border px-4 py-2 justify-center ${darkMode ? 'bg-gray-800' : ''}`}
          onClick={() => setDarkMode(!darkMode)}
          >
            <TbBulbOff className='text-gray-500' />
            <p className='text-sm font-bold'>
              Dark
            </p>
          </button>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Settings
