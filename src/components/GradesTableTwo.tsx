import { Search, Filter, Download } from "lucide-react";
import { useState } from "react";

const GradesTableTwo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const students = [
    {
      id: 1,
      name: "غسق مظفر ادريس",
      subjects: {
        "الهوية البصرية": 53,
        "التصاميم الفردية": 7 + 10 + 10 + 10,
        "التصاميم الجماعية": 14 + 7 + 20 + 7,
        الاضافات: 5 + 5 + 5 + 10 + 18,
      },
      average: 181,
    },
    {
      id: 2,
      name: " يوسف احمد زهير ",
      subjects: {
        "الهوية البصرية": 7,
        "التصاميم الفردية": 7 + 7 + 7,
        "التصاميم الجماعية": 10 + 4,
        الاضافات: 10,
      },
      average: 52,
    },
    {
      id: 3,
      name: "مصطفى صلاح حسين",
      subjects: {
        "الهوية البصرية": 17,
        "التصاميم الفردية": 10 + 9,
        "التصاميم الجماعية": 15 + 7,
        الاضافات: 5 + 5 + 5 + 30 + 15,
      },
      average: 118,
    },
    {
      id: 4,
      name: "بكر اكرم محمد نذير",
      subjects: {
        "الهوية البصرية": 74,
        "التصاميم الفردية": 9 + 10 + 10 + 10,
        "التصاميم الجماعية": 16 + 6 + 24 + 10,
        الاضافات: 10 + 20 + 35 + 15 + 10,
      },
      average: 259,
    },
    {
      id: 5,
      name: "روزان جاسم إلياس",
      subjects: {
        "الهوية البصرية": 0,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 14 + 5 + 24 + 9,
        الاضافات: 20,
      },
      average: 72,
    },
    {
      id: 6,
      name: "غفران فارس محمد",
      subjects: {
        "الهوية البصرية": 35,
        "التصاميم الفردية": 7 + 7 + 6 + 7,
        "التصاميم الجماعية": 14 + 6 + 20 + 6,
        الاضافات: 5 + 4 + 4 + 10 + 10 + 15,
      },
      average: 156,
    },

    {
      id: 8,
      name: " نشوان موفق طابور",
      subjects: {
        "الهوية البصرية": 97,
        "التصاميم الفردية": 8 + 10 + 6 + 10,
        "التصاميم الجماعية": 14 + 8 + 24 + 10,
        الاضافات: 5 + 5 + 5 + 20 + 40 + 15 + 20,
      },
      average: 297,
    },
    {
      id: 9,
      name: " حسين عامر بكتش",
      subjects: {
        "الهوية البصرية": 75,
        "التصاميم الفردية": 10 + 10 + 10 + 10,
        "التصاميم الجماعية": 16 + 8 + 24 + 10,
        الاضافات: 3 + 20 + 35 + 10 + 15,
      },
      average: 256,
    },
    {
      id: 10,
      name: " محمد سمير عبدالستار",
      subjects: {
        "الهوية البصرية": 45,
        "التصاميم الفردية": 10 + 8 + 10 + 7,
        "التصاميم الجماعية": 16 + 6 + 24 + 7,
        الاضافات: 5 + 20 + 30,
      },
      average: 188,
    },
    {
      id: 11,
      name: " عبدالعزيز احمد ابراهيم",
      subjects: {
        "الهوية البصرية": 63,
        "التصاميم الفردية": 8 + 10 + 9 + 10,
        "التصاميم الجماعية": 14 + 6 + 20 + 6,
        الاضافات: 5 + 10 + 5 + 5 + 10 + 10,
      },
      average: 191,
    },
    {
      id: 12,
      name: " محمد قتيبه سنان",
      subjects: {
        "الهوية البصرية": 98,
        "التصاميم الفردية": 10 + 10 + 10 + 10,
        "التصاميم الجماعية": 15 + 7 + 10 + 7,
        الاضافات: 5 + 10 + 5 + 10 + 20 + 15 + 20,
      },
      average: 272,
    },
    {
      id: 13,
      name: "سارة محمد حازم",
      subjects: {
        "الهوية البصرية": 20,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 10 + 4,
        الاضافات: 25,
      },
      average: 59,
    },

    {
      id: 15,
      name: "هاشم اياد هاشم",

      subjects: {
        "الهوية البصرية": 0,
        "التصاميم الفردية": 7 + 10 + 10 + 9,
        "التصاميم الجماعية": 15 + 5 + 10 + 6,
        الاضافات: 0,
      },
      average: 72,
    },
    {
      id: 16,
      name: "سرى نائل شهاب",
      subjects: {
        "الهوية البصرية": 0,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 17,
      name: " ريان خالد سليمان",
      subjects: {
        "الهوية البصرية": 70,
        "التصاميم الفردية": 10 + 10 + 10 + 10,
        "التصاميم الجماعية": 14 + 10 + 20 + 7,
        الاضافات: 10 + 5 + 10 + 15,
      },
      average: 201,
    },
    {
      id: 18,
      name: "كوثر زياد أحمد",
      subjects: {
        "الهوية البصرية": 0,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 15 + 8 + 10 + 4,
        الاضافات: 10,
      },
      average: 47,
    },
    {
      id: 19,
      name: " مروة محمد جاسم",
      subjects: {
        "الهوية البصرية": 117,
        "التصاميم الفردية": 7 + 10 + 10 + 7,
        "التصاميم الجماعية": 10 + 5,
        الاضافات: 5 + 20 + 15 + 10,
      },
      average: 216,
    },
    {
      id: 20,
      name: " منال محمد جاسم",
      subjects: {
        "الهوية البصرية": 30,
        "التصاميم الفردية": 8 + 10 + 10 + 9,
        "التصاميم الجماعية": 16 + 9 + 24 + 6,
        الاضافات: 20 + 30 + 15,
      },
      average: 187,
    },
    {
      id: 21,
      name: " سرى حافظ جرجيس",
      subjects: {
        "الهوية البصرية": 0,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 22,
      name: "محمد سالم عبد الرزاق",
      subjects: {
        "الهوية البصرية": 0,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 23,
      name: "مينا رغيد عماد الدين",
      subjects: {
        "الهوية البصرية": 34,
        "التصاميم الفردية": 8 + 10,
        "التصاميم الجماعية": 14 + 5 + 24 + 9,
        الاضافات: 10 + 20 + 15,
      },
      average: 149,
    },
    {
      id: 24,
      name: " مؤمن حسام عبدالغني",
      subjects: {
        "الهوية البصرية": "0",
        "التصاميم الفردية": 4 + 7 + 2 + 4,
        "التصاميم الجماعية": 10 + 8,
        الاضافات: 0,
      },
      average: 35,
    },
    {
      id: 25,
      name: "عائشة فراس صبري",
      subjects: {
        "الهوية البصرية": 71,
        "التصاميم الفردية": 10 + 10 + 8,
        "التصاميم الجماعية": 14 + 9 + 24 + 10,
        الاضافات: 10 + 15 + 7 + 10,
      },
      average: 198,
    },
    {
      id: 26,
      name: "ايمان عبدالرحمن مظفر",
      subjects: {
        "الهوية البصرية": "0",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 14 + 10 + 4,
        الاضافات: 0,
      },
      average: 28,
    },
    {
      id: 27,
      name: "احمد يونس باسم ",
      subjects: {
        "الهوية البصرية": "0",
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 16 - 6 + 9 + 20 + 5,
        الاضافات: 5,
      },
      average: 49,
    },
    {
      id: 28,
      name: " احمد يونس عبد الباقي ",
      subjects: {
        "الهوية البصرية": 0,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 20 + 5,
        الاضافات: 5,
      },
      average: 30,
    },
    {
      id: 29,
      name: " اسامه سمير علي ",
      subjects: {
        "الهوية البصرية": 107,
        "التصاميم الفردية": 10 + 10 + 10 + 10,
        "التصاميم الجماعية": 12 + 10 + 25 + 10,
        الاضافات: 10 + 20 + 35 + 10 + 15 + 18,
      },
      average: 312,
    },
    {
      id: 30,
      name: " انمار عمار ايوب",
      subjects: {
        "الهوية البصرية": 49,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 19 + 9 + 28 + 8,
        الاضافات: 5 + 5 + 10,
      },
      average: 133,
    },
    {
      id: 31,
      name: " ايمن مهند محمود",
      subjects: {
        "الهوية البصرية": 0,
        "التصاميم الفردية": 4 + 5 + 6 + 10,
        "التصاميم الجماعية": 25 + 9,
        الاضافات: 10 + 25,
      },
      average: 94,
    },
    {
      id: 32,
      name: " آمنة زياد سعدالله ",
      subjects: {
        "الهوية البصرية": 76,
        "التصاميم الفردية": 10 + 10 + 10 + 10,
        "التصاميم الجماعية": 19 + 8 + 28 + 10,
        الاضافات: 5 + 10 + 10 + 3 + 5 + 5 + 10 + 35 + 15,
      },
      average: 279,
    },
    {
      id: 33,
      name: " توفيق صفوان توفيق",
      subjects: {
        "الهوية البصرية": 0,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 34,
      name: "جميل معتز حمادي",
      subjects: {
        "الهوية البصرية": "0",
        "التصاميم الفردية": 8,
        "التصاميم الجماعية": 12 + 7 + 22 + 4,
        الاضافات: 0,
      },
      average: 53,
    },
    {
      id: 35,
      name: "حذيفه رعد عبد ",
      subjects: {
        "الهوية البصرية": 85,
        "التصاميم الفردية": 5 + 5 + 6 + 10,
        "التصاميم الجماعية": 20 + 10 + 28 + 9,
        الاضافات: 25 + 5 + 5 + 20 + 35 + 15 + 16,
      },
      average: 299,
    },
    {
      id: 36,
      name: " زكريا صلاح اكرم",
      subjects: {
        "الهوية البصرية": 85,
        "التصاميم الفردية": 9 + 8 + 7 + 7,
        "التصاميم الجماعية": 12 + 4 + 22 + 9,
        الاضافات: 20 + 5 + 15 + 10 + 35 + 15 + 15,
      },
      average: 278,
    },
    {
      id: 37,
      name: " سرى نائل شهاب",
      subjects: {
        "الهوية البصرية": 0,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 38,
      name: " عبدالعزيز محمد عبدالله ",
      subjects: {
        "الهوية البصرية": 27,
        "التصاميم الفردية": 8 + 10 + 10 + 7,
        "التصاميم الجماعية": 16 - 6 + 9 + 20 + 5,
        الاضافات: 30,
      },
      average: 136,
    },
    {
      id: 39,
      name: " عمر عبدالحميد عبدالمجيد",
      subjects: {
        "الهوية البصرية": 25,
        "التصاميم الفردية": 7 + 10 + 10 + 7,
        "التصاميم الجماعية": 12 + 5 + 25 + 9 + 15,
        الاضافات: 10,
      },
      average: 135,
    },
    {
      id: 85,
      name: "عمر عصام عبد القادر ",
      subjects: {
        "الهوية البصرية": 0,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 12 + 4,
        الاضافات: 0,
      },
      average: 16,
    },
    {
      id: 41,
      name: "مصطفى شامل صبري ",
      subjects: {
        "الهوية البصرية": 65,
        "التصاميم الفردية": 9 + 10 + 10 + 9,
        "التصاميم الجماعية": 19 + 6 + 28 + 8,
        الاضافات: 5 + 5 + 20 + 10 + 35 + 15 + 12,
      },
      average: 264,
    },
    {
      id: 42,
      name: "مصطفى مثنى حازم ",
      subjects: {
        "الهوية البصرية": 43,
        "التصاميم الفردية": 5 + 6 + 4 + 7,
        "التصاميم الجماعية": 12 + 6 + 22 + 8,
        الاضافات: 20 + 35 + 10,
      },
      average: 178,
    },
    {
      id: 43,
      name: "ملاك فارس حامد ",
      subjects: {
        "الهوية البصرية": 0,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 0,
        الاضافات: 0,
      },
      average: 0,
    },
    {
      id: 44,
      name: " مهند رعد عبدالله ",
      subjects: {
        "الهوية البصرية": 10,
        "التصاميم الفردية": 0,
        "التصاميم الجماعية": 12 + 5 + 25 + 10,
        الاضافات: 10 + 5 + 10 + 10,
      },
      average: 97,
    },
    {
      id: 45,
      name: "مؤمن محمد عادل",
      subjects: {
        "الهوية البصرية": 96,
        "التصاميم الفردية": 10 + 8 + 10 + 9,
        "التصاميم الجماعية": 17 - 6 + 9 + 20 + 5,
        الاضافات: 35 + 15 + 20,
      },
      average: 247,
    },
    {
      id: 46,
      name: "وسيم راكان عدنان",
      subjects: {
        "الهوية البصرية": "0",
        "التصاميم الفردية": 10 + 10 + 8 + 7,
        "التصاميم الجماعية": 16 - 6 + 5 + 20 + 5,
        الاضافات: 5,
      },
      average: 80,
    },
    {
      id: 47,
      name: "يوسف فارس نعمت",
      subjects: {
        "الهوية البصرية": 7,
        "التصاميم الفردية": 8 + 7 + 10,
        "التصاميم الجماعية": 12 + 6 + 22 + 8,
        الاضافات: 3 + 10,
      },
      average: 94,
    },
    {
      id: 48,
      name: "هديل عبدالكريم نجم ",
      subjects: {
        "الهوية البصرية": 0,
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
    if (grade >= 10) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  // ترتيب الطلاب حسب المعدل
  const sortedStudents = [...filteredStudents].sort(
    (a, b) => b.average - a.average
  );

  // الحصول على أفضل 20
  const top20 = [...students]
    .sort((a, b) => b.average - a.average)
    .slice(0, 20)
    .map((s) => s.id);

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
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                القبول
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
                {/* عمود القبول */}
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {top20.includes(student.id) ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-green-700 bg-green-100">
                      مستوى ثاني
                    </span>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradesTableTwo;
