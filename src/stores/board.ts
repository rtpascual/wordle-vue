import { defineStore } from "pinia";

export enum letterCorrectness {
    NotInWord,
    InWord,
    InPosition
}

export const useBoardStore = defineStore({
    id: "board",
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

            // Add letter to current guess
            if (this.currentGuess < this.maxGuesses && this.guesses[this.currentGuess].length < this.wordLength) {
                this.guesses[this.currentGuess] += key;
            }
        },
    },
});