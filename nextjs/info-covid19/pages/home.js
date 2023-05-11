import axios from "axios";

export default function InfoCovid19({users}) {
    return (
        <>
            <h2>Infomations Covid-19</h2>
            <table className='table table-striped justify-content-center d-flex'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )

}
export const getStaticProps = async () => {
    // fetch dữ liệu từ file system, API, DB,...
    const result = await axios.get('https://jsonplaceholder.typicode.com/users')
    // Giá trị của `props` sẽ được truyền tới component `InfoCovid19`
    return {
        props: {
            users: result.data
        }
    }
}
