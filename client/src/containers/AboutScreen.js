import React from 'react';
import styled from 'styled-components';
import NavItem from '../components/NavItem';

import Title from '../components/Title';


const AboutScreen = () => {
    
    const resourcesText = [
      `Climate change is accelerating faster than previously thought, and it's already having devastating effects.`,

      `There's no safe level of global warming. We've already warmed by 1.1 degrees and we're at risk of triggering feedback loops. Every tenth of a degree of global warming is dangerous and puts the world at greater risk.`,

      `To give ourselves the best chance, we need to stop, and reverse global warming.`,

      `The lion's share of emissions reductions must occur this decade.`,

      `Scotland and the UK need to cut our greenhouse gas emissions by 75% by 2030, race to net-zero emissions by 2045, and then keep drawing carbon out of our atmosphere.`,

      `We need action from all levels of society, but without government-level action this will be incredibly hard, if not impossible.`,

      `Government will act on their plan when we create the social climate that allows and demands action.`,

      `We can each help create this social climate by:`,

      `- Engaging our MSPs and MPs,`,
      `- Standing up to private interests,`,
      `- And having conversations with people who are concerned, but not yet committed, to bring them on board.`,

      `If you're ready to get started, there are some great tips for having effective conversations with people about climate change in C4C Australia's Climate Conversation Guide (https://drive.google.com/file/d/1Tt6-ueh8vdS0Jf3WkGK4Jr3OEduGANxA/view) - an excellent resource!`,

      `Other steps you can take to make a difference:`,
      `Joining an MSP/MP engagement group: This support group is an excellent way to get started in an easy way and friendly setting. They are currently run monthly online but if you'd like to get one started locally, we can help you with that. Please email c4c@scottishcommunitiescan.org.uk to join the next session.`,

      `Contacting your MSP / MP: The best thing people can do to get focused on an issue is to make a lot of ‘noise' - let's get your MSP/MP working for you!`,

      `Here is an excellent website where you will find contact details for your local MSP, MP and councillors: https://www.writetothem.com/ .`,
      
      `Further resources include:`,

      `Scottish Parliament guidelines on Issues your MSP can help you with: https://www.parliament.scot/msps/about-msps/what-issues-an-msp-can-help-you-with `,

      `Friends of the Earth's guide on How to lobby your MSP: https://foe.scot/get-involved/people-power-network/how-to-lobby-your-msps/ `,

      `RSPB's guide on Contacting your MSP to help nature and the climate: https://community.rspb.org.uk/ourwork/b/scotland/posts/getting-in-touch-with-your-msps-to-help-nature-and-the-climate `,

      `Stop Climate Chaos Scotland's guide on Meeting with your MSP: https://www.stopclimatechaos.scot/wp-content/uploads/2018/09/Meeting-your-MSP-Guide-web.pdf `,

      `The Climate Coalition's guide on Writing to your MP about Climate Change: https://www.theclimatecoalition.org/write-to-your-mp `,

      `Campaign against Climate Change tips on Influencing your MP on Climate Change: https://www.campaigncc.org/lobbying_mps `,

      `Hubbub's template for Writing to your MP: https://www.hubbub.org.uk/writing-to-your-mp `,

      `Here are 2 powerful messages you can take to your local representatives (source: https://www.bbc.co.uk/news/uk-scotland-57482228):`,

      `To your MSP: The Scottish Government must tighten up plans to meet 2030 targets with a focus on decarbonising homes, transport and industry. Chris Sark says ‘we haven't seen those kinds of policies'.`,

      `And to your MP: The Scottish and the UK government need to cooperate on carbon capture and storage and the UK government needs to stop supporting new oil fields.`,

      `Joining a local group: There are many voluntary groups working to tackle climate change in your area offering activities such as community gardens, climate cafes, training, networking opportunities, film screenings, bike activities, volunteering and more….perhaps you could even start a MSP or MP engagement group with their support.`, 
      `Here is a map of some local community groups: https://sccan.scot/our-members/ .`,

      `To become a member of SCCAN (a network of community groups and individuals all across Scotland tackling climate change): https://www.scottishcommunitiescan.org.uk/join-us/. Membership is free!`
    ]

    const paragraphs = resourcesText.map((paragraph) => {
      return <p>{paragraph}</p>
    });
    
    return (


        <Container>
            <Box>
                <Navigation>
                  <NavItem> <Link href='/'>Home</Link></NavItem>
                </Navigation>
                <Title>About</Title>
                <Section>
                    <p>To find out more about:</p>
                    <ul>
                        General:
                        <li>
                            <Link target="_blank" href='https://www.weforum.org/agenda/2022/11/cop27-10-key-climate-facts/'>10 key climate facts</Link>
                        </li>
                        <li>
                        <Link target="_blank" href='https://www.un.org/en/climatechange/climate-fast-facts'>UN climate fast facts</Link>
                        </li>
                        <li>
                        <Link target="_blank" href='https://www.globalcitizen.org/en/content/shocking-facts-david-attenborough-netflix-film/'>Climate facts from David Attenborough</Link>
                        </li>
                    </ul>
                    <ul>
                        Land:
                        <li>
                            <Link target="_blank" href='https://education.nationalgeographic.org/resource/pollution'>National Geographic pollution facts</Link>
                        </li>
                        <li>
                        <Link target="_blank" href='https://www.weforum.org/agenda/2022/01/plastic-pollution-climate-change-solution/'>Plastic pollution</Link>
                        </li>
                        <li>
                        <Link target="_blank" href='https://eartheclipse.com/environment/types-solutions-land-pollution.html'>Solutions for land pollution</Link>
                        </li>
                    </ul>
                    <ul>
                        Air:
                        <li>
                            <Link target="_blank" href='https://www.u-earth.eu/post/world-most-least-polluted-countries'>Most and least polluted countries</Link>
                        </li>
                        <li>
                        <Link target="_blank" href='https://www.unep.org/news-and-stories/story/how-air-quality-measured'>Air quality - How is it measured?</Link>
                        </li>
                        <li>
                        <Link target="_blank" href='https://education.nationalgeographic.org/resource/air-pollution'>National Geographic on air pollution</Link>
                        </li>
                    </ul>
                    <ul>
                        Space:
                        <li>
                           <Link target="_blank" href="https://www.nhm.ac.uk/discover/what-is-space-junk-and-why-is-it-a-problem.html">Space Junk</Link>
                        </li>
                        <li>
                           <Link target="_blank" href="https://research.noaa.gov/article/ArtMID/587/ArticleID/2884/Projected-increase-in-space-travel-may-damage-ozone-layer">Space Travel and the ozone layer</Link>
                        </li>
                        <li>
                           <Link target="_blank" href="https://spaceplace.nasa.gov/spacecraft-graveyard/en/">Satellites</Link></li>
                    </ul> 
                    </Section>
                    <p>{paragraphs}</p>
            </Box>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 1rem;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.8);
  width: 85%;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: right;
  padding: 1rem;
`

const Link = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
      font-weight: bold;
      cursor: pointer;
  }
`

export default AboutScreen;