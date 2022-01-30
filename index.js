import myCollection from "./collection.js";

//   console.log(myCollection);

  function describeItem (item) {
      if (item.count === 1) {
        console.log("I have a " + item.name + ". here's what i like about it: " + item.whatILike)
      } else if (item.count === 2){
      console.log("I have " + item.count + " " + item.name + "s. here's what i like about it: " + item.whatILike)
      }
  }

  // describeItem(myCollection[0]);

  function describeCollection(arr) {
    for(let i = 0; i < arr.length; i++){
      describeItem(arr[i]);
    }
    return;
  }

  describeCollection(myCollection)
  // looping through, output is not an array > forEach()
  //it should call the function describeItem.