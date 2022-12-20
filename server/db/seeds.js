use climate_quiz;

db.dropDatabase();

db.questions.insertMany([
  
  // General
  {
    "section": "General",
    "question_type": "Multiple Choice",	
    "question": "What is climate change?",
    "correct_answer": "Climate change is a natural phenomenon whereby temperatures and weather patterns change over time. Today, human activities are the primary driver for accelerating this process",
    "incorrect_answers": [
      "Hot air being trapped in the atmosphere", 
      "A phenomenon that occurs every decade where global temperatures always rise then returns to normal", 
      "A myth"
    ],
    "more_info": [
      "Climate change can be a natural process where temperature, rainfall, wind and other elements vary over decades or more.",
      "But today we are experiencing rapid warming from human activities, primarily due to burning fossil fuels that generate greenhouse gas emissions.",
      "Increasing greenhouse gas emissions from human activity act like a blanket wrapped around the earth, trapping the sun’s heat and raising temperatures."
    ],
    "more_info_link": "https://www.un.org/sites/un2.un.org/files/fastfacts-what-is-climate-change.pdf"
  },
  {
    "section": "General",
    "question_type": "Multiple Choice",	
    "question": "By how much has the animal population decreased in the last 50 years?",
    "correct_answer": "69%",
    "incorrect_answers": [
      "20%", 
      "35%", 
      "40%"
    ],
    "more_info": [
      "The Living Planet Report 2022 is WWF’s most comprehensive study to date of trends in global biodiversity and the health of our planet.",
      "he latest flagship publication reveals global wildlife populations have plummeted by 69% on average since 1970.",
      "The staggering rate of decline is a severe warning that the rich biodiversity that sustains all life on our planet is in crisis, putting every species at risk – including us. "
    ],
    "more_info_link": "https://livingplanet.panda.org/en-GB/"
  },
  {
    "section": "General",
    "question_type": "Images",	
    "question": "Which food generates the most greenhouse gas emissions per 1000kcal?",
    "correct_answer": "https://www.foodqualityandsafety.com/wp-content/uploads/2020/09/506466143-1024x683.jpg", 
    "incorrect_answers": [
      "https://robbreport.com/wp-content/uploads/2022/08/Steak.jpg?w=1000%"
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
      "High radition areas due to nuclear waste", 
      "Areas of low reception phone reception", 
      "Areas containing very high oxygen levels, and are too high to support wildlife"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://oceanservice.noaa.gov/facts/deadzone.html"
  },
  {
    "section": "Water",
    "question_type": "Bool",	
    "question": "Climate change affects sea turtles to be born male or female, because most turtles are subject to temperature-dependent sex determination",
    "correct_answer": "Fact",
    "incorrect_answers": [
      "Fiction" 
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://oceanservice.noaa.gov/facts/temperature-dependent.html#:~:text=Research%20shows%20that%20if%20a,the%20hatchlings%20will%20be%20female."
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
  {
    "section": "Land",
    "question_type": "Multiple Choice",	
    "question": "Which country has the highest ratio of global municipal waste to population?",
    "correct_answer": "US",
    "incorrect_answers": [
      "China",
      "Brazil",
      "India"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://www.theguardian.com/us-news/2019/jul/02/us-plastic-waste-recycling"
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
    "question": "WWhy projected increase in space travel may damage ozone layer?",
    "correct_answer": "Aerosol emissions from spaceflight activities",
    "incorrect_answers": [
      "Heat produced by the Space Shuttle combustible", 
      "It won't affect the ozone layer", 
      "The Space Shuttle passing through the Ozone layer"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://research.noaa.gov/article/ArtMID/587/ArticleID/2884/Projected-increase-in-space-travel-may-damage-ozone-layer"
  },
  {
    "section": "Space",
    "question_type": "Multiple Choice",	
    "question": "Which kind of fuel does the NASA uses as Rocket Fuel?",
    "correct_answer": "Hydrogen",
    "incorrect_answers": [
      "Coconut Oil", 
      "Petrol", 
      "Diesel"
    ],
    "more_info": [
      "this is paragraph 1",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://www.nasa.gov/content/space-applications-of-hydrogen-and-fuel-cells"
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