import { BiEdit, BiTrashAlt } from "react-icons/bi"
import data from "../database/data.json"

const Table = () => {
    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">NIM</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Agenda</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Date and Time</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {
                    data.map((obj, i) => <Tr {...obj} key={i} />)
                }
            </tbody>
        </table>
    )
}

export default Table

function Tr({ id, yourName, yourNim, date, time, agenda }) {
    return (
        <tr className="bg-gray-50 text-center">
            <td className="px-16-py-2">
                <span>
                    {yourName || "Unknown"}
                </span>
            </td>
            <td className="px-16-py-2">
                <span>
                    {yourNim || "Unknown"}
                </span>
            </td>
            <td className="px-16-py-2">
                <span>
                    {agenda || "Unknown"}
                </span>
            </td>
            <td className="px-16-py-2">
                <span>
                    {date || "Unknown"}3 {time || "Unknown"}
                </span>
            </td>
            <td className="px-16-py-2 justify-around gap-56">
                <button className="cursor">
                    <BiEdit size={25} color={"rgba(34,197,94)"} />
                </button>
                <button className="cursor">
                    <BiTrashAlt size={25} color={"rgba(144,63,94)"} />
                </button>
            </td>
        </tr>
    )
}
