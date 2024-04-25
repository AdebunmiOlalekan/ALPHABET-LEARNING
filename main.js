var letters = 
[
    {letter:"A", word:"Apple", image:"images/apple.jpeg"}, 

    {letter:"B", word:"Bee", image:"images/Bee.jpeg"},

    {letter:"C", word:"Cup", image:"images/Cup.jpeg"},
    {letter:"D", word:"Dog", image:"images/dog.jpeg"},
    {letter:"E", word:"Egg", image:"images/egg.jpeg"},
    {letter:"F", word:"Fish", image:"images/Fishh.jpeg"},
    {letter:"G", word:"Glove", image:"images/Glove.jpeg"},
    {letter:"H", word:"Hat", image:"images/Hat.jpeg"},
    {letter:"I", word:"Insect", image:"images/Insect.jpeg"},
    {letter:"J", word:"Jacket", image:"images/Jacket.jpeg"},
    {letter:"K", word:"Knife", image:"images/knife.jpeg"},
    {letter:"L", word:"Lion", image:"images/lion.jpeg"},
    {letter:"M", word:"Moon", image:"images/Moon.jpeg"},
    {letter:"N", word:"Net", image:"images/Net.jpeg"},
    {letter:"O", word:"Owl", image:"images/owl.jpeg"},
    {letter:"P", word:"Parrot", image:"images/parrot.jpeg"},
    {letter:"Q", word:"Queen", image:"images/Quuen.jpeg"},
    {letter:"R", word:"Rabbit", image:"images/rabbit.jpeg"},
    {letter:"S", word:"Ship", image:"images/ship.jpeg"},
    {letter:"T", word:"Tiger", image:"images/Tiger.jpeg"},
    {letter:"U", word:"Unicorn", image:"images/unicorn.jpeg"},
    {letter:"V", word:"Violin", image:"images/violin.jpeg"},
    {letter:"W", word:"Watch", image:"images/watch.jpeg"},
    {letter:"X", word:"X-Ray", image:"images/X-ray.jpeg"},
    {letter:"Y", word:"Yougurt", image:"images/yougurt.jpeg"},   
    {letter:"Z", word:"Zebra", image:"images/zebra.jpeg"}
];

var currentIndex = 0;

function displayCurrentItem() {
    var currentItem = letters[currentIndex];
    document.getElementById("myDisplay").innerHTML = currentItem.letter + " for " + currentItem.word;
    document.querySelector("img").setAttribute("src", currentItem.image);
}



displayCurrentItem(); 

function handleNext() {
    if (currentIndex < letters.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    displayCurrentItem();
}



function handlePrevious() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = letters.length - 1;
    }
    displayCurrentItem();
}
