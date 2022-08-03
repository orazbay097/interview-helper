import { Grid, Typography } from '@mui/material';
import './style.css';
import { QUESTIONS } from '../../data';
import QuestionCard from '../../components/questionCard';
import { Container } from '@mui/system';


function QuestionsList() {
  return (
    <Container className="questions-list" sx={{mt: 1}}>
      <Typography variant='h4'>Questions List</Typography>

      <Grid container spacing={2} sx={{ p: 5 }}>
        {QUESTIONS.map((question, index) =>
          <Grid item key={index} xs={4}>
            <QuestionCard question={question} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default QuestionsList;
