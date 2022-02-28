import { defineStore } from "pinia";

export enum letterCorrectness {
    NotInWord,
    InWord,
    InPosition
}

export type RootState = {
    guesses: string[];
    guessStates: letterCorrectness[][];
    currentGuess: number;
    solution: string;
    wordLength: number;
    maxGuesses: number;
    inPositionLetters: string[];
    inWordLetters: string[];
    notInWordLetters: string[];
}

export const useBoardStore = defineStore({
    id: "board-store",
    state: () => ({
        guesses: [''],
        guessStates: [],
        currentGuess: 0,
        solution: 'point',
        wordLength: 5,
        maxGuesses: 6,
        inPositionLetters: [],
        inWordLetters: [],
        notInWordLetters: [],
    } as unknown as RootState),

    getters: {
    },

    actions: {
        keyPressed(key: string) {
            // Enter is pressed
            if (key === "enter") {
                if (this.guesses[this.currentGuess].length === this.wordLength && this.guesses.length < this.maxGuesses) {
                    this.submitGuess(this.guesses[this.currentGuess]);
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
        
        submitGuess(guess?: string): letterCorrectness[] {
            const guessArray = guess ? guess.split('') : [''];
            const solutionArray = this.solution.split('');
            const result: letterCorrectness[] = [];
            
            if (!guess) {
                return result;
            }

            guessArray.forEach((letter, index) => {
                if (letter === solutionArray[index]) {
                    if (!this.inPositionLetters.includes(letter)) {
                        this.inPositionLetters.push(letter);
                    }
                    result.push(letterCorrectness.InPosition);
                }
                else if (solutionArray.includes(letter)) {
                    if (!this.inWordLetters.includes(letter)) {
                        this.inWordLetters.push(letter);
                    }
                    result.push(letterCorrectness.InWord);
                }
                else {
                    if (!this.notInWordLetters.includes(letter)) {
                        this.notInWordLetters.push(letter);
                    }
                    result.push(letterCorrectness.NotInWord);
                }
            });
            
            this.guessStates.push(result);
            return result;
        }
    },
});