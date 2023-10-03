import styled from 'styled-components';
import {useState} from 'react';
import image from './art3.jpg';



const Thirdcomponent =() => {

    const [modeValid , setMode] = useState ('rgb(196, 187, 176)')
    const modeChange = modeValid === 'rgb(196, 187, 176)'? 'rgb(38, 37, 37)': 'rgb(196, 187, 176)';
    const [textmode, setTextMode] = useState ('Dark mode')
    const textBtn = textmode === 'Dark mode'? 'Light mode' : 'Dark mode'

    const [textArtMode, setTextArtMode] = useState ('Art mode')
    const textBtnArt = textArtMode === 'Art mode'? 'Classic mode' : 'Art mode'

    const [titleCardMode, setTitleCardMode] = useState('')
    const titleCardModeSet = titleCardMode === '' ? 'Pacifico, cursive': '';
    const [titleColorMode, setTitleColorMode] = useState('rgb(13, 70, 13)');
    const titleColorModeSet = titleColorMode === 'rgb(13, 70, 13)'? '#ef5350': 'rgb(13, 70, 13)';

    const [paraFontMode, setParaFontMode] = useState ('');
    const paraFontModeSet = paraFontMode === '' ? 'Pacifico, cursive': '';
    const [paraColor, setParaColor] = useState('')
    const paraColorSet = paraColor === '' ? 'linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)': '';
    
    
    const CardDiv = styled.div`
width: 25%;
height: 40%;
margin: 4%;
padding: 1%;
border: 1px solid black;
border-radius: 5px; 
background-color: ${modeValid};
@media (max-width: 425px) {
    width: 90%;
};
`;

const ImageCard = styled.img`
width: 100%;
height: 340px;
border-radius: 12px;
border: 1px solid white;

`;
const TitleCard = styled.h3`
color: ${titleColorMode};
font-family: ${titleCardMode};

&:hover {
    color: blue;
    cursor:pointer;
}
`;

const ParagraphCard = styled.p`
font-size: 16px;
width:100%;
font-weight: bold;
font-family: ${paraFontMode};
background-image: ${paraColor};
border-radius:5px;
padding: 1%;

&:hover {
    color: rgb(193, 9, 9);
    font-size:17px;
}
`;
const ButtonCard = styled.button`
background-color: rgb(4, 4, 159);
color: beige;
padding: 2% 15%;
border: none;
border-radius: 20px;
margin-bottom: 4%;

&:hover {
    background-color:rgb(59, 59, 244);
    padding: 3% 18%;
    cursor: pointer;
}
`;

const Ahref =styled.a`
text-decoration: none;
color: purple;
font-weight: bold;

&:hover{
    font-size: larger;
    color: rgb(160, 224, 160);
    
}
 
`;

const HFive = styled.h5`
background-color: rgb(41, 169, 169);
padding: 2%;
border-radius: 10px;
width: 25%;

&:hover {
    cursor: pointer;
}
`;

    const changeColorHandler =() => {
      
        setMode(modeChange)
        setTextMode(textBtn)
       
    }

    const changeArtMode = () => {
        setTextArtMode(textBtnArt)
        setTitleCardMode(titleCardModeSet)
        setTitleColorMode(titleColorModeSet)
        setParaFontMode(paraFontModeSet)
        setParaColor(paraColorSet)
    }

    return (
        <CardDiv>
            <ImageCard src={image}/>
            <HFive onClick={changeColorHandler}>{textmode}</HFive>
            <TitleCard>Third-card-component</TitleCard>
            <ParagraphCard>I`m third component-card and and I'm styled with styled-components, 
      it's an npm package that is installed and imported into a react document, this style is the most used in react.</ParagraphCard>
                 <ButtonCard onClick={changeArtMode}>{textArtMode}</ButtonCard> <br/>
                <Ahref href="">--More info--</Ahref>
        </CardDiv>
    )
}

export default Thirdcomponent