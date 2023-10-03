import {useState} from 'react';
import image from './art2.jpg';


const Secondcomponent = () => {

    const [modeValid , setMode] = useState ('rgb(196, 187, 176)')
    const modeChange = modeValid === 'rgb(196, 187, 176)'? 'rgb(38, 37, 37)': 'rgb(196, 187, 176)';
    const [textmode, setTextMode] = useState ('Light mode')
    const textBtn = textmode === 'Light mode'? 'Dark mode' : 'Light mode'
    const [textArtMode, setTextArtMode] = useState('Art mode')
    const textBtnArt = textArtMode === 'Art mode'? 'Classic mode' : 'Art mode'

    const [hFiveFont, sethFiveFont] = useState('')
    const hFiveFontSet = hFiveFont === '' ? 'Pacifico, cursive' : '';
    const [hFiveColor, sethFiveColor] = useState('rgb(13, 70, 13)');
    const hFiveColorSet = hFiveColor === 'rgb(13, 70, 13)'? '#ef5350': 'rgb(13, 70, 13)'
    
    const [paraFont, setParaFont] = useState('')
    const paraFontSet = paraFont === '' ? 'Pacifico, cursive': '';
    const [paraColor, setParaColor] = useState('')
    const paraColorSet = paraColor === ''? 'linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722': ''

    const [isHover, setIsHover] = useState(false);
    const [isHoverParagraph, setIsHoverParagraph] = useState(false)
    const [isHoverTitle, setIsHoverTitle] = useState(false)
    const [isHoverHref, setIsHoverHref] =useState (false)
    const [isHoverHFiveBtn,setisHoverHFiveBtn] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true);
     };
  
     const handleMouseLeave = () => {
        setIsHover(false);
     };

     const handleParagraphEnter =() => {
        setIsHoverParagraph(true)
     }
     const handleParagraphLeave =() => {
        setIsHoverParagraph(false)
     }

     const handleTitleEnter =() => {
        setIsHoverTitle(true)
     }
     const handleTitleLeave =() => {
        setIsHoverTitle(false)
     }

     const handleHrefEnter = () => {
        setIsHoverHref (true)
     }

     const handleHrefLeave = () => {
        setIsHoverHref(false)
     }
     
     const handleHFiveBtnEnter = () => {
        setisHoverHFiveBtn(true)
     }
     const handleHFiveBtnLeave = () => {
        setisHoverHFiveBtn(false)
     }


    const divStyle = {
        width: ' 25%',
        margin: '4%',
        padding: '1%',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: modeValid,
        
    };

    const imgStyle = {
        width: '100%',
        height: '345px',
        borderRadius: '12px',
        border: '1px solid white'
    }

    const hthreeStyle = {
        color : isHoverTitle ? 'blue' : hFiveColor,
        cursor: isHoverTitle ? 'pointer' : 'none',
        fontFamily: hFiveFont

    }

    const paragraphStyle = {
        fontSize: isHoverParagraph ? '17px' :'16px',
        width: '100%',
        fontWeight: 'bold',
        color: isHoverParagraph ? 'rgb(193, 9, 9)' : 'black',
        fontFamily:paraFont,
        borderRadius:'5px',
        padding:'1%',
        backgroundImage: paraColor
    }
    const buttonStyle = {
        backgroundColor: isHover ? 'blue' : 'rgb(4, 4, 159)',
        color: 'beige',
        padding: isHover ? '3% 18%' :'2% 15%',
        border: 'none',
        borderRadius: '20px',
        marginBottom: '4%',
        cursor : isHover ? 'pointer' : 'none'
    }

    const ahrefStyle = {
        textDecoration: 'none',
        color: isHoverHref ? 'rgb(160, 224, 160)' :'purple',
        fontWeight:'bold',
        fontSize: isHoverHref ? 'larger' : 'none'
    }

    const hFiveBtn = {
        backgroundColor: 'rgb(41, 169, 169)',
        padding: '2%',
        borderRadius: '10px',
        width: '25%',
        cursor: isHoverHFiveBtn ? 'pointer' : 'none'
    }

    const changeModeHandler =() => {
        setMode(modeChange)
        setTextMode(textBtn)
    }

    const changeArtMode = () => {
      setTextArtMode(textBtnArt)
      sethFiveFont(hFiveFontSet)
      sethFiveColor(hFiveColorSet)
      setParaFont(paraFontSet)
      setParaColor(paraColorSet)
    }

    return (
        <div style={divStyle} >
            <img src={image} style={imgStyle}/>
        <h5 style={hFiveBtn} onMouseEnter={handleHFiveBtnEnter} onMouseLeave={handleHFiveBtnLeave} onClick={changeModeHandler}>{textBtn}</h5>
            <h3 style={hthreeStyle} onMouseEnter={handleTitleEnter} onMouseLeave={handleTitleLeave}>Second-card-component</h3>
            <p style={paragraphStyle} onMouseEnter={handleParagraphEnter} onMouseLeave={handleParagraphLeave}>I`m second component-card and I am inline styled my good point is that i don't 
                have another styling file but i have a lot of code written.</p>
    <button style={buttonStyle} onClick={changeArtMode} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{textArtMode}</button> <br/>
         <a href="" style={ahrefStyle} onMouseEnter={handleHrefEnter} onMouseLeave={handleHrefLeave}>--More info--</a>
        </div>
    )

}

export default Secondcomponent