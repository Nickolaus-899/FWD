<script>
import Projects from "./components/Projects.svelte";
import Joke from "./components/Joke.svelte";
import {Route, Router, navigate} from "svelte-routing";
import Enigma from "./Enigma.svelte";
import ButtonToJoke from "./components/ButtonToJoke.svelte";
import {base} from "$app/paths";
import Header from "./components/Header.svelte";
import Footer from "./components/Footer.svelte";
import MainPage from "./components/MainPage.svelte";
</script>

<div>
    <Projects/>
    <ButtonToJoke/>

    <Router>
        <Route path="/{base}" component={MainPage}></Route>
        <!--        <Route path="{base}/main"><Header/><App/></Route>-->
        <Route path="/{base}/enigma" component={Enigma}></Route>
        <Route path="/{base}/comic" component={Joke}></Route>
    </Router>

    <Footer/>
</div>