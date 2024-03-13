import Form from "@/components/FormCoches"
import {prisma} from '@/lib/prisma'
import { deleteCoche } from "@/lib/actions"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const sesion = await auth()

  if (sesion?.user.role !== 'ADMIN')
  redirect('/coches')


  
  const coche = await prisma.coche.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
  
      <Form action={deleteCoche} title='Eliminar coche' coche={coche} disabled={true} />
    </div>
  )
}

export default page