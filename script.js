// Need to get buttons input
// Store each input into string 
// Update the display output with the string 
class Keyboard {
    constructor(keyboardOutPutTextElement) {
        this.keyboardOutPutTextElement = keyboardOutPutTextElement
        this.setDefault()
        
    }
    setDefault() {
        this.keyboardOutput = ''
    }
    
    appendLetter(letter) {
        if (letter ==='q' && this.keyboardOutput.includes('q'))
        return
        if (letter ==='w' && this.keyboardOutput.includes('w'))
        return
        if (letter ==='e' && this.keyboardOutput.includes('e'))
        return
        if (letter ==='r' && this.keyboardOutput.includes('r'))
        return
        if (letter ==='t' && this.keyboardOutput.includes('t'))
        return
        if (letter ==='y' && this.keyboardOutput.includes('y'))
        return
        this.keyboardOutput = this.keyboardOutput.toString() + letter.toString()
            

                
        

        /*if (this.keyboardOutput.includes('q'))
        return
        if (this.keyboardOutput.includes('w'))
        return
        if (this.keyboardOutput.includes('e'))
        return
        if (this.keyboardOutput.includes('r'))
        return
        if (this.keyboardOutput.includes('t'))
        return
        if (this.keyboardOutput.includes('y'))
        return
        */
        
        
        
    }
    
    updateDisplay() {
        this.keyboardOutPutTextElement.innerText = this.keyboardOutput
    }
    
}


const letterButtons = document.querySelectorAll('[data-letter]')
console.log(letterButtons)
const keyboardOutPutTextElement = document.querySelector('[data-keyboard-output]')

const keyboard = new Keyboard(keyboardOutPutTextElement)

letterButtons.forEach(button => {
    button.addEventListener('click', () => {
        keyboard.appendLetter(button.innerText)
        keyboard.updateDisplay()
    })
})