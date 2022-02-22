import react from "react";
import Etusivu from './Etusivu'
import HSVisio from './HSVisio'
import Hyvinvointi from './Hyvinvointi'
import Kaupunki from './Kaupunki'
import Kulttuuri from './Kulttuuri'
import Luetuimmat from './Luetuimmat'
import Uusimmat from './Uusimmat'
import Nyt from './Nyt'
import Politiikka from './Politiikka'



export default function TitleContent(props) {




return(

<header className="SmallTitlelist" >
    <Etusivu></Etusivu>
    <HSVisio></HSVisio>
    <Hyvinvointi></Hyvinvointi>
    <Kaupunki></Kaupunki>
    <Kulttuuri></Kulttuuri>
    <Luetuimmat></Luetuimmat>
    <Uusimmat></Uusimmat>
    <Politiikka></Politiikka>
    <Nyt></Nyt>



    </header>


)


}

