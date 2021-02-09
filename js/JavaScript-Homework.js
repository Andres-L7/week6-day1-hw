//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(list,str){
    for (i = 0; i < list.length; i++ ){
        if(str.includes(list[i])){
            console.log('Matched dog_name')
        }
        else{
            console.log('No Matches')
        }
    }
}
console.log(findWords(dog_names,dog_string))


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(array){
    for(let i =0; i < array.length; i++){
        if(i % 2 == 0){
            array.splice(i, 1, 'even index')
        }
    }
    return array
}
console.log(replaceEvens(arr))


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
