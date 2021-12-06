let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

//   console.log(myCollection);


  function describeItem (item) {
      if (item.count === 1) {
        console.log("I have a " + myCollection.name + "here's what i like about it: " + myCollection.whatILike)
      } else if (item.count === 2){
      console.log("I have " + myCollection.count + myCollection.name + "s. here's what i like about it: " + myCollection.whatILike)
      }
  }

  describeItem(myCollection[0]);