let hobbies = [ "Cricket", "Chess", "video games", "Watching movies"]


function init() {
    let hobbySelect = document.getElementById('add-hobby');
    hobbySelect.innerHTML = "";
    for (let i = 0; i < hobbies.length; i++) {
        hobbySelect.options[hobbySelect.options.length] = new Option(hobbies[i]);
    }

    let delhobbySelect = document.getElementById('hobby-del-list'); 
    delhobbySelect.innerHTML = "";
    for (let i = 0; i < hobbies.length; i++) {
        delhobbySelect.options[delhobbySelect.options.length] = new Option(hobbies[i]);
    }

}
init();



function getAllHobbies() {
    return hobbies;
}


function addHobby() {
    let newHobby = document.getElementById('add-hobby').value
    newHobby=newHobby.trim();
    let flag=false;
    for(let i=0;i<hobbies.length;i++){
        if((hobbies[i]).toLocaleLowerCase()==newHobby.toLocaleLowerCase()){
            flag=true;
            break;
        }
    }
    if(!flag){
        hobbies.push(newHobby)
        init();
        alert(`${newHobby} has been added sucessfully!!!`)
    }else{
        alert(`${newHobby} is already in hobbies list!!!`)
    }
  
}

function removeHobby() {
    let e = document.getElementById("hobby-del-list");
    let hobby = e.options[e.selectedIndex].value;
    let temp = []
    for (let i = 0; i < hobbies.length; i++) {
        if (hobby != hobbies[i]) {
            temp.push(hobbies[i])
        }
    }
    hobbies = temp;

    init();
    alert(`${hobby} has been deleted successfully!`)
}