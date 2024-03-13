import Form from "@/components/Form"
import {prisma} from '@/lib/prisma'
import { editPatrocinador } from "@/lib/actions"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

async function page({searchParams}) {
  const sesion = await auth()
  const patrocinador = await prisma.patrocinador.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  if (sesion?.user.role !== 'ADMIN')
  redirect('/patrocinadores')

  return (
    <div>
      
        <Form action={editPatrocinador} title='Editar patrocinador' patrocinador={patrocinador}  />
    </div>
  )
}


export default page