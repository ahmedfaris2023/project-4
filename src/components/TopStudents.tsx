import { Award, Trophy, Medal, Star } from "lucide-react";

const TopStudents = () => {
  const topStudents = [
    {
      rank: 1,
      name: "مجهول",
      average: 0.0,
      improvement: "+0.0",
      projects: 0,
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      rank: 2,
      name: "مجهول ",
      average: 0.0,
      improvement: "+0.0",
      projects: 0,
      icon: Award,
      color: "from-gray-300 to-gray-500",
      bgColor: "bg-gray-50",
      textColor: "text-gray-700",
    },
    {
      rank: 3,
      name: "مجهول",
      average: 0.0,
      improvement: "+0.0",
      projects: 0,
      icon: Medal,
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
  ];

  const achievements = [
    {
      student: " مجهول",
      achievement: "أفضل مشروع .......",
      date: "2025/5",
      icon: Star,
    },
    {
      student: " مجهول",
      achievement: "ثاني أفضل مشروع .......",
      date: "2025/5",
      icon: Award,
    },
    {
      student: " مجهول",
      achievement: "ثالث أفضل مشروع .......",
      date: "2025/5",
      icon: Award,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top 3 Students */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topStudents.map((student) => {
          const Icon = student.icon;
          return (
            <div
              key={student.rank}
              className={`relative overflow-hidden bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${
                student.rank === 1 ? "md:scale-105 ring-2 ring-yellow-200" : ""
              }`}
            >
              {/* Rank Badge */}
              <div
                className={`absolute top-4 left-4 w-8 h-8 bg-gradient-to-br ${student.color} rounded-full flex items-center justify-center`}
              >
                <span className="text-white font-bold text-sm">
                  #{student.rank}
                </span>
              </div>

              {/* Background Pattern */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 ${student.bgColor} rounded-bl-full opacity-50`}
              />

              <div className="p-6 pt-8">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 ${student.bgColor} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${student.textColor}`} />
                  </div>
                  {student.rank === 1 && (
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {student.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">المتوسط العام</span>
                    <span className="text-lg font-bold text-gray-900">
                      {student.average}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">التحسن</span>
                    <span className="text-sm font-semibold text-green-600">
                      {student.improvement}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      المشاريع المكتملة
                    </span>
                    <span className="text-sm font-semibold text-blue-600">
                      {student.projects}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>تقدم الطالب</span>
                    <span>{student.average}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${student.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${student.average}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            الإنجازات الأخيرة
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-reverse space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900">
                      {achievement.student}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {achievement.achievement}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {achievement.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStudents;
