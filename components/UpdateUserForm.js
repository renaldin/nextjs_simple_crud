import { useReducer } from "react"
import { BiBrush } from "react-icons/bi"
import Bug from "./Bug"
import Success from "./Success"

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const UpdateUserForm = () => {

    const [formData, setFormData] = useReducer(formReducer, {})

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(formData).length == 0) return console.log("Don't have form data");
        console.log(formData)
    }

    if (Object.keys(formData).length > 0) return <Bug message={"Error"} />

    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" name="yourname" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Name" />
            </div>
            <div className="input-type">
                <input type="text" name="yournim" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="NIM" />
            </div>
            <div className="input-type">
                <input type="date" name="date" onChange={setFormData} className="border px-5 py-3 focus:outline-none rounded-md" placeholder="Date" />
            </div>
            <div className="input-type">
                <input type="time" name="time" onChange={setFormData} className="border px-5 py-3 focus:outline-none rounded-md" placeholder="Date" />
            </div>
            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio" name="agenda" onChange={setFormData} value="Sempro" id="radioDefault" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-800 checked:border-gray-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault" className="inline-block text-gray-800">Sempro</label>
                </div>
                <div className="form-check">
                    <input type="radio" name="agenda" onChange={setFormData} value="Sidang" id="radioDefault2" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-800 checked:border-gray-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault2" className="inline-block text-gray-800">Sidang</label>
                </div>
                <div className="form-check">
                    <input type="radio" name="agenda" onChange={setFormData} value="UjianPKL" id="radioDefault3" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-800 checked:border-gray-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault3" className="inline-block text-gray-800">Ujian PKL</label>
                </div>
            </div>
            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
                Update <span className="px-1"><BiBrush size={24} /></span>
            </button>
        </form>
    )
}

export default UpdateUserForm