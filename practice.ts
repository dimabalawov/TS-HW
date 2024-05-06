class Student {
    private name: string;
    private dateofbirth: string;
    private phone: string;
    private city: string;
    private country: string;
    private university: string;
    private group: string;

    constructor(name: string, dateofbirth: string,phone: string,city: string,country: string,university: string,group: string) {
        this.name = name;
        this.dateofbirth = dateofbirth;
        this.phone = phone;
        this.city = city;
        this.country = country;
        this.university = university;
        this.group = group;
    }

    get Name(): string {
        return this.name;
    }
    get DateOfBirth(): string {
        return this.dateofbirth;
    }
    get Phone(): string {
        return this.phone;
    }
    get City(): string {
        return this.city;
    }
    get Country(): string {
        return this.country;
    }
    get University(): string {
        return this.university;
    }
    get Group(): string {
        return this.group;
    }

    set Name(name: string) {
        this.name=name;
    }
    set DateOfBirth(dateofbirth: string){
        this.dateofbirth=dateofbirth;
    }
    set Phone(phone: string) {
        this.phone=phone;
    }
    set City(city: string) {
        this.city=city;
    }
    set Country(country: string) {
        this.country=country;
    }
    set University(university: string) {
        this.university=university;
    }
    set Group(group: string) {
        this.group=group;
    }
    getTableRow() {
        return `
            <tr>
                <td>${this.name}</td>
                <td>${this.dateofbirth}</td>
                <td>${this.phone}</td>
                <td>${this.city}</td>
                <td>${this.country}</td>
                <td>${this.university}</td>
                <td>${this.group}</td>
            </tr>
        `;
    }
}

const students: Student[] = [
    new Student("John Doe", "2000-01-01", "+123456789", "New York", "USA", "Example University", "A"),
    new Student("Jane Smith", "2001-02-03", "+987654321", "Los Angeles", "USA", "Another University", "B"),
];
function displayStudentsInTable(students) {
    const tbody = document.querySelector('#studentTable tbody');
    students.forEach(student => {
        const row = document.createElement('tr');
        const studentTableRow = student.getTableRow.bind(student); 
        row.innerHTML = studentTableRow(); 
        tbody.appendChild(row);
    });
}

displayStudentsInTable(students);