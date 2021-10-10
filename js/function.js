function searchChoice(searchedID) {
    for (let i = 0; i < history.situations.length; i++) {
        if (history.situations[i].id == searchedID) {
            return history.situations[i].selectText
        }
        
    }
}

function pickSituation(situation) {
    for (var j = 0; j < history.situations.length; j++) {
        if (history.situations[j].id == situation) {
            var text = history.situations[j].text + "<br><br>"
            numElements = history.situations[j].ziele.length
            for (let i = 0; i < numElements; i++) {
                const selectID = history.situations[j].ziele[i]
                const selectText = searchChoice(selectID)
                text = text + 
                "<div style='cursor: pointer'; onclick='pickSituation(" + selectID + ");'>" + ">>" + selectText + "</div>"
            }
            break;
        }
    }
    monitor.innerHTML = "<br>>" + text + "<br>"
}