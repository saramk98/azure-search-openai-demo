import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Do I run a  Pre-Flight Inspections for a F-16?",
        value: "Do I run a  Pre-Flight Inspections for a F-16?"
    },
    { text: "What is my maximum coverage period?", value: "What is my maximum coverage period?" },
    { text: "How do I file a claim?", value: "How do I file a claim?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
