import { Calendar, Clock, CheckCircle, AlertCircle, Plus } from 'lucide-react';
import { useState } from 'react';

const Assignments = () => {
  const [filter, setFilter] = useState('all');

  const assignments = [
    {
      id: 1,
      title: 'تصميم هوية بصرية لشركة ناشئة',
      description: 'إنشاء هوية بصرية كاملة تشمل الشعار والألوان والخطوط',
      dueDate: '2024-12-20',
      status: 'pending',
      priority: 'high',
      submittedCount: 18,
      totalStudents: 24,
      category: 'الهوية البصرية'
    },
    {
      id: 2,
      title: 'تصميم بوستر إعلاني لحدث ثقافي',
      description: 'تصميم بوستر جذاب ومبتكر لحدث ثقافي محلي',
      dueDate: '2024-12-18',
      status: 'due-soon',
      priority: 'medium',
      submittedCount: 22,
      totalStudents: 24,
      category: 'تصميم البوستر'
    },
    {
      id: 3,
      title: 'تطوير تطبيق موبايل - واجهة المستخدم',
      description: 'تصميم واجهات تطبيق موبايل لمنصة تعليمية',
      dueDate: '2024-12-15',
      status: 'completed',
      priority: 'high',
      submittedCount: 24,
      totalStudents: 24,
      category: 'تصميم الويب'
    },
    {
      id: 4,
      title: 'تصميم عبوات منتجات غذائية',
      description: 'تصميم عبوات مبتكرة لمنتجات غذائية محلية',
      dueDate: '2024-12-25',
      status: 'pending',
      priority: 'low',
      submittedCount: 12,
      totalStudents: 24,
      category: 'التعبئة والتغليف'
    },
    {
      id: 5,
      title: 'إنشاء محتوى بصري لوسائل التواصل',
      description: 'تصميم مجموعة منشورات لحملة تسويقية على وسائل التواصل',
      dueDate: '2024-12-22',
      status: 'pending',
      priority: 'medium',
      submittedCount: 16,
      totalStudents: 24,
      category: 'تصميم البوستر'
    }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          label: 'مكتمل',
          color: 'text-green-700 bg-green-100',
          icon: CheckCircle
        };
      case 'due-soon':
        return {
          label: 'ينتهي قريباً',
          color: 'text-yellow-700 bg-yellow-100',
          icon: Clock
        };
      case 'pending':
        return {
          label: 'في الانتظار',
          color: 'text-blue-700 bg-blue-100',
          icon: Calendar
        };
      default:
        return {
          label: 'غير محدد',
          color: 'text-gray-700 bg-gray-100',
          icon: AlertCircle
        };
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-r-4 border-red-500';
      case 'medium':
        return 'border-r-4 border-yellow-500';
      case 'low':
        return 'border-r-4 border-green-500';
      default:
        return 'border-r-4 border-gray-300';
    }
  };

  const filteredAssignments = assignments.filter(assignment => {
    if (filter === 'all') return true;
    return assignment.status === filter;
  });

  const getProgressPercentage = (submitted: number, total: number) => {
    return Math.round((submitted / total) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">المهام الأسبوعية</h2>
          <p className="text-sm text-gray-600">إدارة ومتابعة مهام الطلاب</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
          >
            <option value="all">جميع المهام</option>
            <option value="pending">في الانتظار</option>
            <option value="due-soon">ينتهي قريباً</option>
            <option value="completed">مكتملة</option>
          </select>
          
          <button className="flex items-center space-x-reverse space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
            <Plus className="w-4 h-4" />
            <span>إضافة مهمة</span>
          </button>
        </div>
      </div>

      {/* Assignments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAssignments.map((assignment) => {
          const statusInfo = getStatusInfo(assignment.status);
          const StatusIcon = statusInfo.icon;
          const progressPercentage = getProgressPercentage(assignment.submittedCount, assignment.totalStudents);
          
          return (
            <div
              key={assignment.id}
              className={`bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 ${getPriorityColor(assignment.priority)}`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{assignment.title}</h3>
                    <span className="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                      {assignment.category}
                    </span>
                  </div>
                  <div className={`flex items-center space-x-reverse space-x-1 px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
                    <StatusIcon className="w-3 h-3" />
                    <span>{statusInfo.label}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">{assignment.description}</p>

                {/* Due Date */}
                <div className="flex items-center space-x-reverse space-x-2 mb-4">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    تاريخ التسليم: {new Date(assignment.dueDate).toLocaleDateString('ar-SA')}
                  </span>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">تقدم التسليم</span>
                    <span className="text-sm font-medium text-gray-900">
                      {assignment.submittedCount}/{assignment.totalStudents} ({progressPercentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        progressPercentage === 100 ? 'bg-green-500' : 
                        progressPercentage >= 75 ? 'bg-blue-500' : 
                        progressPercentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex space-x-reverse space-x-2">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-150">
                      عرض التفاصيل
                    </button>
                    <button className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors duration-150">
                      تحرير
                    </button>
                  </div>
                  
                  {assignment.status !== 'completed' && (
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 ml-1" />
                      {Math.max(0, Math.ceil((new Date(assignment.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))} يوم متبقي
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assignments;