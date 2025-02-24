// Hook di React per gestire lo stato del componente
import { useState } from "react";

// dati iniziali
const initialPosts = [
    {
        id: 1,
        title: "Introduzione a JavaScript",
        autore: "Mario Rossi",
        contenuto: "JavaScript è un linguaggio di scripting lato client ampiamente utilizzato per lo sviluppo web.",
        categoria: "JavaScript"
    },
    {
        id: 2,
        title: "Guida a Node.js",
        autore: "Luca Bianchi",
        contenuto: "Node.js è un runtime JavaScript lato server basato su V8, che permette di costruire applicazioni scalabili.",
        categoria: "Node.js"
    },
    {
        id: 3,
        title: "Express: Creare un server",
        autore: "Giulia Verdi",
        contenuto: "Express è un framework minimalista per Node.js che facilita la creazione di server web.",
        categoria: "Node.js"
    },
    {
        id: 4,
        title: "CSS Flexbox e Grid",
        autore: "Francesca Neri",
        contenuto: "Flexbox e Grid sono strumenti potenti per il layout CSS moderno.",
        categoria: "CSS"
    },
    {
        id: 5,
        title: "Ottimizzazione delle performance web",
        autore: "Alessandro De Santis",
        contenuto: "Migliorare le performance web significa ridurre i tempi di caricamento e ottimizzare il codice.",
        categoria: "Web Performance"
    },
    {
        id: 6,
        title: "Async/Await in JavaScript",
        autore: "Paola Moretti",
        contenuto: "Async/Await rende la gestione del codice asincrono più leggibile e mantenibile.",
        categoria: "JavaScript"
    },
    {
        id: 7,
        title: "REST API con Express e MongoDB",
        autore: "Stefano Gallo",
        contenuto: "Creare API RESTful con Express e MongoDB permette di sviluppare backend scalabili.",
        categoria: "Backend"
    },
    {
        id: 8,
        title: "Introduzione a React",
        autore: "Elena Russo",
        contenuto: "React è una libreria front-end per la creazione di interfacce utente dinamiche.",
        categoria: "React"
    },
    {
        id: 9,
        title: "State Management con Redux",
        autore: "Davide Rinaldi",
        contenuto: "Redux è una libreria per la gestione dello stato nelle applicazioni JavaScript.",
        categoria: "React"
    },
    {
        id: 10,
        title: "Autenticazione con JWT e Node.js",
        autore: "Marco Ferrara",
        contenuto: "JSON Web Token è una soluzione per l'autenticazione sicura nelle applicazioni web.",
        categoria: "Sicurezza"
    }
];

const PostForm = () => {

    // utilizzo dello useState per la gestione dei data (array di oggetti post)
    const [posts, setPosts] = useState(initialPosts);
    // state per la gestione delle informazioni raccolte dai campi del form
    // const [formData, setFormData] = useState(initialFormData)

    // contenuto della pagina
    return (
        <>
            <h1>questo e il form delle pizze</h1>

            {posts.map((post) => (
                <div className="postItem" key={post.id}>
                    <h2>{post.title}</h2>
                    <h3>{post.autore}</h3>
                    <p>{post.contenuto}</p>
                    <h5>{post.categoria}</h5>

                </div>
            ))
            }
        </>
    )
}

export default PostForm