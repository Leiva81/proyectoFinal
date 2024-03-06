import Link from "next/link";

export default async function Home() {
  return (
    
 <main class="max-w-md mx-auto bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-4 p-8 shadow-md rounded-md text-white mt-20">


  <h1 className="text-3xl font-bold mb-6">Página principal</h1>

  <ul className="space-y-2">
    
    <li><Link href="/dashboard" className="text-light-blue-200 hover:underline">Dashboard del usuario</Link></li>

    <hr className="my-4 border-t border-gray-300"/>

    <li><Link href="/coches" className="text-light-blue-400 hover:underline">Listado de Coches</Link></li>

    <hr className="my-4 border-t border-gray-300"/>

    <li><Link href="/patrocinadores" className="text-light-blue-500 hover:underline">Listado de patrocinadores</Link></li>
  </ul>


</main>
  )
}
