<script>
import Projects from "./Projects.svelte";
import Joke from "./comic/Joke.svelte";
import {Route, Router, navigate} from "svelte-routing";
import Enigma from "./enigma/Enigma.svelte";
import ButtonToJoke from "./ButtonToJoke.svelte";
import {base} from "$app/paths";
import Header from "./Header.svelte";
import Footer from "./Footer.svelte";
import MainPage from "./MainPage.svelte";
</script>

<div>
<!--    <Router>-->
<!--        <Route path="/{base}" component={MainPage}></Route>-->
<!--        <Route path="/{base}/enigma" component={Enigma}></Route>-->
<!--        <Route path="/{base}/comic" component={Joke}></Route>-->
<!--    </Router>-->

    <MainPage/>
    <Footer/>
</div>