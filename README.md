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
  
3. Separete Navigation component - navigation bar with divs and LINK to go to. 
4. Logo for geting to home page - .svg file to root folder to call it as component - import { ReactComponent as Logo } from '../../assets/LOGO.svg' - and now we can use the logo

*to import scss file to compomnent just use this - import './navigation.styles.scss'
   
DB is done by FireBse

- creating new link and component Sign In

- setting firebase utils 
- inside firebase registering app and getting the settings code
  
  const firebaseConfig = {
    apiKey: "AIzaSyA-9Zei9LnVjGaCTa_8cpImcs-12Zji_Kw",
    authDomain: "shick-shop-db.firebaseapp.com",
    projectId: "shick-shop-db",
    storageBucket: "shick-shop-db.appspot.com",
    messagingSenderId: "1071714526954",
    appId: "1:1071714526954:web:762d41054ba64173c95993"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  importing signIn components from firebase and setting provider and finishing settings that are specific for firebase

  -after setting up authentication NEXT step is to create dataBase and make setings for it

  *Setting up the register form filds in the sign up component
  -general form with some inputs combined with useState object
    -setting state object and using it as prop in useState

       const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    }

    const [formFields, setFormFields] = useState(defaultFormFields)

    - destructure the values so we can use them with inputs 

const {displayName, email, password, confirmPassword} = formFields

  -setting the handler function for the intup change
  -setting up handleSubmit for the new user creation as form onSubmit using try and catch to await response from function in firebase utils 

  making component Form-Input and 