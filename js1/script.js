// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
// - Codice giocatore
// - Nome
// - Cognome
// - Età
// - Media punti fatti per partita
// - Percentuale di successo per tiri da 3 punti
// 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
// - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// - la media punti fatti per partita deve essere compresa tra 0 e 50
// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
// 3. Stampare Nome, cognome, età e codice giocatore.
// 4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
// 5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.


//Definizione codice giocatore

// Definizione media punti e percentuali

// Creazione gruppo player iniziale
const gruppo = [
     {
        code: randomcode(),
        nome: 'nome1',
        cognome: 'cognome1',
        età: 25,
        media: mediapunti(0,50),
        triple: mediapunti(0,100),
    },
    {
        code: randomcode(),
        nome: 'nome2',
        cognome: 'cognome2',
        età: 25,
        media: mediapunti(0,50),
        triple: mediapunti(0,100),
    },
    {
        code: randomcode(),
        nome: 'nome3',
        cognome: 'cognome3',
        età: 25,
        media: mediapunti(0,50),
        triple: mediapunti(0,100),
    },
    {
        code: randomcode(),
        nome: 'nome4',
        cognome: 'cognome4',
        età: 25,
        media: mediapunti(0,50),
        triple: mediapunti(0,100),
    },
    {
        code: randomcode(),
        nome: 'nome5',
        cognome: 'cognome5',
        età: 25,
        media: mediapunti(0,50),
        triple: mediapunti(0,100),
    },
    {
        code: randomcode(),
        nome: 'nome6',
        cognome: 'cognome6',
        età: 25,
        media: mediapunti(0,50),
        triple: mediapunti(0,100),
    },
    {
        code: randomcode(),
        nome: 'nome7',
        cognome: 'cognome7',
        età: 25,
        media: mediapunti(0,50),
        triple: mediapunti(0,100),
    },
    {
        code: randomcode(),
        nome: 'nome8',
        cognome: 'cognome8',
        età: 25,
        media: mediapunti(0,50),
        triple: mediapunti(0,100),
    },
    {
        code: randomcode(),
        nome: 'nome9',
        cognome: 'cognome9',
        età: 25,
        media: mediapunti(0,50),
        triple: mediapunti(0,100),
    },
    {
        code: randomcode(),
        nome: 'nome10',
        cognome: 'cognome10',
        età: 25,
        media: mediapunti(0,50),
        triple: mediapunti(0,100),
    },
]

console.log(gruppo);

const bestPlayer = gruppo.filter( element => element.media > 35 && element.triple > 80)

console.log(bestPlayer);


// Fuzioni

function mediapunti (min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
  }

function randomcode (){
    let code = ''
    for(let i = 0; i < 3; i++){
        code += (mediapunti (0, 9))
        const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        code += alfabeto.charAt(mediapunti ( 0, alfabeto.length - 1 ))
    }
    return code
}
