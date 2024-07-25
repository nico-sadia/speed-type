import { useEffect, useState } from "react";
import { Word } from "../typings/types";
import { render } from "react-dom";

interface TypeWindowProps {
    wordList: Word[];
    userInput: string[];
    currentWordIndex: number;
}

export default function TypeWindow({
    wordList,
    userInput,
    currentWordIndex,
}: TypeWindowProps) {
    useEffect(() => {}, [currentWordIndex]);
    useEffect(() => {}, [wordList.values()]);

    return (
        <div className="w-3/4 rounded-lg bg-stone-600 p-8 text-2xl text-stone-400">
            <h3>1/10</h3>
            <div>
                {wordList.map((word) => {
                    if (word.completed === true) {
                        return (
                            <span className="text-green-300">
                                {word.value + " "}
                            </span>
                        );
                    } else {
                        return <span>{word.value + " "}</span>;
                    }
                })}
            </div>
        </div>
    );
}
