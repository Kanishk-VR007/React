import { lazy } from "react";

export const Home = lazy( ()=> import ("./Routes/pages") )
export const About = lazy(()=> import ("./Routes/about") )
export const Contact = lazy(()=> import("./Routes/contact"))