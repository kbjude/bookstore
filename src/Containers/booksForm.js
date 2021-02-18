import React from 'react'

export const BooksForm = () => {

    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

    return (
        <form>
            <label>
                Title
            </label>
            <input name="title" placeholder="Title" type="text" />
            <select name="category">
                { categories.map(category => <option value={category}> {category} </option>)}
            </select>
        </form>
    )
}

export default BooksForm;
