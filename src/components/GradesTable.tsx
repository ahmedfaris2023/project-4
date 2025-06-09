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
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
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
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
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
      name: " اية نزار عبد الفتاح",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
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
      id: 7,
      name: "اية محمد عبدالسلام",
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
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
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
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 11,
      name: " رحمة ضياء مظفر",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 12,
      name: " رفل سمار محمود",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 13,
      name: " ريام محمد يحيى",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 14,
      name: " ريم احمد محمد",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 15,
      name: " سارة صلاح عبدحسن ",

      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 16,
      name: "سرى نزار محمود ",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 17,
      name: "شهد نزار محمود",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 18,
      name: " غفران عمار عبدالسلام",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 19,
      name: " فاطمة الزهراء عبدالسلام",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
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
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 22,
      name: " مريم عبدالكريم ",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 23,
      name: " مينا ماهر عبدالقادر",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 24,
      name: " مينا نجم الدين عبدالله",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 25,
      name: " هاجر عزام ",
      subjects: {
        "الهوية البصرية": "قريبا",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
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
    if (grade >= 70) return "text-yellow-600 bg-yellow-50";
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

            {/* Subject Filter */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
            >
              <option value="all">جميع المواد</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>

            {/* Export Button */}
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
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getGradeColor(
                        student.subjects[
                          subject as keyof typeof student.subjects
                        ]
                      )}`}
                    >
                      {
                        student.subjects[
                          subject as keyof typeof student.subjects
                        ]
                      }
                    </span>
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
