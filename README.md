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

Steps

1. making components for the categories etc.
2. Implementing BrouserRouter for routing on navigation bar
  - Creating Routes forlder where will be all our components pages like Home, SHop, CheckOut etc.
  - each component will be inside <Route path='/' element={<Home />}/>
  - NAvbar should be the topest component parent and other should be with 'index' prop 
  <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  
3. Separete Navigation component - navigation bar with divs and LINK to go to
   