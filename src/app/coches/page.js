import Link from 'next/link'
import Coche from '@/components/Coche'
import { getCoches } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const coches = await getCoches()
    // console.log(coches);

    return (
        <div>
          <h1>COCHES</h1>
            <Link className='enlace' href="/coches/new"> Nuevo coche </Link>
            {
                coches.map((coche) => (
                    <Coche key={coche.id} coche={coche} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/coches/edit', query: { id: coche.id } }}>
                            Editar coche
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/coches/delete', query: { id: coche.id } }}>
                            Eliminar coche
                        </Link>
                    </Coche>
                ))
            }
        </div>
    )
}