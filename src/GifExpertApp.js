import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Shingeki no Kyojin']);

    // const handleAdd = () => {
    //     setCategories([...categories,'Dragon Ball Z']);
    //     setCategories( cat => [...cat,'Dragon Ball']);
    // }

    return (
        <>
          <h2>GifExpertApp</h2>
          <hr/>  

          <AddCategory setCategories= { setCategories } />

          <ol>
              { 
                categories.map( category => (
                    <GifGrid 
                        category={ category } 
                        key={ category } 
                    />
                )) 
              } 
          </ol>

        </>
    )
}

