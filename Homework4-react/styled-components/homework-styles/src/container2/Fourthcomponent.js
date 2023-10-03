
import styles from './Fourthcomponent.module.css';
import image from './art4.jpg';
import {useState} from 'react'

const Fourthcomponent = () => {
    
    const [colorState, setColorState] = useState('light-mode')
    const clases = `${styles['first-card']} + ${colorState}`;
    const [textmode, setTextMode] = useState ('Dark mode')
    const textBtn = textmode === 'Dark mode'? 'Light mode' : 'Dark mode'


    const changeColorHandler =() => {
        const newColorChange = colorState === 'light-mode'? 'dark-mode' : 'light-mode';
        setColorState( newColorChange);
        setTextMode(textBtn);
    }

    const [artState, setArtState] = useState ('paragraph')
    const clases2 = `${styles[artState]} `;
    const [textArtMode, setTextArtMode] = useState ('Art mode')
    const textBtnArt = textArtMode === 'Art mode'? 'Classic mode' : 'Art mode'

    const [artStateTitle, setArtStateTitle] = useState('title-one')
    const clases3 =`${styles[artStateTitle]}`;

    const changeArtMode = () => {
        const newArtMode = artState === 'paragraph' ? 'paraArt' : 'paragraph';
        setArtState(newArtMode);
        setTextArtMode(textBtnArt)
        const newArtTitleMode = artStateTitle === 'title-one'? 'title-two' : 'title-one';
        setArtStateTitle(newArtTitleMode)
    }

    return (
        <div className={clases} >
        <img src={image}/>
        <h5 onClick={changeColorHandler}>{textmode}</h5>
        <h3 className={clases3}>Four-card-component</h3>
        <p className={clases2}>I`m fourth component-card and I am styled only with module.css i have another file with module.css name and i`m similar 
            like styling with clasic CSS.</p>
            <button onClick={changeArtMode}>{textArtMode}</button> <br/>
            <a href="">--More info--</a>
    </div>

    )
}

export default Fourthcomponent