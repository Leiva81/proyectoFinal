import Link from 'next/link'
import Coche from '@/components/Coche'
import { getCoches } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const coches = await getCoches()


    return (


<div className="p-4 mx-auto max-w-xl ">
  <h1 className="text-4xl font-extrabold text-white mb-6">COCHES</h1>
  <Link
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mb-4"
    href="/coches/new"
  >
  Nuevo coche
  </Link>
  {coches.map((coche) => (
    <div key={coche.id} className="mb-6 p-4 border border-gray-500 rounded bg-blue-200">
      <Coche coche={coche} />

       <div className="mt-4 space-x-2 ">
         <Link
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          href={{ pathname: '/coches/edit', query: { id: coche.id } }}
        >
          Editar coche
        </Link>
        <Link
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          href={{ pathname: '/coches/delete', query: { id: coche.id } }}
        >
          Eliminar coche
        </Link>
      </div>
    </div>
  ))}
</div>
    )
}