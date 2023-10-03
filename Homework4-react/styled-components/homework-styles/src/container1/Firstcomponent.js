import image from './art1.jpg';
import './Firstcomponent.css';
import {useState} from 'react';

const Firstcomponent = () => {
    const [colorState, setColorState] = useState('light-mode')
    const clases = 'first-card ' + colorState;
    const [textmode, setTextMode] = useState ('Dark mode')
    const textBtn = textmode === 'Dark mode'? 'Light mode' : 'Dark mode'

    const changeColorHandler =() => {
        const newColorChange = colorState === 'light-mode'? 'dark-mode' : 'light-mode';
        setColorState( newColorChange);
        setTextMode(textBtn);
    }

    const [artState, setArtState] = useState ('paragraph')
    const clases2 = `${artState}`;
    const [textArtMode, setTextArtMode] = useState ('Art mode')
    const textBtnArt = textArtMode === 'Art mode'? 'Classic mode' : 'Art mode'

    const [artStateTitle, setArtStateTitle] = useState('title-one')
    const clases3 = artStateTitle;
    

    const changeArtMode = () => {
        const newArtMode = artState === 'paragraph' ? 'paraArt' : 'paragraph';
        setArtState(newArtMode);
        setTextArtMode(textBtnArt)
        const newArtTitleMode = artStateTitle === 'title-one'? 'title-two' : 'title-one';
        setArtStateTitle(newArtTitleMode)
    }
    

    return (
        <div className={clases}>
            <img src={image}/>
            <h5 onClick={changeColorHandler}>{textmode}</h5>
            <h3 className={clases3}>First-card-component</h3>
            <p className={clases2}>I`m first component-card and I am styled only with CSS everything
                 is ok but I need to have an original class name because my style can easily be copied to other components.</p>
                 <button onClick={changeArtMode}>{textArtMode}</button> <br/>
                <a href="">--More info--</a>
        </div>
    )
}

export default Firstcomponent