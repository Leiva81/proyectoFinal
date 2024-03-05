import Form from "@/components/Form"
import {prisma} from '@/lib/prisma'
import { deletePatrocinador } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const patrocinador = await prisma.patrocinador.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
      <h3>Eliminar patrocinador {searchParams.id}</h3>
      <Form action={deletePatrocinador} title='Eliminar patrocinador' patrocinador={patrocinador} disabled={true} />
    </div>
  )
}

export default page