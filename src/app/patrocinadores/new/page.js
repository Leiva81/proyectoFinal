import Form from "@/components/Form"
import { newPatrocinador } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo patrocinador</h3>
        <Form action={newPatrocinador} title='Crear patrocinador' patrocinador={null}  />
    </div>
  )
}

export default page