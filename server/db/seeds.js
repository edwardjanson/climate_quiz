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
      "Animal-based foods are generally associated with the highest greenhouse gas emissions.",
      "Meat production often requires extensive grasslands, which is often created by cutting down trees, releasing carbon dioxide stored in forests.",
      "Shrimp farms often occupy coastal lands formerly covered in mangrove forests which absorb huge amounts of carbon. The large carbon footprint of shrimp or prawns is mainly due to the stored carbon that is released into the atmosphere when mangroves are cut down to create shrimp farms."
    ],
    "more_info_link": "https://www.un.org/en/climatechange/science/climate-issues/food"
  },

  // Water
  {
    "section": "Water",
    "question_type": "Multiple Choice",	
    "question": "Why are ice caps important?",
    "correct_answer": "All of those",
    "incorrect_answers": [
      "They reflect the heat from the sun back into space, acting as the planet's refrigerator", 
      "They prevent the release of large amounts of methane, a greenhouse gas that contributes to climate change", 
      "None of those"
    ],
    "more_info": [
      "Polar ice caps are melting as global warming causes climate change.",
      "this is paragraph 2",
      "this is paragraph 3"
    ],
    "more_info_link": "https://www.worldwildlife.org/pages/six-ways-loss-of-arctic-ice-impacts-everyone"
  },
  {
    "section": "Water",
    "question_type": "Multiple Choice",	
    "question": "According to a new study by UNESCO, some of the world's most iconic glaciers are set to disappear by the year:",
    "correct_answer": "2050",
    "incorrect_answers": [
      "2120", 
      "2100", 
      "2030"
    ],
    "more_info": [
      "A new study by UNESCO, in partnership with IUCN, shows that glaciers in a third of the 50 World Heritage sitest have been retreating at an accelerated rate since 2000 due to CO2 emissions.",
      "They are currently losing 58 billion tons of ice every year - equivalent to the combined annual water use of France and Spain - and are responsible for nearly 5% of observed global sea-level rise.",
      "Nevertheless it is still possible to save the glaciers in the remaining two thirds of sites if the rise in temperatures does not exceed 1.5°C compared to the pre-industrial period."
    ],
    "more_info_link": "https://www.unesco.org/en/articles/unesco-finds-some-iconic-world-heritage-glaciers-will-disappear-2050"
  },
  {
    "section": "Water",
    "question_type": "Bool",	
    "question": "Climate change affects the determination of the sex of sea turtles",
    "correct_answer": "Fact",
    "incorrect_answers": [
      "Fiction" 
    ],
    "more_info": [
      "The sex of most turtles, alligators, and crocodiles is determined after fertilization.",
      "The temperature of the developing eggs is what decides whether the offspring will be male or female.",
      "This is called temperature-dependent sex determination, or TSD."
    ],
    "more_info_link": "https://oceanservice.noaa.gov/facts/temperature-dependent.html#:~:text=Research%20shows%20that%20if%20a,the%20hatchlings%20will%20be%20female."
  },
  
  // Land
  {
    "section": "Land",
    "question_type": "Multiple Choice",	
    "question": "On average, how much waste was generated per EU inhabitant in 2020?",
    "correct_answer": "4.8 tonnes",
    "incorrect_answers": [
      "1 tonne", 
      "10 tonnes", 
      "33 tonnes"
    ],
    "more_info": [
      "Solid waste contributes directly to greenhouse gas emissions through the generation of methane from the anaerobic decay of waste in landfills, and the emission of nitrous oxide from our solid waste combustion facilities.",
      "Key to tackling the problem of plastic is establishing a circular economy.",
      "Plastic that cannot be eliminated from the system needs to be reusable, recyclable or compostable."
    ],
    "more_info_link": "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Waste_statistics"
  },
  {
    "section": "Land",
    "question_type": "Bool",	
    "question": "Just 16% of plastics are recycled - the rest goes to landfill for incineration, or is just dumped",
    "correct_answer": "TRUE",
    "incorrect_answers": [
      "False"
    ],
    "more_info": [
      "Much of the plastic that does not make it to the recycling plant ends up in our rivers and ocean.",
      "Not only is this a danger to the animals and plants whose habitats have become aquatic garbage patches, but it also poses a threat to the climate, as plastic releases greenhouse gases as it slowly breaks down.",
      "Sunlight and heat cause it to release methane and ethylene - and at increasing rate as the plastic breaks down into ever smaller pieces."
    ],
    "more_info_link": "https://www.weforum.org/agenda/2022/01/plastic-pollution-climate-change-solution/"
  },
  {
    "section": "Land",
    "question_type": "Multiple Choice",	
    "question": "What is the fastest-growing source of waste globally?",
    "correct_answer": "Electronic waste",
    "incorrect_answers": [
      "Plastic waste",
      "Food waste",
      "Packaging waste"
    ],
    "more_info": [
      "Most e-waste does not get disposed of properly and releases harmful pollutants into the environment.",
      "Globally, e-waste volumes grew to 53.6 million metric tons in 2019, an increase of 21% since 2014.",
      "Of the 6.92 million tons of e-waste discarded by Americans in 2019, only 15% was recycled."
    ],
    "more_info_link": "https://www.weforum.org/agenda/2022/06/recycling-global-statistics-facts-plastic-paper/"
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
      "Wind power sits at the heart of the energy transition for many countries.",
      "The race to build bigger, better wind turbines mirrors the efforts of global governments to increase their renewable power generation.",
      "China has the world’s largest onshore windfarm in Gansu Province, built out of the Gobi Desert."
    ],
    "more_info_link": "https://www.power-technology.com/features/wind-energy-by-country/"
  },
  {
    "section": "Air",
    "question_type": "Multiple Choice",	
    "question": "What is Black carbon?",
    "correct_answer": "All of those",
    "incorrect_answers": [
      "A poisonous chemical released by the incineration of plastic.", 
      "A pollutant with a global warming potential up to 5,000 times greater than carbon dioxide.", 
      "None of those"
    ],
    "more_info": [
      "Open burning of waste is common in many parts of the world and is a major source of air pollution.",
      "In 2019, the CIEL estimated that production and incineration of plastic would add 850 million metric tons of greenhouse gases to the atmosphere - equivalent to 189 coal-fired power plants.",
      "By 2050 this could rise to 2.8 gigatons of carbon dioxide per year - or 615 coal plants’ worth."
    ],
    "more_info_link": "https://www.weforum.org/agenda/2022/01/plastic-pollution-climate-change-solution/"
  },
  {
    "section": "Air",
    "question_type": "Multiple Choice",	
    "question": "How is air quality measured?",
    "correct_answer": "AQI (Air Quality Index) scale",
    "incorrect_answers": [
      "Sky color", 
      "Smell of air", 
      "Ozone level"
    ],
    "more_info": [
      "The greater the density of pollutants in the air, the higher the Air Quality Index, a scale that runs from zero to 500.",
      "Air quality across the globe continues to deteriorate due to increasing emissions, threatening human health and contributing to climate change, biodiversity loss, and pollution and waste.",
      "According to the World Health Organization, 99 per cent of the global population breathes unclean air, and air pollution causes 7 million premature deaths a year."
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
      "Space junk, or space debris, is any piece of machinery or debris left by humans in space.",
      "It can refer to big objects such as dead satellites that have failed or been left in orbit at the end of their mission.",
      "It can also refer to smaller things, like bits of debris or paint flecks that have fallen off a rocket."
    ],
    "more_info_link": "https://www.nhm.ac.uk/discover/what-is-space-junk-and-why-is-it-a-problem.html"
  },
  {
    "section": "Space",
    "question_type": "Multiple Choice",	
    "question": "Why the projected increase in space travel may damage the ozone layer?",
    "correct_answer": "Because of aerosol emissions from spaceflight activities",
    "incorrect_answers": [
      "Because of the heat produced by the Space Shuttle combustible", 
      "It won't affect the ozone layer", 
      "Because of the Space Shuttle passing through the Ozone layer"
    ],
    "more_info": [
      "Kerosene-burning rocket engines widely used by the global launch industry emit exhaust containing black carbon, directly into the stratosphere.",
      "According to new NOAA research published in the Journal of Geophysical Research Atmospheres, a 10-fold increase in hydrocarbon fueled launches would damage the ozone layer, and change atmospheric circulation patterns.",
      "Rockets are the only direct source of human-produced aerosol pollution above the troposphere, the lowest region of the atmosphere, which extends to a height of about 5 to 10 miles above the Earth’s surface."
    ],
    "more_info_link": "https://research.noaa.gov/article/ArtMID/587/ArticleID/2884/Projected-increase-in-space-travel-may-damage-ozone-layer"
  },
  {
    "section": "Space",
    "question_type": "Multiple Choice",	
    "question": "Approximately how many satelites are in the earth's orbit?",
    "correct_answer": "5500",
    "incorrect_answers": [
      "500", 
      "1500", 
      "2000"
    ],
    "more_info": [
      "Assembled by experts at the Union of Concerned Scientists (UCS), the Satellite Database is a listing of the more than 5,465 operational satellites currently in orbit around Earth.",
      "The expert's intent in producing the database is to create a research tool for specialists and non-specialists alike by collecting open-source information on operational satellites and presenting it in a format that can be easily manipulated for research and analysis.",
      "The US have the most satellites."
    ],
    "more_info_link": "https://www.ucsusa.org/resources/satellite-database"
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