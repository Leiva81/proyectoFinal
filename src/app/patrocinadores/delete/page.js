import Form from "@/components/Form"
import {prisma} from '@/lib/prisma'
import { deletePatrocinador } from "@/lib/actions"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const patrocinador = await prisma.patrocinador.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  if (sesion?.user.role !== 'ADMIN')
  redirect('/patrocinadores')
  
  return (
    <div>
     
      <Form action={deletePatrocinador} title='Eliminar patrocinador' patrocinador={patrocinador} disabled={true} />
    </div>
  )
}

export default page