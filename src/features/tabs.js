import { html, css, js } from "../assets/index";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        lang: "html",
        imgURL: html,
        buttonContent: "HTML",
        code: `
        <div>
             <h1>Éditez votre code</h1>
             <p>Codez directement sur votre navigateur</p>
        </div>
        `
    },
    {
        id: 2,
        lang: "css",
        imgURL: css,
        buttonContent: "CSS",
        code: `
        body {
              background-color: #f1f1f1;
              padding: 25px;
              color: #111; 
        }
        `
    },
    {
        id: 3,
        lang: "js",
        imgURL: js,
        buttonContent: "JavaScript",
        code: `
        console.log("Carlos est le boss");
        `
    }
]

export const codeUpdater = createSlice({
    name: "code-updater",
    initialState,
    reducers: {
        updateCode: (state, action) => {
            state.find(obj => obj.id === action.payload.id).code =
                action.payload.value
        }
    }
})

export const {updateCode} = codeUpdater.actions
export default codeUpdater.reducer