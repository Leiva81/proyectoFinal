import Link from 'next/link'
import Patrocinador from '@/components/Patrocinador'
import { getPatrocinadores } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const pratrocinadores = await getPatrocinadores()
    // console.log(pratrocinadores);

    return (
        <div>
          <h1>patrocinadores</h1>
            <Link className='enlace' href="/patrocinadores/new"> Nuevo patrocinador </Link>
            {
                pratrocinadores.map((patrocinador) => (
                    <Patrocinador key={patrocinador.id} patrocinador={patrocinador} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/patrocinadores/edit', query: { id: patrocinador.id } }}>
                            Editar patrocinador
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/patrocinadores/delete', query: { id: patrocinador.id } }}>
                            Eliminar patrocinador
                        </Link>
                    </Patrocinador>
                ))
            }
        </div>
    )
}