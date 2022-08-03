import { Routes, Route, Navigate } from "react-router-dom";
import QuestionsList from './views/questionsList';
import QuestionsCreate from './views/questionsCreate';

function Questions() {
    return (
            <Routes>
                <Route path="" element={<QuestionsList />} />

                <Route path="create" element={<QuestionsCreate />} />
                
                <Route path="*" element={<Navigate to="" replace />} />
            </Routes>
    );
}

export default Questions;
