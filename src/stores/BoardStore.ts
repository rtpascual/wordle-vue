import { defineStore } from "pinia";

export enum letterCorrectness {
    NotInWord,
    InWord,
    InPosition
}

export const useBoardStore = defineStore({
    id: "board-store",
    state: () => ({
        guesses: [''],
        currentGuess: 0,
        solution: 'point',
        wordLength: 5,
        maxGuesses: 6,
    }),

    getters: {
    },

    actions: {
        keyPressed(key: string) {
            // Enter is pressed
            if (key === "enter") {
                if (this.guesses[this.currentGuess].length === this.wordLength && this.guesses.length < this.maxGuesses) {
                    // TODO: add logic to check if guess matches solution
                    this.guesses.push('');
                    this.currentGuess++;
                }
                return;
            }

            // Backspace is pressed
            if (key === "backspace") {
                if (this.guesses[this.currentGuess].length > 0) {
                    this.guesses[this.currentGuess] = this.guesses[this.currentGuess].slice(0, -1);
                }
                return;
            }

            // Letter is pressed, add letter to current guess
            if (key.length === 1 &&
                key.charCodeAt(0) >= 97 &&
                key.charCodeAt(0) <= 122 &&
                this.currentGuess < this.maxGuesses &&
                this.guesses[this.currentGuess].length < this.wordLength) {
                    this.guesses[this.currentGuess] += key;
            }
        },

        submitGuess(guess: string, solution: string): letterCorrectness[] {
            const guessArray = guess.split('');
            const solutionArray = guess.split('');
            const result: letterCorrectness[] = [];

            guessArray.forEach((letter, index) => {
                if (letter === solutionArray[index]) {
                    result.push(letterCorrectness.InPosition)
                }
                else if (solutionArray.includes(letter)) {
                    result.push(letterCorrectness.InWord)
                }
                else {
                    result.push(letterCorrectness.NotInWord)
                }
            })

            return result;
        }
    },
});