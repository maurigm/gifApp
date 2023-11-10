import {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one punch', 'bleach']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([...categories , newCategory])

  };



  return (
    <>
      {/* titulo */}
      <h1>Gif Expert App</h1>
      {/* input     */}
      <AddCategory 
      onNewCategory={ onAddCategory }
      />
      
      {/* estado de gif */}
      <ol>
        {categories.map((category) => {
          return <li key={category}> {category} </li>
        } ) }
      </ol>

      {/* gif item */}
    </>
  )
}
