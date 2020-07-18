import * as functions from 'firebase-functions';  //import functions from firebase
import * as admin from 'firebase-admin';  // import admin from firebase admin sdk to have credientials to deal with the real time database

admin.initializeApp()

export const GetShip = functions.https.onCall(async (data, context) => {  //the word async simply means that the function is to return a promise

  let databaseObject;  //This object holds all the childs inside the realtime database
  let numberOfQuery = 0;  //Counter to reveal the number of inputs inside the filter form
  let arrayOne = []; //--------START----------------------
  let arrayTwo = [];
  let arrayThree = [];
  let arrayFour = [];
  let arrayFive = []; //-------EXPLANATIONS: Bunch of arrays used to facilitate the filteration process reduction is possible with further work
  let arraySix = [];
  let resultantArray = [];
  let secondresultantArray = [];
  let thirdresultantArray = [];
  let fourthresultantArray = []; //---------END-------------
  let firstQueryFound = true; //----------START---------------
  let secondQueryFound = true;
  let thirdQueryFound = true;
  let fourthQueryFound = true; //---------EXPLANATIONS: Bunch of boolean values used to facilitate the filteration process reduction is possible with further work
  let fifthQueryFound = true;
  let sixthQueryFound = true;
  let seventhQueryFound = true;
  let eighthQueryFound = true; //----------END-----------------
  let typeKeyArray = []; //---------START------------------------
  let districtKeyArray = [];
  let dangerKeyArray = [];
  let filteredIds = [];
  let draftKeyArray = [];
  let charteringTypeKeyArray = []; //----------EXPLANATIONS: Each array hold the keys of each type of filteration
  let volumeKeyArray = [];
  let weightKeyArray = [];
  let dateKeyArray = []; //---------END------------------------
  let searchQuery = data.list; //this object retrive the query object passed from the filteration process that hold the value of each filteration query


  var ref = admin.database().ref('/Ships') //Creating a ref for the Ships database
  const promise = await ref.once('value') //Returning a promise when the database ref is asked to return the content of the database as a promise and the keyword await simply means to make JS waits until that promise returns either a success or fail
  databaseObject = await promise.val(); //Returning the content of the database as a object
  let ids = Object.keys(databaseObject); //storing the primary key of each child inside the database in an array called ids[]

//---------------Filtering this array of keys according to the querieng values entered by the user in the filteration form and store these filtered keys to specific arrays-------------
  if(searchQuery.Type !== "")
  {
    let counter = 0;
    for (let index = 0; index < ids.length; index++) {
      let key = ids[index];
      if(databaseObject[key].Type == searchQuery.Type)
      {
        typeKeyArray[counter] = key;
        counter++;
      }
    }
    if (numberOfQuery == 0) {
      for (let index = 0; index < typeKeyArray.length; index++) {
        arrayOne[index] = typeKeyArray[index];
      }
      numberOfQuery++;
      firstQueryFound = false;
    }
    else if(numberOfQuery == 1 && firstQueryFound)
    {
      for (let index = 0; index < typeKeyArray.length; index++) {
        arrayTwo[index] = typeKeyArray[index];
      }
      numberOfQuery++;
      firstQueryFound = false;
    }
    else if(numberOfQuery == 2 && firstQueryFound)
    {
      for (let index = 0; index < typeKeyArray.length; index++) {
        arrayThree[index] = typeKeyArray[index];
      }
      numberOfQuery++;
      firstQueryFound = false;
    }
    else if(numberOfQuery == 3 && firstQueryFound)
    {
      for (let index = 0; index < typeKeyArray.length; index++) {
        arrayFour[index] = typeKeyArray[index];
      }
      numberOfQuery++;
      firstQueryFound = false;
    }
    else if(numberOfQuery == 4 && firstQueryFound)
    {
      for (let index = 0; index < typeKeyArray.length; index++) {
        arrayFive[index] = typeKeyArray[index];
      }
      numberOfQuery++;
      firstQueryFound = false;
    }
    else if(numberOfQuery == 5 && firstQueryFound)
    {
      for (let index = 0; index < typeKeyArray.length; index++) {
        arraySix[index] = typeKeyArray[index];
      }
      numberOfQuery++;
      firstQueryFound = false;
    }

  }
  if(searchQuery.District !== "")
  {
    let counter = 0;
    for (let index = 0; index < ids.length; index++) {
      let key = ids[index];
      if(databaseObject[key].District == searchQuery.District)
      {
        districtKeyArray[counter] = key;
        counter++;
      }
    }
      if (numberOfQuery == 0) {
        for (let index = 0; index < districtKeyArray.length; index++) {
          arrayOne[index] = districtKeyArray[index];
        }
        numberOfQuery++;
        secondQueryFound = false;
      }
      else if(numberOfQuery == 1 && secondQueryFound)
      {
        for (let index = 0; index < districtKeyArray.length; index++) {
          arrayTwo[index] = districtKeyArray[index];
        }
        numberOfQuery++;
        secondQueryFound = false;
      }
      else if(numberOfQuery == 2 && secondQueryFound)
      {
        for (let index = 0; index < districtKeyArray.length; index++) {
          arrayThree[index] = districtKeyArray[index];
        }
        numberOfQuery++;
        secondQueryFound = false;
      }
      else if(numberOfQuery == 3 && secondQueryFound)
      {
        for (let index = 0; index < districtKeyArray.length; index++) {
          arrayFour[index] = districtKeyArray[index];
        }
        numberOfQuery++;
        secondQueryFound = false;
      }
      else if(numberOfQuery == 4 && secondQueryFound)
      {
        for (let index = 0; index < districtKeyArray.length; index++) {
          arrayFive[index] = districtKeyArray[index];
        }
        numberOfQuery++;
        secondQueryFound = false;
      }
      else if(numberOfQuery == 5 && secondQueryFound)
      {
        for (let index = 0; index < districtKeyArray.length; index++) {
          arraySix[index] = districtKeyArray[index];
        }
        numberOfQuery++;
        secondQueryFound = false;
      }

  }
  if(searchQuery.CharteringType !== "")
  {
    let counter = 0;
    for (let index = 0; index < ids.length; index++) {
      let key = ids[index];
      if(databaseObject[key].CharteringType == searchQuery.CharteringType)
      {
        charteringTypeKeyArray[counter] = key;
        counter++;
      }
    }
    if (numberOfQuery == 0) {
      for (let index = 0; index < charteringTypeKeyArray.length; index++) {
        arrayOne[index] = charteringTypeKeyArray[index];
      }
      numberOfQuery++;
      secondQueryFound = false;
    }
    else if(numberOfQuery == 1 && thirdQueryFound)
    {
      for (let index = 0; index < charteringTypeKeyArray.length; index++) {
        arrayTwo[index] = charteringTypeKeyArray[index];
      }
      numberOfQuery++;
      thirdQueryFound = false;
    }
    else if(numberOfQuery == 2 && thirdQueryFound)
    {
      for (let index = 0; index < charteringTypeKeyArray.length; index++) {
        arrayThree[index] = charteringTypeKeyArray[index];
      }
      numberOfQuery++;
      thirdQueryFound = false;
    }
    else if(numberOfQuery == 3 && thirdQueryFound)
    {
      for (let index = 0; index < charteringTypeKeyArray.length; index++) {
        arrayFour[index] = charteringTypeKeyArray[index];
      }
      numberOfQuery++;
      thirdQueryFound = false;
    }
    else if(numberOfQuery == 4 && thirdQueryFound)
    {
      for (let index = 0; index < charteringTypeKeyArray.length; index++) {
        arrayFive[index] = charteringTypeKeyArray[index];
      }
      numberOfQuery++;
      thirdQueryFound = false;
    }
    else if(numberOfQuery == 5 && thirdQueryFound)
    {
      for (let index = 0; index < charteringTypeKeyArray.length; index++) {
        arraySix[index] = charteringTypeKeyArray[index];
      }
      numberOfQuery++;
      thirdQueryFound = false;
    }

  }
  if(searchQuery.DraftFrom !== "" && searchQuery.DraftTo !== "" )
  {
    let counter = 0;
    for (let index = 0; index < ids.length; index++) {
      let key = ids[index];
      if(databaseObject[key].Draft >= searchQuery.DraftFrom && databaseObject[key].Draft <= searchQuery.DraftTo)
      {
        draftKeyArray[counter] = key;
        counter++;
      }
    }
    if (numberOfQuery == 0) {
      for (let index = 0; index < draftKeyArray.length; index++) {
        arrayOne[index] = draftKeyArray[index];
      }
      numberOfQuery++;
      fourthQueryFound = false;
    }
    else if(numberOfQuery == 1 && fourthQueryFound)
    {
      for (let index = 0; index < draftKeyArray.length; index++) {
        arrayTwo[index] = draftKeyArray[index];
      }
      numberOfQuery++;
      fourthQueryFound = false;
    }
    else if(numberOfQuery == 2 && fourthQueryFound)
    {
      for (let index = 0; index < draftKeyArray.length; index++) {
        arrayThree[index] = draftKeyArray[index];
      }
      numberOfQuery++;
      fourthQueryFound = false;
    }
    else if(numberOfQuery == 3 && fourthQueryFound)
    {
      for (let index = 0; index < draftKeyArray.length; index++) {
        arrayFour[index] = draftKeyArray[index];
      }
      numberOfQuery++;
      fourthQueryFound = false;
    }
    else if(numberOfQuery == 4 && fourthQueryFound)
    {
      for (let index = 0; index < draftKeyArray.length; index++) {
        arrayFive[index] = draftKeyArray[index];
      }
      numberOfQuery++;
      fourthQueryFound = false;
    }
    else if(numberOfQuery == 5 && fourthQueryFound)
    {
      for (let index = 0; index < draftKeyArray.length; index++) {
        arraySix[index] = draftKeyArray[index];
      }
      numberOfQuery++;
      fourthQueryFound = false;
    }

  }
  if(searchQuery.VolumeFrom !== "" && searchQuery.VolumeTo !== "")
  {
    let counter = 0;
    for (let index = 0; index < ids.length; index++) {
      let key = ids[index];
      if(databaseObject[key].Volume >= searchQuery.VolumeFrom && databaseObject[key].Volume <= searchQuery.VolumeTo)
      {
        volumeKeyArray[counter] = key;
        counter++;
      }
    }
    if (numberOfQuery == 0) {
      for (let index = 0; index < volumeKeyArray.length; index++) {
        arrayOne[index] = volumeKeyArray[index];
      }
      numberOfQuery++;
      fifthQueryFound = false;
    }
    else if(numberOfQuery == 1 && fifthQueryFound)
    {
      for (let index = 0; index < volumeKeyArray.length; index++) {
        arrayTwo[index] = volumeKeyArray[index];
      }
      numberOfQuery++;
      fifthQueryFound = false;
    }
    else if(numberOfQuery == 2 && fifthQueryFound)
    {
      for (let index = 0; index < volumeKeyArray.length; index++) {
        arrayThree[index] = volumeKeyArray[index];
      }
      numberOfQuery++;
      fifthQueryFound = false;
    }
    else if(numberOfQuery == 3 && fifthQueryFound)
    {
      for (let index = 0; index < volumeKeyArray.length; index++) {
        arrayFour[index] = volumeKeyArray[index];
      }
      numberOfQuery++;
      fifthQueryFound = false;
    }
    else if(numberOfQuery == 4 && fifthQueryFound)
    {
      for (let index = 0; index < volumeKeyArray.length; index++) {
        arrayFive[index] = volumeKeyArray[index];
      }
      numberOfQuery++;
      fifthQueryFound = false;
    }
    else if(numberOfQuery == 5 && fifthQueryFound)
    {
      for (let index = 0; index < volumeKeyArray.length; index++) {
        arraySix[index] = volumeKeyArray[index];
      }
      numberOfQuery++;
      fifthQueryFound = false;
    }

  }
  if(searchQuery.WeightFrom !== "" && searchQuery.WeightTo !== "")
  {
    let counter = 0;
    for (let index = 0; index < ids.length; index++) {
      let key = ids[index];
      if((databaseObject[key].Weight >= searchQuery.WeightFrom) && databaseObject[key].Weight <= searchQuery.WeightTo)
      {
        weightKeyArray[counter] = key;
        counter++;
      }
    }
    if (numberOfQuery == 0) {
      for (let index = 0; index < weightKeyArray.length; index++) {
        arrayOne[index] = weightKeyArray[index];
      }
      numberOfQuery++;
      sixthQueryFound = false;
    }
    else if(numberOfQuery == 1 && sixthQueryFound)
    {
      for (let index = 0; index < weightKeyArray.length; index++) {
        arrayTwo[index] = weightKeyArray[index];
      }
      numberOfQuery++;
      sixthQueryFound = false;
    }
    else if(numberOfQuery == 2 && sixthQueryFound)
    {
      for (let index = 0; index < weightKeyArray.length; index++) {
        arrayThree[index] = weightKeyArray[index];
      }
      numberOfQuery++;
      sixthQueryFound = false;
    }
    else if(numberOfQuery == 3 && sixthQueryFound)
    {
      for (let index = 0; index < weightKeyArray.length; index++) {
        arrayFour[index] = weightKeyArray[index];
      }
      numberOfQuery++;
      sixthQueryFound = false;
    }
    else if(numberOfQuery == 4 && sixthQueryFound)
    {
      for (let index = 0; index < weightKeyArray.length; index++) {
        arrayFive[index] = weightKeyArray[index];
      }
      numberOfQuery++;
      sixthQueryFound = false;
    }
    else if(numberOfQuery == 5 && sixthQueryFound)
    {
      for (let index = 0; index < weightKeyArray.length; index++) {
        arraySix[index] = weightKeyArray[index];
      }
      numberOfQuery++;
      sixthQueryFound = false;
    }

  }
  if(searchQuery.DateFrom !== "" && searchQuery.DateTo !== "")
  {
    let counter = 0;
    for (let index = 0; index < ids.length; index++) {
      let key = ids[index];
      if((databaseObject[key].DateFrom <= searchQuery.DateFrom && databaseObject[key].DateTo >= searchQuery.DateTo) || (databaseObject[key].DateFrom >= searchQuery.DateFrom && databaseObject[key].DateTo <= searchQuery.DateTo) || (databaseObject[key].DateFrom <= searchQuery.DateFrom && databaseObject[key].DateTo >= searchQuery.DateFrom) || (databaseObject[key].DateFrom <= searchQuery.DateTo && databaseObject[key].DateTo >= searchQuery.DateTo))
      {
        dateKeyArray[counter] = key;
        counter++;
      }
    }
    if (numberOfQuery == 0) {
      for (let index = 0; index < dateKeyArray.length; index++) {
        arrayOne[index] = dateKeyArray[index];
      }
      numberOfQuery++;
      secondQueryFound = false;
    }
    else if(numberOfQuery == 1 && seventhQueryFound)
    {
      for (let index = 0; index < dateKeyArray.length; index++) {
        arrayTwo[index] = dateKeyArray[index];
      }
      numberOfQuery++;
      seventhQueryFound = false;
    }
    else if(numberOfQuery == 2 && seventhQueryFound)
    {
      for (let index = 0; index < dateKeyArray.length; index++) {
        arrayThree[index] = dateKeyArray[index];
      }
      numberOfQuery++;
      seventhQueryFound = false;
    }
    else if(numberOfQuery == 3 && seventhQueryFound)
    {
      for (let index = 0; index < dateKeyArray.length; index++) {
        arrayFour[index] = dateKeyArray[index];
      }
      numberOfQuery++;
      seventhQueryFound = false;
    }
    else if(numberOfQuery == 4 && seventhQueryFound)
    {
      for (let index = 0; index < dateKeyArray.length; index++) {
        arrayFive[index] = dateKeyArray[index];
      }
      numberOfQuery++;
      seventhQueryFound = false;
    }
    else if(numberOfQuery == 5 && seventhQueryFound)
    {
      for (let index = 0; index < dateKeyArray.length; index++) {
        arraySix[index] = dateKeyArray[index];
      }
      numberOfQuery++;
      seventhQueryFound = false;
    }

  }
  if(searchQuery.DangerousGoods !== "" || searchQuery.DangerousGoods !== false)
  {
    let counter = 0;
    for (let index = 0; index < ids.length; index++) {
      let key = ids[index];
      if(databaseObject[key].DangerousGoods == searchQuery.DangerousGoods)
      {
        dangerKeyArray[counter] = key;
        counter++;
      }
    }
      if (numberOfQuery == 0) {
        for (let index = 0; index < dangerKeyArray.length; index++) {
          arrayOne[index] = dangerKeyArray[index];
        }
        numberOfQuery++;
        eighthQueryFound = false;
      }
      else if(numberOfQuery == 1 && eighthQueryFound)
      {
        for (let index = 0; index < dangerKeyArray.length; index++) {
          arrayTwo[index] = dangerKeyArray[index];
        }
        numberOfQuery++;
        eighthQueryFound = false;
      }
      else if(numberOfQuery == 2 && eighthQueryFound)
      {
        for (let index = 0; index < dangerKeyArray.length; index++) {
          arrayThree[index] = dangerKeyArray[index];
        }
        numberOfQuery++;
        eighthQueryFound = false;
      }
      else if(numberOfQuery == 3 && eighthQueryFound)
      {
        for (let index = 0; index < dangerKeyArray.length; index++) {
          arrayFour[index] = dangerKeyArray[index];
        }
        numberOfQuery++;
        eighthQueryFound = false;
      }
      else if(numberOfQuery == 4 && eighthQueryFound)
      {
        for (let index = 0; index < dangerKeyArray.length; index++) {
          arrayFive[index] = dangerKeyArray[index];
        }
        numberOfQuery++;
        eighthQueryFound = false;
      }
      else if(numberOfQuery == 5 && eighthQueryFound)
      {
        for (let index = 0; index < dangerKeyArray.length; index++) {
          arraySix[index] = dangerKeyArray[index];
        }
        numberOfQuery++;
        eighthQueryFound = false;
      }

  }
//-----------------------------------------------------------------------------


//-----------------Binding this filtered arrays together according to some conitions to require a common array of ids and store it in the array filteredIds[]---------------------
  if(searchQuery.NumberOfQueries == 0)
  {
    for (let index = 0; index < ids.length; index++) {
      filteredIds[index] = ids[index];
    }
  }
  else if (searchQuery.NumberOfQueries == 1) {
      for (let index = 0; index < arrayOne.length; index++) {
        filteredIds[index] = arrayOne[index];
      }
  }
  else if(searchQuery.NumberOfQueries == 2)
  {
    filteredIds = FilterTwoArrays(arrayOne,arrayTwo);
  }
  else if(searchQuery.NumberOfQueries == 3)
  {
    resultantArray = FilterTwoArrays(arrayOne,arrayTwo);
    filteredIds = FilterTwoArrays(resultantArray,arrayThree);
  }
  else if(searchQuery.NumberOfQueries == 4)
  {
    resultantArray = FilterTwoArrays(arrayOne,arrayTwo);
    secondresultantArray = FilterTwoArrays(resultantArray,arrayThree);
    filteredIds = FilterTwoArrays(secondresultantArray,arrayFour);
  }
  else if(searchQuery.NumberOfQueries == 5)
  {
    resultantArray = FilterTwoArrays(arrayOne,arrayTwo);
    secondresultantArray = FilterTwoArrays(resultantArray,arrayThree);
    thirdresultantArray = FilterTwoArrays(secondresultantArray,arrayFour);
    filteredIds = FilterTwoArrays(thirdresultantArray,arrayFive);
  }
  else if(searchQuery.NumberOfQueries == 6)
  {
    resultantArray = FilterTwoArrays(arrayOne,arrayTwo);
    secondresultantArray = FilterTwoArrays(resultantArray,arrayThree);
    thirdresultantArray = FilterTwoArrays(secondresultantArray,arrayFour);
    fourthresultantArray = FilterTwoArrays(thirdresultantArray,arrayFive);
    filteredIds = FilterTwoArrays(fourthresultantArray,arraySix);
  }
//--------------------------------------------------

  console.log(filteredIds);
  return filteredIds;  //Returning the final result----------------
});



//-------------Function used to return the common array of keys--------------------
function FilterTwoArrays(one: any,two: any)
{
  let filteredIds = [];
  for (let i = 0; i < one.length; i++) {
    for (let j = 0; j < two.length; j++) {
      if(one[i] == two[j])
      {
        filteredIds.push(one[i]);
      }
    }
  }
  return filteredIds;
}
//---------------------------------------------------








// export const helloWorld = functions.https.onRequest((request, response) => {
//
//   response.send("Hello from Firebase!");
// });
