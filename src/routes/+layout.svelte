<script>
    import "../css/main.css"
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Projects from "./Projects.svelte";
    import Joke from "./comic/Joke.svelte";

    import {Route, Router} from "svelte-routing";
    import App from "./App.svelte";
    import Enigma from "./enigma/Enigma.svelte";
    import { base } from '$app/paths';
    import MainPage from "./MainPage.svelte";
</script>

<svelte:head>
    <title>Portfolio</title>
</svelte:head>

<div>
<!--    <slot/>-->
<!--    <Router>-->
<!--        <Route path="/{base}" component={MainPage}></Route>-->
<!--        <Route path="/{base}/enigma" component={Enigma}></Route>-->
<!--        <Route path="/{base}/comic" component={Joke}></Route>-->
<!--    </Router>-->
    <App/>
</div>