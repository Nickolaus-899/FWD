<script>
    import "../css/main.css"
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import Projects from "./components/Projects.svelte";
    import Joke from "./components/Joke.svelte";

    import {Route, Router} from "svelte-routing";
    import App from "./App.svelte";
    import Enigma from "./Enigma.svelte";
</script>

<div>
    <Router>
        <Route path="/"><Header/><App/></Route>
        <Route path="/main"><Header/><App/></Route>
        <Route path="/enigma"><Enigma/></Route>
        <Route path="/comic"><Joke/></Route>
    </Router>

    <Footer/>
</div>