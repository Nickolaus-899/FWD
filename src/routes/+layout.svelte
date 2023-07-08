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
</script>

<div>
    <Router>
        <Route path="{base}/"><Header/><App/></Route>
        <Route path="{base}/main"><Header/><App/></Route>
        <Route path="{base}/enigma"><Enigma/></Route>
        <Route path="{base}/comic"><Joke/></Route>
    </Router>

    <Footer/>
</div>