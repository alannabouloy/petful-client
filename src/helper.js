export default {
    generatePet(){
        const coinFlip = Math.random()
        if(coinFlip < 0.5){
            return 'cat'
        }else {
            return 'dog'
        }
    }
}