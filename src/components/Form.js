import Button from '@/components/Button'

function Form({ action, title, patrocinador, disabled=false }) {

    return (
<form action={action} className="max-w-md mx-auto bg-blue-500 hover:bg-blue-600 text-black-500 font-bold py-2 px-4 mt-20 rounded-md shadow-md">
<h1 className="text-4xl font-extrabold text-gray-800 mb-6">NUEVO PATROCINADOR</h1>
  <input type='hidden' name='id' value={patrocinador?.id} />
  <fieldset disabled={disabled} className="space-y-4">
    <label htmlFor='marca' className="block text-sm font-medium text-gray-700">Marca</label>
    <input
      type='text'
      id='marca'
      name='marca'
      placeholder='Marca'
      defaultValue={patrocinador?.marca}
      autoFocus
      className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    />
  </fieldset>
  <Button title={title} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" />
</form>
    )
}

export default Form