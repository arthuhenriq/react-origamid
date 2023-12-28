import React from 'react'

const Produto = ({produto}) => {
  return (
    <section>
        <div style={{border: 'solid', margin: '1.5rem 0', padding: 10}}>
            <h2>{produto.nome}</h2>
            {produto.propriedades.map(props => (
                <li key={props}>{props}</li>
            ))}
        </div>
    </section>
  )
}

export default Produto