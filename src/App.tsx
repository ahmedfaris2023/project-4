import React, { useState } from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import GradesTable from './components/GradesTable';
import TopStudents from './components/TopStudents';
import Assignments from './components/Assignments';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'grades':
        return <GradesTable />;
      case 'top-students':
        return <TopStudents />;
      case 'assignments':
        return <Assignments />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>© 2024 أكاديمية الجرافيك ديزاين - جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;