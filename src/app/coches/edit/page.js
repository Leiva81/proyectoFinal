import Form from "@/components/FormCoches"
import {prisma} from '@/lib/prisma'
import { editCoche } from "@/lib/actions"
import { redirect } from "next/navigation"
export const dynamic = 'force-dynamic'

async function page({searchParams}) {
  const sesion = await auth()
  const coche = await prisma.coche.findUnique({
  

    where: {
      id: Number(searchParams.id),
    },
  })

  if (sesion?.user.role !== 'ADMIN')
  redirect('/coches')

  return (
    <div>
        
        <Form action={editCoche} title='Editar coche' coche={coche}  />
    </div>
  )
}


export default page