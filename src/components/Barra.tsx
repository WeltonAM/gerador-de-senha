interface BarraProps {
    corFundo: string
}

export default function Barra(props: BarraProps) {
    return (
        <span className={`p-1.5 ml-2 w-3 h-8 rounded-sm border-gray-200 border-2 ${props.corFundo}`}>
        </span>
    )
}
