// Code Keypad Component Here

function Keypad (){
    function handleChange() { //test: event handler that listens to the change
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={handleChange} />;
        </div> //test: rendering intput
    );
}

export default Keypad;