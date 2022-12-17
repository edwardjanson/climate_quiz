use climate_quiz;

db.dropDatabase();

db.questions.insertMany([
  
  // General
  {
    "section": "General",
    "question_type": "Multiple Choice",	
    "question": "What is climate change?",
    "correct_answer": "rapid change in climate",
    "incorrect_answers": [
      "wrong_1", 
      "wrong_2", 
      "wrong_3"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "hyperlink"
  },
  {
    "section": "General",
    "question_type": "Multiple Choice",	
    "question": "By how much has the animal population decreased in the last 50 years?",
    "correct_answer": "70%",
    "incorrect_answers": [
      "20%", 
      "35%", 
      "40%"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://www.cbsnews.com/news/endangered-species-animal-population-decline-world-wildlife-fund-new-report/"
  },

  // Water
  {
    "section": "Water",
    "question_type": "Multiple Choice",	
    "question": "What is one of the roles of ice caps?",
    "correct_answer": "Reflect back the sun’s light.",
    "incorrect_answers": [
      "wrong_1", 
      "wrong_2", 
      "wrong_3"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://change.me"
  },
  {
    "section": "Water",
    "question_type": "Multiple Choice",	
    "question": "What are dead zones and how did they happen?",
    "correct_answer": "Areas where life cannot exist in the water. This can happen naturally but can also be caused by pollution.",
    "incorrect_answers": [
      "wrong_1", 
      "wrong_2", 
      "wrong_3"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://change.me"
  },
  
  // Land
  {
    "section": "Land",
    "question_type": "Multiple Choice",	
    "question": "On average, how much waste did one person generate across the EU-27?",
    "correct_answer": "5.2 tonnes",
    "incorrect_answers": [
      "1 tonne", 
      "17 tonnes", 
      "337 tonnes"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "hyperlink"
  },
  {
    "section": "Land",
    "question_type": "Bool",	
    "question": "The 3 R's to reducing land pollution are Reduce, Reuse, Recycle",
    "correct_answer": "TRUE",
    "incorrect_answers": [
      "False"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://eartheclipse.com/environment/types-solutions-land-pollution.html"
  },
  
  // Air
  {
    "section": "Air",
    "question_type": "Bool",	
    "question": "In 2021, China was the world leader in wind energy, with over one-quarter of the world’s wind power capacity",
    "correct_answer": "True",
    "incorrect_answers": [
      "False"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://www.power-technology.com/features/wind-energy-by-country/"
  },
  {
    "section": "Air",
    "question_type": "Multiple Choice",	
    "question": "Which country had the least air pollution in the world in 2021?",
    "correct_answer": "New Caledonia",
    "incorrect_answers": [
      "Finland", 
      "New Zealand", 
      "Estonia"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://www.u-earth.eu/post/world-most-least-polluted-countries"
  },
  {
    "section": "Air",
    "question_type": "Multiple Choice",	
    "question": "How is air quality measured?",
    "correct_answer": "AQI scale",
    "incorrect_answers": [
      "Sky color", 
      "Smell of air", 
      "Ozone level"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://www.unep.org/news-and-stories/story/how-air-quality-measured"
  },

  // Space
  {
    "section": "Space",
    "question_type": "Multiple Choice",	
    "question": "How many kilograms of material have been left by humans on the Moon",
    "correct_answer": "190,000",
    "incorrect_answers": [
      "10,000", 
      "90,000", 
      "145,000"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://www.nhm.ac.uk/discover/what-is-space-junk-and-why-is-it-a-problem.html"
  },
  {
    "section": "Space",
    "question_type": "Multiple Choice",	
    "question": "What is climate change?",
    "correct_answer": "rapid change in climate",
    "incorrect_answers": [
      "wrong_1", 
      "wrong_2", 
      "wrong_3"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "hyperlink"
  },
  {
    "section": "Space",
    "question_type": "Multiple Choice",	
    "question": "What is climate change?",
    "correct_answer": "rapid change in climate",
    "incorrect_answers": [
      "wrong_1", 
      "wrong_2", 
      "wrong_3"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "hyperlink"
  }
  
]);

db.users.insertMany([
  {
    "nickname": "Ali",
    "score": 30
  },
  {
    "nickname": "Effie",
    "score": 50
  },
  {
    "nickname": "Ed",
    "score": 20
  },
  {
    "nickname": "Luis",
    "score": 35
  }
  
]);