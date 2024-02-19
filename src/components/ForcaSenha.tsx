import Barra from "./Barra"

interface ForcaSenhaProps {
    forca: number
}

export default function ForcaSenha(props: ForcaSenhaProps) {
    return (
        <div className="flex text-xl items-center">

            <span className="font-bold">Força da Senha: </span>

            <Barra corFundo={props.forca === 3 ? 'bg-green-600' : (props.forca === 2 ? 'bg-yellow-500' : 'bg-red-600')} />
            <Barra corFundo={props.forca === 3 ? 'bg-green-700' : (props.forca === 2 ? 'bg-yellow-600' : '')} />
            <Barra corFundo={props.forca === 3 ? 'bg-green-800' : ''} />
        </div>
    )
}
