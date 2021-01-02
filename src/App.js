import React from 'react'

export default function AppComponent(props) {
    // props.comentarios = [{
        // name,
        // message,
        // id
    // }]
    function excluirComentario (comentarioId) {
        console.log(comentarios)
    }
    return (
        <>
        <h3>Lista de comnetários</h3>
        <br />
        <ul>
            {props.comentarios.map(comentarios => (
                <li key={comentarios.id}>
                    <span>{comentarios.name} - {comentarios.message}</span>
                    <button type="button" onClick={() => excluirComentario()}>Excluir</button>
                </li>
            ))}
        </ul>
        </>
    )
}