interface CheckboxProps {
    id: string
    texto: string
    selecionado: boolean
    lidaComMudanca: () => void
}

export default function Checkbox(props: CheckboxProps) {

    return (
        <div className="flex text-xl cursor-pointer gap-2 hover:bg-blue-500 p-2 py-1 rounded-md">
            <input
                className="cursor-pointer"
                id={props.id}
                checked={props.selecionado}
                type="checkbox"
                onChange={props.lidaComMudanca}
            />

            <label className="cursor-pointer" htmlFor={props.id}>{props.texto}</label>
        </div>
    )
}