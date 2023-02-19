const Pet = () =>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Bosco"),
        React.createElement("h2", {}, "Luna"),
        React.createElement("h1", {}, "Dog"),
        React.createElement("h1", {}, "Havanese"),
    ]);
}
const App =()=>{
    return React.createElement(
        "div", 
        // parent element above below is the attribute or id to be used in the styling
        {},
        // The nested element h1 inside the div
        React.createElement("h1", {}, "Adopt Me!")
    )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));