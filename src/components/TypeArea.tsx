import { wordPool } from "../shared/constants";
import { Word } from "../typings/types";
import TypeWindow from "./TypeWindow";
import TextInput from "./ui/TextInput";
import { useState, useEffect } from "react";

export default function TypeArea() {
    const [wordList, setWordList] = useState<Word[]>([]);
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
    const [userInput, setUserInput] = useState<string[]>([]);

    useEffect(() => {
        const randomWordList: Word[] = [];
        for (let i = 0; i < 10; i++) {
            randomWordList.push({
                value: wordPool[Math.round(Math.random() * wordPool.length)],
                completed: false,
            });
        }
        setWordList(randomWordList);
    }, []);

    useEffect(() => {
        console.log(
            userInput[currentWordIndex] +
                "==" +
                wordList[currentWordIndex]?.value,
        );

        if (
            userInput[currentWordIndex] !== undefined &&
            wordList[currentWordIndex]?.value === userInput[currentWordIndex]
        ) {
            console.log("YESSIR");
            wordList[currentWordIndex].completed = true;
        } else {
            console.log("HELL NAH");
        }

        setCurrentWordIndex((currentWordIndex) => currentWordIndex + 1);
    }, [userInput]);

    const handleUserInput = () => {
        var textInput = document.getElementById(
            "type-area-text-input",
        ) as HTMLInputElement;

        if (textInput.value.endsWith(" ")) {
            setUserInput([
                ...userInput,
                textInput?.value.slice(0, textInput?.value.length - 1),
            ]);
            textInput.value = "";
        }

        console.log("CURRENT WORD: " + currentWordIndex);
    };

    return (
        <div className="flex w-screen flex-col items-center justify-center gap-8">
            <TypeWindow
                wordList={wordList}
                userInput={userInput}
                currentWordIndex={currentWordIndex}
            ></TypeWindow>
            <TextInput
                onChange={() => handleUserInput()}
                id="type-area-text-input"
                placeholder=""
                className="w-2/4 rounded-lg border-none bg-stone-600 p-2 text-slate-400"
            ></TextInput>
        </div>
    );
}
