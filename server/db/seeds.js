use climate_quiz;

db.dropDatabase();

db.questions.insertMany([
  {
    "section": "General",
    "question_type": "multiple-choice",	
    "question": "What is climate change?",
    "correct_answer": "rapid change in climate",
    "incorrect_answers": ["wrong_1", "wrong_2", "wrong_3"],
    "more_info": "text",
    "more_info_link": "hyperlink"
    }
]);

db.users.insertMany([
    {
    "nickname": "Ali",
    "score": 30}
]);