import { Calendar, Clock, CheckCircle, AlertCircle, Plus } from "lucide-react";
import { useState } from "react";

const Assignments = () => {
  const [filter, setFilter] = useState("all");

  const assignments = [
    {
      id: 1,
      group: "Group A",
      title: "مطعم وجبات سريعة باسم فريشلي ",
      description:
        "إنشاء هوية بصرية كاملة تشمل الشعار و المنيو و الاطباق والزي الرسمي و سوشل ميديا و المزيد  ",
      dueDate: "2025-6-20",
      status: "pending",
      priority: "high",
      submittedCount: 0,
      totalStudents: 100,
      category: "الهوية البصرية",
    },
    {
      id: 2,
      group: "Group B",
      title: "مشروع متجر عطور فاخر بسام عبير ",
      description:
        "إنشاء هوية بصرية كاملة الفكرة: هوية أنيقة وفاخرة تعكس الفخامة والذوق العربي. الجمهور المستهدف: النساء والرجال من محبي العطور الراقية. عناصر الهوية: شعار، تغليف العبوات، شنطة التسوق و السوشل ميديا و المزيد.  ",
      dueDate: "2025-6-20",
      status: "pending",
      priority: "high",
      submittedCount: 0,
      totalStudents: 100,
      category: "الهوية البصرية",
    },
    {
      id: 3,
      group: "Group C",
      title: " الاسم لافندر ",
      description:
        "إنشاء هوية بصرية كاملة الفكره : محل ميكب وعنايه .الالوان المستخدمه :البنفسجي وتدرجاته مع تطبيق توصيل لتسهيل التسوق. عناصر الهوية: شعار، تغليف العبوات، شنطة التسوق و السوشل ميديا و المزيد.  ",
      dueDate: "2025-6-20",
      status: "pending",
      priority: "high",
      submittedCount: 0,
      totalStudents: 100,
      category: "الهوية البصرية",
    },
    {
      id: 4,
      group: "Group D",
      title: "محل مختصة في القهوة الباردة باسم ثلجة ",
      description:
        "• الفكرة: علامة تجارية شبابية منعشة، تعكس البرودة والراحة. الجمهور المستهدف: فئة الشباب 18-30 سنة. • عناصر الهوية:شعار، أكواب، منيو، سوشيال ميديا و المزيد",
      dueDate: "2025-6-20",
      status: "pending",
      priority: "high",
      submittedCount: 0,
      totalStudents: 100,
      category: "الهوية البصرية",
    },
    {
      id: 5,
      group: "Group R",
      title: "",
      description:
        "• هوية أنثوية ناعمة. •  عناصر الهوية: الشعار، علب التغليف، ستاندات العرض، كيس السوق و السوشل ميديا و المزيد",
      dueDate: "2025-6-20",
      status: "pending",
      priority: "high",
      submittedCount: 0,
      totalStudents: 100,
      category: "الهوية البصرية",
    },
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "completed":
        return {
          label: "مكتمل",
          color: "text-green-700 bg-green-100",
          icon: CheckCircle,
        };
      case "due-soon":
        return {
          label: "ينتهي قريباً",
          color: "text-yellow-700 bg-yellow-100",
          icon: Clock,
        };
      case "pending":
        return {
          label: "في الانتظار",
          color: "text-blue-700 bg-blue-100",
          icon: Calendar,
        };
      default:
        return {
          label: "غير محدد",
          color: "text-gray-700 bg-gray-100",
          icon: AlertCircle,
        };
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-r-4 border-red-500";
      case "medium":
        return "border-r-4 border-yellow-500";
      case "low":
        return "border-r-4 border-green-500";
      default:
        return "border-r-4 border-gray-300";
    }
  };

  const filteredAssignments = assignments.filter((assignment) => {
    if (filter === "all") return true;
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
          <h2 className="text-lg font-semibold text-gray-900">
            المهام الأسبوعية
          </h2>
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
        </div>
      </div>

      {/* Assignments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAssignments.map((assignment) => {
          const statusInfo = getStatusInfo(assignment.status);
          const StatusIcon = statusInfo.icon;
          const progressPercentage = getProgressPercentage(
            assignment.submittedCount,
            assignment.totalStudents
          );

          return (
            <div
              key={assignment.id}
              className={`bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 ${getPriorityColor(
                assignment.priority
              )}`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {assignment.group}
                    </h3>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {assignment.title}
                    </h3>
                    <span className="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                      {assignment.category}
                    </span>
                  </div>
                  <div
                    className={`flex items-center space-x-reverse space-x-1 px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}
                  >
                    <StatusIcon className="w-3 h-3" />
                    <span>{statusInfo.label}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  {assignment.description}
                </p>

                {/* Due Date */}
                <div className="flex items-center space-x-reverse space-x-2 mb-4">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    تاريخ التسليم:{" "}
                    {new Date(assignment.dueDate).toLocaleDateString("ar-EG")}
                  </span>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">تقدم التسليم</span>
                    <span className="text-sm font-medium text-gray-900">
                      {assignment.submittedCount}/{assignment.totalStudents} (
                      {progressPercentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        progressPercentage === 100
                          ? "bg-green-500"
                          : progressPercentage >= 75
                          ? "bg-blue-500"
                          : progressPercentage >= 50
                          ? "bg-yellow-500"
                          : "bg-red-500"
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

                  {assignment.status !== "completed" && (
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 ml-1" />
                      {Math.max(
                        0,
                        Math.ceil(
                          (new Date(assignment.dueDate).getTime() -
                            new Date().getTime()) /
                            (1000 * 60 * 60 * 24)
                        )
                      )}{" "}
                      يوم متبقي
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
