import { useState } from "react"

const create = () => {
    const [username, SetUsername] = useState("")
    const [email, SetEmail] = useState("")
    const [mobile, SetMobile] = useState("")
    

  return (
    <div className="container mx-auto px-10">
        <form>
            <h1>User Add</h1>
            <div className="mb-4 mt-4">
                <label htmlFor="">Username</label>
                <input type="text" name="" id="" className="w-full h-12 border border-gray-500 rounded" />
            </div>
            <div className="mb-4 mt-4">
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" className="w-full h-12 border border-gray-500 rounded" />
            </div>
            <div className="mb-4 mt-4">
                <label htmlFor="">Mobile</label>
                <input type="text" name="" id="" className="w-full h-12 border border-gray-500 rounded" />
            </div>
        </form>
    </div>
  )
}

export default create