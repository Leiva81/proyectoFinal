import Link from 'next/link'
import Patrocinador from '@/components/Patrocinador'
import { getPatrocinadores } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const patrocinadores = await getPatrocinadores()
    // console.log(pratrocinadores);

    return (
<div className="p-4 mx-auto max-w-xl">
  <h1 className="text-4xl font-extrabold text-white mb-6">Patrocinadores</h1>
  <Link
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mb-4"
    href="/patrocinadores/new"
  >
  Nuevo patrocinador
  </Link>
  {patrocinadores.map((patrocinador) => (
    <div key={patrocinador.id} className="mb-6 p-4 border border-gray-500 rounded bg-blue-200">
      <Patrocinador patrocinador={patrocinador} />

      <div className="mt-4 space-x-2">
        <Link
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          href={{ pathname: '/patrocinadores/edit', query: { id: patrocinador.id } }}
        >
          Editar patrocinador
        </Link>
        <Link
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          href={{ pathname: '/patrocinadores/delete', query: { id: patrocinador.id } }}
        >
          Eliminar patrocinador
        </Link>
      </div>
    </div>
  ))}
</div>
    )
}