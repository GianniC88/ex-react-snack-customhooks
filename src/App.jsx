import { useState } from 'react'
import useSwitch from './useSwitch'
import useDate from './useDate'

function App() {
  //const { isOn: on, toggle: switcha } = useSwitch()
  const [on, switcha] = useSwitch()
  const currentDate = useDate()


  return (
    <>
      <div>
        <h1>Il valore è: {on ? "ON" : "OFF"}</h1>
        <button onClick={switcha}>Cambia Stato</button>
      </div>

      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </>
  )
}

export default App



// Consegna
// Repo: ex - react - snack - customhooks
// Nota: a differenza di quanto visto finora negli esempi, per accedere all'API utilizzare utilizzare l'url base:
// https://boolean-spec-frontend.vercel.app/freetestapi
// al posto di:
// https://freetestapi.com/api/v1

// Ad esempio:
// https://boolean-spec-frontend.vercel.app/freetestapi/users
// per chiamare l'endpoint /users
// 🏆 Snack 1: useSwitch() – Toggle Booleano
// Creare un custom hook per alternare un valore booleano tra true e false.

// Cosa deve fare ?

//   Inizialmente false.
// Ritorna il valore attuale e una funzione toggle() per cambiarlo.
// Quando toggle() viene chiamato, il valore passa da true → false e viceversa.
// Esempio di utilizzo:

// import useSwitch from "./useSwitch";

// function App() {
//   const [isOn, toggle] = useSwitch();

//   return (
//     <div>
//       <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
//       <button onClick={toggle}>Cambia Stato</button>
//     </div>
//   );
// }

// export default App;
// ​
// 🏆 Snack 2: useDate() – Ottenere la Data Attuale
// Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

// Cosa deve fare ?

//   Restituisce un oggetto con data e ora formattata.
// Si aggiorna automaticamente ogni secondo.
// Usa useEffect() per gestire l’aggiornamento.
// Esempio di utilizzo:

// import useDate from "./useDate";

// function App() {
//   const currentDate = useDate();

//   return (
//     <div>
//       <h1>Data e ora attuali:</h1>
//       <p>{currentDate.toLocaleString()}</p>
//     </div>
//   );
// }

// export default App;
// 🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

// Cosa deve fare ?

//   Prende in input una stringa o un JSX component(es.un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.
// Esempio di utilizzo:

// import useCustomPointer from "./useCustomPointer";

// function App() {
//   const customPointer = useCustomPointer("🔥");

//   return (
//     <div>
//       <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
//       {customPointer}
//     </div>
//   );
// }

// export default App;
// ​
// 🎯 Bonus: useKeyPress() – Rilevare un Tasto Premuto
// Creare un custom hook che rilevi se un tasto specifico della tastiera è premuto.

// Cosa deve fare ?

//   Prende in input il nome di un tasto("Enter", "Escape", ecc.).
// Ritorna true quando il tasto è premuto e false quando viene rilasciato.
// Usa event listener su keydown e keyup.
// Esempio di utilizzo:

// import useKeyPress from "./useKeyPress";

// function App() {
//   const isEnterPressed = useKeyPress("Enter");

//   return (
//     <div>
//       <h1>Tieni premuto "Enter" per testare il custom hook</h1>
//       <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
//     </div>
//   );
// }

// export default App;

