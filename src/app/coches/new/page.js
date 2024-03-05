import Form from "@/components/FormCoches"
import { newCoche } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo coche</h3>
        <Form action={newCoche} title='Crear coche' coche={null}  />
    </div>
  )
}

export default page