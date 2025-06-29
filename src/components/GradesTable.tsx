import { Search, Filter, Download } from "lucide-react";
import { useState } from "react";

const GradesTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const students = [
    {
      id: 1,
      name: "الاء عبد الباسط خليل ",
      subjects: {
        "الهوية البصرية": "69",
        "التصاميم الفردية": 40,
        "التصاميم الجماعية": 90,
        الاضافات: 20,
      },
      average: 219,
    },
    {
      id: 2,
      name: "الاء ماهر  محمد صالح",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 3,
      name: "امنة احمد هاشم",
      subjects: {
        "الهوية البصرية": 24,
        "التصاميم الفردية": 10,
        "التصاميم الجماعية": 64,
        الاضافات: 6,
      },
      average: 104,
    },
    {
      id: 4,
      name: "اية منهل يحيى",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 5,
      name: " اية  محمد",
      subjects: {
        "الهوية البصرية": 21,
        "التصاميم الفردية": 15,
        "التصاميم الجماعية": 64,
        الاضافات: 5,
      },
      average: 102,
    },
    {
      id: 6,
      name: " ايمان موفق جعفر",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },

    {
      id: 8,
      name: " جهان محمد عامر ",
      subjects: {
        "الهوية البصرية": 20,
        "التصاميم الفردية": 40,
        "التصاميم الجماعية": 55,
        الاضافات: 16,
      },
      average: 131,
    },
    {
      id: 9,
      name: " حلا نزار عبدالسلام",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 10,
      name: " رحمة ناطق مظفر",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 3,
      },
      average: 3,
    },
    {
      id: 11,
      name: " رحمة ضياء مظفر",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 15,
      },
      average: 0,
    },
    {
      id: 12,
      name: " رفل سمار محمود",
      subjects: {
        "الهوية البصرية": 35,
        "التصاميم الفردية": 30,
        "التصاميم الجماعية": 100,
        الاضافات: 10,
      },
      average: 175,
    },
    {
      id: 13,
      name: " ريام محمد يحيى",
      subjects: {
        "الهوية البصرية": 85,
        "التصاميم الفردية": 75,
        "التصاميم الجماعية": 100,
        الاضافات: 25,
      },
      average: 285,
    },
    {
      id: 14,
      name: " ريم احمد محمد",
      subjects: {
        "الهوية البصرية": 45,
        "التصاميم الفردية": 65,
        "التصاميم الجماعية": 55,
        الاضافات: 15,
      },
      average: 180,
    },
    {
      id: 15,
      name: " سارة صلاح عبدحسن ",

      subjects: {
        "الهوية البصرية": 25,
        "التصاميم الفردية": 45,
        "التصاميم الجماعية": 90,
        الاضافات: 10,
      },
      average: 170,
    },
    {
      id: 16,
      name: "سرى انس ",
      subjects: {
        "الهوية البصرية": 20,
        "التصاميم الفردية": 15,
        "التصاميم الجماعية": 64,
        الاضافات: 10,
      },
      average: 109,
    },
    {
      id: 17,
      name: "شهد نزار محمود",
      subjects: {
        "الهوية البصرية": 91,
        "التصاميم الفردية": 60,
        "التصاميم الجماعية": 110,
        الاضافات: 45,
      },
      average: 306,
    },
    {
      id: 18,
      name: " غفران عمار عبدالسلام",
      subjects: {
        "الهوية البصرية": 25,
        "التصاميم الفردية": 45,
        "التصاميم الجماعية": 90,
        الاضافات: 10,
      },
      average: 170,
    },
    {
      id: 19,
      name: " فاطمة الزهراء عبدالسلام",
      subjects: {
        "الهوية البصرية": 31,
        "التصاميم الفردية": 50,
        "التصاميم الجماعية": 55,
        الاضافات: 18,
      },
      average: 154,
    },
    {
      id: 20,
      name: " كولجان خالد",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 21,
      name: "مريم حسام صالح",
      subjects: {
        "الهوية البصرية": 48,
        "التصاميم الفردية": 50,
        "التصاميم الجماعية": 90,
        الاضافات: 10,
      },
      average: 198,
    },
    {
      id: 22,
      name: "مريم عبدالكريم  ",
      subjects: {
        "الهوية البصرية": 37,
        "التصاميم الفردية": 55,
        "التصاميم الجماعية": 64,
        الاضافات: 21,
      },
      average: 177,
    },
    {
      id: 23,
      name: " مينا ماهر عبدالقادر",
      subjects: {
        "الهوية البصرية": 47,
        "التصاميم الفردية": 55,
        "التصاميم الجماعية": 55,
        الاضافات: 17,
      },
      average: 174,
    },
    {
      id: 24,
      name: " مينا نجم الدين عبدالله",
      subjects: {
        "الهوية البصرية": 25,
        "التصاميم الفردية": 25,
        "التصاميم الجماعية": 110,
        الاضافات: 15,
      },
      average: 175,
    },
    {
      id: 25,
      name: " هاجر عزام ",
      subjects: {
        "الهوية البصرية": 30,
        "التصاميم الفردية": 40,
        "التصاميم الجماعية": 110,
        الاضافات: 20,
      },
      average: 200,
    },
    {
      id: 26,
      name: " هبة محمد",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 27,
      name: "هديل قحطان يوسف",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 28,
      name: " رقية محمد ",
      subjects: {
        "الهوية البصرية": 30,
        "التصاميم الفردية": 20,
        "التصاميم الجماعية": 110,
        الاضافات: 13,
      },
      average: 173,
    },
  ];

  const subjects = [
    "الهوية البصرية",
    "التصاميم الفردية",
    "التصاميم الجماعية",
    "الاضافات",
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return "text-green-600 bg-green-50";
    if (grade >= 80) return "text-blue-600 bg-blue-50";
    if (grade >= 10) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-900">درجات الطلاب</h2>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="البحث عن طالب..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            <button className="flex items-center space-x-reverse space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
              <Download className="w-4 h-4" />
              <span>تصدير</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                اسم الطالب
              </th>
              {subjects.map((subject) => (
                <th
                  key={subject}
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {subject}
                </th>
              ))}
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                المجموع
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {student.name}
                  </div>
                </td>
                {subjects.map((subject) => (
                  <td
                    key={subject}
                    className="px-6 py-4 whitespace-nowrap text-center"
                  >
                    {(() => {
                      const grade =
                        student.subjects[
                          subject as keyof typeof student.subjects
                        ];
                      const isNumber = typeof grade === "number";
                      return (
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            isNumber
                              ? getGradeColor(grade as number)
                              : "text-gray-500 bg-gray-100"
                          }`}
                        >
                          {grade}
                        </span>
                      );
                    })()}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getGradeColor(
                      student.average
                    )}`}
                  >
                    {student.average}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradesTable;
