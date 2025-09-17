import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import state from "./redux/state";
import { addPost } from "./redux/state";
import { rerenderEntireTree } from "./render";

rerenderEntireTree(state); 