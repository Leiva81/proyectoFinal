import Form from "@/components/FormCoches"
import {prisma} from '@/lib/prisma'
import { deleteCoche } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const coche = await prisma.coche.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
      <h3>Eliminar coche {searchParams.id}</h3>
      <Form action={deleteCoche} title='Eliminar coche' coche={coche} disabled={true} />
    </div>
  )
}

export default page