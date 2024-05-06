var Student = /** @class */ (function () {
    function Student(name, dateofbirth, phone, city, country, university, group) {
        this.name = name;
        this.dateofbirth = dateofbirth;
        this.phone = phone;
        this.city = city;
        this.country = country;
        this.university = university;
        this.group = group;
    }
    Object.defineProperty(Student.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "DateOfBirth", {
        get: function () {
            return this.dateofbirth;
        },
        set: function (dateofbirth) {
            this.dateofbirth = dateofbirth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Phone", {
        get: function () {
            return this.phone;
        },
        set: function (phone) {
            this.phone = phone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "City", {
        get: function () {
            return this.city;
        },
        set: function (city) {
            this.city = city;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Country", {
        get: function () {
            return this.country;
        },
        set: function (country) {
            this.country = country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "University", {
        get: function () {
            return this.university;
        },
        set: function (university) {
            this.university = university;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Group", {
        get: function () {
            return this.group;
        },
        set: function (group) {
            this.group = group;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getTableRow = function () {
        return "\n            <tr>\n                <td>".concat(this.name, "</td>\n                <td>").concat(this.dateofbirth, "</td>\n                <td>").concat(this.phone, "</td>\n                <td>").concat(this.city, "</td>\n                <td>").concat(this.country, "</td>\n                <td>").concat(this.university, "</td>\n                <td>").concat(this.group, "</td>\n            </tr>\n        ");
    };
    return Student;
}());
var students = [
    new Student("John Doe", "2000-01-01", "+123456789", "New York", "USA", "Example University", "A"),
    new Student("Jane Smith", "2001-02-03", "+987654321", "Los Angeles", "USA", "Another University", "B"),
];
function displayStudentsInTable(students) {
    var tbody = document.querySelector('#studentTable tbody'); // Получаем тело таблицы
    students.forEach(function (student) {
        var row = document.createElement('tr'); // Создаем новую строку таблицы
        var studentTableRow = student.getTableRow.bind(student); // Привязываем метод к объекту student
        row.innerHTML = studentTableRow(); // Получаем HTML для студента и вставляем в строку таблицы
        tbody.appendChild(row); // Добавляем строку в тело таблицы
    });
}
// Вызываем функцию для вывода студентов в таблицу
displayStudentsInTable(students);
