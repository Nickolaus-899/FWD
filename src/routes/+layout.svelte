<script>
    import "../css/main.css"
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import Projects from "./components/Projects.svelte";
    import Joke from "./components/Joke.svelte";

    import {Route, Router} from "svelte-routing";
    import App from "./App.svelte";
    import Enigma from "./Enigma.svelte";
    import { base } from '$app/paths';
    import MainPage from "./components/MainPage.svelte";
</script>

<div>
    <App/>
    <slot/>
    <Router>
        <Route path="/{base}" component={MainPage}></Route>
        <Route path="/{base}/enigma" component={Enigma}></Route>
        <Route path="/{base}/comic" component={Joke}></Route>
    </Router>
</div>