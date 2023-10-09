const Pet = (props) => {
    return React.createElement("div", { key: props.name }, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.white),
    ]);
}
const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", { key: 1 }, "Adopt Me!"),
            React.createElement(Pet, { name: 'Luna', animal: 'Dog', bread: 'British Shorthair', color: 'White' })
        ]
    )
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))