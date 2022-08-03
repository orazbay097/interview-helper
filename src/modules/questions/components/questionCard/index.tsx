import { Card, CardContent, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Question } from "../../types";

function QuestionCard(props: { question: Question }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{props.question.text}</Typography>

                <Divider sx={{ my: 1 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{props.question.category}</span>

                    <span>{props.question.difficulty}</span>
                </Box>
            </CardContent>
        </Card>
    );
}

export default QuestionCard;