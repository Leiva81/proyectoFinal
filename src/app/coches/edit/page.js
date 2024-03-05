import Form from "@/components/FormCoches"
import {prisma} from '@/lib/prisma'
import { editCoche } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({searchParams}) {
  const coche = await prisma.coche.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
        <h3>Editar coche {searchParams.id}</h3>
        <Form action={editCoche} title='Editar coche' coche={coche}  />
    </div>
  )
}


export default page