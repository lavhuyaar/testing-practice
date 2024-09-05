function capitalize(str) {
    return str[0].toUpperCase() + str.split("").splice(1, str.length-1).join("") 
}

module.exports = capitalize;