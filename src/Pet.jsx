import { Link } from "react-router-dom"

const Pet = (props) => {
  const { name, animal, breed, images, location, id, key } = props

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
  if (images.length) {
    hero = images[0]
  }

  return (
    // <div>
    //     <h1>{props.name}</h1>
    //     <h2>{props.animal}</h2>
    //     <h2>{props.bread}</h2>
    // </div>
    <Link to={`/details/${id}`} className="pet" key={key}>
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal}-${breed}-${location}`}</h2>
      </div>
    </Link>
  )
}

// agar bisa dipakai di file lain
export default Pet