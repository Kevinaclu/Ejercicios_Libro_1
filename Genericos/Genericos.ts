function randomElem(theArray: any[]): any {
    let randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
let positions = [103, 458, 472, 458];
let randomPosition = randomElem(positions);

// This code will compile without an error.
let colors: string[] = ['violet', 'indigo', 'blue', 'green'];
let randomColor: number = randomElem(colors);