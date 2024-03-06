import Form from "@/components/FormCoches"
import { newCoche } from "@/lib/actions"

function page() {
  return (
    <div>
        <Form action={newCoche} title='Crear coche' coche={null}  />
    </div>
  )
}

export default page