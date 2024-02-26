function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the great');
    }
    return greatMagicians;
}
var magicians3 = ["usman", "haseeb", "wajahat"];
///////////////////////////////////////////////////////////////////////////////////////////
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
