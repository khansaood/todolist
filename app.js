var Data = document.getElementById('data')
var finaldata = Data.value
var Elementli
var ol

firebase.database().ref('todo data').on('child_added', function(data) {

    Elementli = document.createElement('li')
        // var text =
    var finaltext = document.createTextNode(data.val().value)
    Elementli.appendChild(finaltext)
    Elementli.setAttribute('class', 'li')
    ol = document.getElementById('ol')
    ol.appendChild(Elementli)
        //delbuttoncreating
    var delbtn = document.createElement('button')
    delbtn.setAttribute('class', 'delbutton')
    delbtn.setAttribute('onclick', 'del(this)')
    delbtn.setAttribute('id', data.val().key)
    var deltext = document.createTextNode('Del')
    delbtn.appendChild(deltext)
    Elementli.appendChild(delbtn)
        //editbuttoncreating
    var editbtn = document.createElement('button')
    editbtn.setAttribute('onclick', 'edit(this)')
    editbtn.setAttribute('id', data.val().key)
    editbtn.setAttribute('class', 'edit')
    var editbtntext = document.createTextNode('Edit')
    editbtn.appendChild(editbtntext)
    Elementli.appendChild(editbtn)
    var setdiv = document.createElement('div')
    setdiv.setAttribute('class', 'divbox')
    Elementli.appendChild(setdiv)
    setdiv.appendChild(delbtn)
    setdiv.appendChild(editbtn)

})



function todo() {

    var Data = document.getElementById('data')
    var finaldata = Data.value
    if (finaldata == "") {
        alert("Error!!!!!..Input is empty write somthing to save")
    } else {
        var database = firebase.database().ref('todo data')
        var key = database.push().key;
        var todoobj = {
            value: finaldata,
            key: key
        }
        database.child(key).set(todoobj)

    }
}



function del(a) {
    firebase.database().ref('todo data').child(a.id).remove()

    a.parentNode.parentNode.remove()
}

function edit(e) {
    // console.log(e.parentNode.parentNode.childNodes[0])
    var b;
    b = prompt('enter new text')
    var c;
    var editit = {
        value: b,
        key: e.id
    }


    firebase.database().ref('todo data').child(e.id).set(editit)
    c = e.parentNode.parentNode.childNodes[0]
        // var innertext = e.parentNode.parentNode.firstChild
        // innertext.nodeValue = b;
    c.nodeValue = b;
}




function delall() {
    // Elementli.innerHTML = ''
    ol.innerHTML = ''
}