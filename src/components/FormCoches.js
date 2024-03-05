import Button from '@/components/Button'

function Form1({action, title, coche, disabled=false }) {

    return (
<form action={action} className="max-w-md mx-auto">
    <input type='hidden' name='id' value={coche?.id} />
    <fieldset disabled={disabled} className="space-y-4">
        <label htmlFor='marca' className="block text-sm font-medium text-gray-700">Marca</label>
        <input type='text' id='marca' name='marca'
            placeholder='Marca'
            defaultValue={coche?.marca}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            autoFocus required
        />

        <label htmlFor='modelo' className="block text-sm font-medium text-gray-700">Modelo</label>
        <input type='text' id='modelo' name='modelo'
            placeholder='Modelo'
            defaultValue={coche?.modelo}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            autoFocus required
        />

        <label htmlFor='anio' className="block text-sm font-medium text-gray-700">Año</label>
        <input type='text' id='anio' name='anio'
            placeholder='Año'
            defaultValue={coche?.anio}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            autoFocus required
        />

        <label htmlFor='precio' className="block text-sm font-medium text-gray-700">Precio</label>
        <input type='text' id='precio' name='precio'
            placeholder='Precio'
            defaultValue={coche?.precio}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            autoFocus required
        />

        <label htmlFor='color' className="block text-sm font-medium text-gray-700">Color</label>
        <input type='text' id='color' name='color'
            placeholder='Color'
            defaultValue={coche?.color}
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            autoFocus required
        />
    </fieldset>
    <Button title={title} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" />
</form>
    )
}

export default Form1