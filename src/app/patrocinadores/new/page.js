import Form from "@/components/Form"
import { newPatrocinador } from "@/lib/actions"

function page() {
  return (
    <div>
        <Form action={newPatrocinador} title='Crear patrocinador' patrocinador={null}  />
    </div>
  )
}

export default page