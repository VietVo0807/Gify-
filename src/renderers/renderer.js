console.log('Hello my friend. Gify is running')

//loading
document.addEventListener('DOMContentLoaded', () => {
    console.log("Fully loaded")

    const gif = document.getElementById("testGif");

    //more testing
    gif.addEventListener('click', () => {
        console.log("Yeah boi");
    });
});