import './student-info.css';

function ShowList() {
    const listStudent = [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            age: 30,
            address: 'Hà Nội'
        }
    ]
    return (
        <div className="tableStudent">

            <h1>List Student</h1>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody> {listStudent.map(student => (
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>))}
                </tbody>
            </table>

        </div>
    )
}

export default ShowList;
