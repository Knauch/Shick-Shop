simple componment be like -

const CategoryItem = ({category})=> {

    const {imageUrl, title} = category
    //const {imageUrl, title} = category - description

    return (
        <div  className='category-container'>
        <div className='background-image' style={
          {backgroundImage: `url(${imageUrl})`}
        } />
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    )

}

export default CategoryItem

end usage of the component be like - 

return (
    <div className='categories-container'>
      {categories.map(({ category }) => (
       <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}