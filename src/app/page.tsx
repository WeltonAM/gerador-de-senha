'use client'

import { useEffect, useState } from "react"
import opcoes from "@/data/OpcoesCaracteres"
import Checkbox from "@/components/Checkbox"
import Senha from "@/model/Senha"
import ExibeSenha from "@/components/ExibiSenha"
import ForcaSenha from "@/components/ForcaSenha"

export default function Home() {

  const [tamanho, setTamanho] = useState<number>(8)
  const [tiposCaracteres, setTiposCaracteres] = useState(opcoes)
  const [senha, setSenha] = useState("")
  const [forcaSenha, setForcaSenha] = useState(1)

  const lidarComMudanca = (indice: number) => {
    const aux = [...tiposCaracteres]

    aux[indice].valor = !aux[indice].valor

    setTiposCaracteres([...aux])
  }

  const gerarSenha = () => {
    const novaSenha = Senha.gerarSenha(tamanho, tiposCaracteres)

    setSenha(novaSenha)
  }

  useEffect(() => {
    setForcaSenha(Senha.calcularForca(tamanho, tiposCaracteres))
  }, [tamanho, tiposCaracteres])

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl text-gray-200 mb-4 text-center font-bold">Gerador de Senhas</h1>

      <div className="md:w-3/12 bg-slate-700 text-gray-200 rounded-md p-8">
        <div className="flex flex-col gap-3 text-2xl">

          <label className="flex justify-between">
            <span>Tamanho da Senha: </span>
            <span className="text-blue-500">{tamanho}</span>
          </label>

          <input
            type="range"
            min={5}
            max={30}
            value={tamanho}
            onChange={(e) => setTamanho(+e.target.value)}
          />
        </div>

        <div className="flex flex-col my-3 gap-1">
          {tiposCaracteres.map((op, i) => {
            return (
              <Checkbox
                id={op.id}
                key={op.id}
                texto={op.nome}
                selecionado={op.valor}
                lidaComMudanca={() => lidarComMudanca(i)}
              />
            )
          })}
        </div>

        <ForcaSenha forca={forcaSenha} />

        <button
          className={`
            text-white bg-blue-600
            text-lg font-bold w-full rounded
            p-2 mt-3
            hover:bg-blue-700
            hover:text-gray-300
          `}
          onClick={gerarSenha}
        >
          Gerar Senha
        </button>

        <ExibeSenha senha={senha} />

      </div>
    </main>
  )
}
