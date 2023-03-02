import { useContext, createContext} from 'react'
import data from './slider.json'

const SliderContext = createContext();

const SliderProvider = ({children}) => {

    const values= {
        data
    }

    return (
        <SliderContext.Provider value={values}> {children} </SliderContext.Provider>
    )
}

const UseSlider = () => useContext(SliderContext);

export {
    SliderProvider,
    UseSlider
} 
