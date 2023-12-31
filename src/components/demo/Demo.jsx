import { useState } from 'react';
import DemoSideBar from './DemoSideBar';
import Dashboard from './Dashboard';
import DemoRightBar from './DemoRightBar';
import CreateGoal from './CreateGoal';
import Messages from './Messages';
import Settings from './Settings';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard />;
      case 'dashboard':
        return <Dashboard />;
      case 'create goal':
        return <CreateGoal />;
      case 'messages':
        return <Messages />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <div className="sm:flex justify-center items-center relative mt-10 hidden">
        <div className="bg-[#F9FBFF] dark:bg-gray-900 rounded-xl shadow-lg p-10 absolute sm:w-[51rem] xs:w-[21rem] w-44 sm:h-[36rem] xs:h-[12rem] h-32">
          <div className="h-2 w-2 bg-gray-400 sm:top-2 top-1 sm:left-96 left-44 rounded-full absolute"></div>
          <div className="bg-white dark:bg-gray-900 sm:w-[49rem] xs:w-[19rem] w-40 sm:h-[33rem] xs:h-32 h-28 sm:-ml-6 -ml-6 sm:-mt-4 -mt-6 relative">
            <div>{renderTab()}</div>
            <DemoSideBar activeTab={activeTab} setActiveTab={setActiveTab} />
            {(activeTab === 'dashboard' || activeTab === 'home') && (
              <DemoRightBar />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
