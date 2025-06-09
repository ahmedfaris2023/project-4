import { GraduationCap, Award, FileText, BarChart3 } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navigationItems = [
    { id: 'overview', label: 'نظرة عامة', icon: BarChart3 },
    { id: 'grades', label: 'الدرجات', icon: GraduationCap },
    { id: 'top-students', label: 'الطلاب الأوائل', icon: Award },
    { id: 'group', label: 'تصنيف الكروبات', icon: Award },
    { id: 'assignments', label: 'المهام الأسبوعية', icon: FileText },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-reverse space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">أكاديمية الجرافيك ديزاين</h1>
              <p className="text-sm text-gray-500">نظام متابعة الطلاب</p>
            </div>
          </div>
        </div>
        
        <nav className="flex space-x-reverse space-x-8 mt-4 overflow-x-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-reverse space-x-2 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;