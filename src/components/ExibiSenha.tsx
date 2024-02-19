'use client'

import { IconCopy } from "@tabler/icons-react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

interface ExibeSenhaProps {
    senha: string
}

export default function ExibeSenha(props: ExibeSenhaProps) {

    const copiar = () => {
        navigator.clipboard.writeText(props.senha)
        toast.success('Texto Copiado! 📌');
    }

    return (
        <div className="mt-3">
            {
                props.senha.trim() !== ""
                    ? (
                        <>
                            <span className="font-bold text-lg">Senha Gerada:</span>

                            <div className={`
                                p-2 border bg-gray-100 rounded text-slate-800 flex justify-between
                            `}>
                                {props.senha}

                                <IconCopy className="hover:text-blue-500 cursor-pointer" onClick={copiar} />
                            </div>
                        </>
                    )
                    : (
                        ""
                    )
            }
        </div>
    )
}