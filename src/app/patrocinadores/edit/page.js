import Form from "@/components/Form"
import {prisma} from '@/lib/prisma'
import { editPatrocinador } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({searchParams}) {
  const patrocinador = await prisma.patrocinador.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
        <h3>Editar patrocinador {searchParams.id}</h3>
        <Form action={editPatrocinador} title='Editar patrocinador' patrocinador={patrocinador}  />
    </div>
  )
}


export default page