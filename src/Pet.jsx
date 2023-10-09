const Pet = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.animal}</h2>
            <h2>{props.bread}</h2>
        </div>
    )
}

// agar bisa dipakai di file lain
export default Pet