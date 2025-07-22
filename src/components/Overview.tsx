import { Users, Award, FileText, TrendingUp } from "lucide-react";

const Overview = () => {
  const stats = [
    {
      title: "إجمالي الطلاب",
      value: "67",
      icon: Users,
      color: "bg-blue-500",
      change: "مدة الدورة شهر ونص ",
    },
    {
      title: "متوسط الدرجات",
      value: "80.5",
      icon: Award,
      color: "bg-green-500",
      change: "+6.1 من الأسبوع الماضي",
    },
    {
      title: "المهام المكتملة",
      value: "  20/20",
      icon: FileText,
      color: "bg-orange-500",
      change: "100% معدل الإنجاز",
    },
    {
      title: "معدل التحسن",
      value: "+79%",
      icon: TrendingUp,
      color: "bg-purple-500",
      change: "مقارنة بالاسبوع الماضي",
    },
  ];

  const recentActivity = [
    {
      student: "GROUP A",
      action: "اكمال شعار الوجبات السريعة ",
      time: "اليوم",
      type: "grade",
    },
    {
      student: " GROUP R",
      action: "    اكمال شعار لمسة ",
      time: " يوم",
      type: "grade",
    },

    {
      student: "فاطمة الزهراء عبدالسلام  ",
      action: " اكمال مجموعة تصاميم لمحل حلويات الذهبي  ",
      time: "منذ يومين",
      type: "grade",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "grade":
        return <Award className="w-4 h-4 text-green-600" />;
      case "assignment":
        return <FileText className="w-4 h-4 text-blue-600" />;
      case "achievement":
        return <TrendingUp className="w-4 h-4 text-purple-600" />;
      default:
        return <Users className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div className={`${stat.color} rounded-lg p-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="mr-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">النشاط الأخير</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start space-x-reverse space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex-shrink-0 mt-1">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.student}
                  </p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
