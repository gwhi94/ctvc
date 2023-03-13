var ctUtility = {
    retrieveAdobeExps: function () {
        const loadObject = window.ttMETA;
        console.log('LOAD OBJ', loadObject);
        if (loadObject) {
            let loadObjectLength = loadObject.length;

            for (let i = 0; i < loadObjectLength; i++) {
                $('.ct-utility-adobe-exps-container').append(`
                <p>`+ loadObject[i].CampaignName + `</p>
                <small>`+ loadObject[i].RecipeName + `</small>           
                `);
            }

        }
    },

}

$(function () {
    setTimeout(function () {
        console.log('RUN');
        ctUtility.retrieveAdobeExps();
    }, 2000);
})