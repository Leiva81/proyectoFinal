import Button from '@/components/Button'

function Form({ action, title, patrocinador, disabled=false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={patrocinador?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='marca'>Marca</label>
                <input type='text' id='marca' name='marca'
                    placeholder='Marca'
                    defaultValue={patrocinador?.marca} autoFocus ></input>
            </fieldset>
            <Button title={title} />
        </form>
    )
}

export default Form