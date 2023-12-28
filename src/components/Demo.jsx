import { useState } from 'react';
import DemoSideBar from './DemoSideBar';
import Dashboard from './Dashboard';
import DemoRightBar from './DemoRightBar';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loggedIn, setLoggedIn] = useState(true);

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard  />;
      case 'dashboard':
        return <Dashboard />;
      case 'create goal':
        return <div className="ml-32">Create Goal</div>;
      case 'messages':
        return <div className="ml-32">Messages</div>;
      case 'settings':
        return <div className="ml-32">Settings</div>;
      default:
        return <div className="ml-32">Home</div>;
    }
  };

  return (
    <>
      <div className="flex justify-center items-center relative mt-10">
        <div className="bg-[#F9FBFF] rounded-xl shadow-lg p-10 absolute sm:w-[51rem] xs:w-[21rem] w-44 sm:h-[36rem] xs:h-[12rem] h-32">
          <div className="h-2 w-2 bg-gray-400 sm:top-2 top-1 sm:left-96 left-44 rounded-full absolute"></div>
          <div className="bg-white sm:w-[49rem] xs:w-[19rem] w-40 sm:h-[33rem] xs:h-32 h-28 sm:-ml-6 -ml-6 sm:-mt-4 -mt-6 relative">
            <div>{renderTab()}</div>
            <DemoSideBar activeTab={activeTab} setActiveTab={setActiveTab}  loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            { (activeTab === 'dashboard' || activeTab === 'home') && (
            <DemoRightBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            )}
          </div>
        </div>
      </div>
      <div className="mt-96 text-white">Heloo</div>
    </>
  );
};

export default Demo;
