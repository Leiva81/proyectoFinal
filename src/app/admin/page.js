import { auth } from "@/auth"
import { redirect } from "next/navigation"

async function page() {
  const sesion = await auth()

  if (sesion?.user.role !== 'ADMIN')
    redirect('/dashboard')

  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-4 p-8 shadow-md rounded-md text-white mt-20">      
    <>
    <h1> 🔐  Admin panel</h1>
    <p> {sesion?.user.name}</p>
    <p> {sesion?.user.email} </p>
    <p> {sesion?.user.role} </p>
    <img src={sesion?.user.image}></img>
  </>
  </div>

  )
}

export default page