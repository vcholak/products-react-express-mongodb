// our example model is just an Array
const json = "[{\"name\":\"Kayak\",\"description\":\"A boat for one person\",\"category\":\"Watersports\",\"price\":275},{\"name\":\"Life Jacket\",\"description\":\"Protective and fashionable\",\"category\":\"Watersports\",\"price\":48.95},{\"name\":\"Soccer Ball\",\"description\":\"FIFA-approved size and weight\",\"category\":\"Soccer\",\"price\":19.5},{\"name\":\"Corner Flags\",\"description\":\"Give your playing field a professional look\",\"category\":\"Soccer\",\"price\":34.95},{\"name\":\"Stadium\",\"description\":\"Flat-packed 35,000-seat stadium\",\"category\":\"Soccer\",\"price\":795000},{\"name\":\"Thinking Cap\",\"description\":\"Improve your brain efficiency by 75%\",\"category\":\"Chess\",\"price\":16},{\"name\":\"Unsteady Chair\",\"description\":\"Secretly give your opponent a disadvantage\",\"category\":\"Chess\",\"price\":29.95},{\"name\":\"Human Chess Board\",\"description\":\"A fun game for the family\",\"category\":\"Chess\",\"price\":75},{\"name\":\"Sedona DX\",\"description\":\"A bike with an aluminum frame\",\"category\":\"Bicycle\",\"price\":419},{\"name\":\"Test\",\"description\":\"Delete me\",\"category\":\"Other\",\"price\":25}]";
const products = JSON.parse(json); 

export default products;