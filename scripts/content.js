const loadObject = window.ttMETA;

console.log(loadObject);

if(loadObject){
    let loadObjectLength = loadObject.length;
    var vcArr = [];

    console.log(loadObject);

    for(let i = 0; i < loadObjectLength; i++){
        if(loadObject[i].CampaignName.includes('VC')){
            vcArr.push(loadObject[i]);
        }
    }

    console.log('here', vcArr);
}