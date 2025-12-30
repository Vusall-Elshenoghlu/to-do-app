import React from "react";
import {useFormResponsesStyles} from "./form-responses.style";

export interface IFormResponse {
    id: number;
    name: string;
    email: string;
    message: string;
    date: string;
}

const mockResponses: IFormResponse[] = [
    { id: 1, name: "Vusal Aliyev", email: "vusal@example.com", message: "Salam! Səhifəniz çox gözəl dizayn olunub.", date: "2025-12-13" },
    { id: 2, name: "Aysel Məmmədova", email: "aysel@example.com", message: "Form doldurma prosesi çox rahatdır, təşəkkürlər.", date: "2025-12-12" },
    { id: 3, name: "Elvin Həsənov", email: "elvin@example.com", message: "Sualım var idi, tez cavab aldım. Super!", date: "2025-12-11" },
];

const FormResponsesComponent: React.FC = () => {
    const classes = useFormResponsesStyles();

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Form Responses</h2>
            <div className={classes.cardsWrapper}>
                {mockResponses.map((response) => (
                    <div key={response.id} className={classes.card}>
                        <div className={classes.header}>
                            <span className={classes.name}>{response.name}</span>
                            <span className={classes.date}>{response.date}</span>
                        </div>
                        <p className={classes.email}>{response.email}</p>
                        <p className={classes.message}>{response.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormResponsesComponent;
