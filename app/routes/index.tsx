import { useState } from 'react'

export default function Index () {
  const [order, setOrder] = useState(1)

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.4',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <h1>Me odeia?</h1>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexDirection: order === 1 ? 'row' : 'row-reverse'
        }}
      >
        <button
          style={{
            width: 100,
            height: 40,
            backgroundColor: 'red'
          }}
          onClick={() => alert('Já sabia!')}
        >
          Sim
        </button>
        <button
          style={{
            width: 100,
            height: 40,
            backgroundColor: 'green'
          }}
          onClick={() => setOrder(curr => (curr === 1 ? 2 : 1))}
        >
          Não
        </button>
      </div>
    </div>
  )
}
