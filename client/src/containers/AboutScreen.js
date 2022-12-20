import React from 'react';
import styled from 'styled-components';


const About = () => {
    
    const resourcesText = `Climate change is accelerating faster than previously thought, and it’s already having devastating effects.
    There’s no safe level of global warming. We’ve already warmed by 1.1 degrees and we’re at risk of triggering feedback loops. Every tenth of a degree of global warming is dangerous and puts the world at greater risk.
    To give ourselves the best chance, we need to stop, and reverse global warming.
    The lion’s share of emissions reductions must occur this decade.
    Scotland and the UK need to cut our greenhouse gas emissions by 75% by 2030, race to net-zero emissions by 2045, and then keep drawing carbon out of our atmosphere.
    We need action from all levels of society, but without government-level action this will be incredibly hard, if not impossible.
    Government will act on their plan when we create the social climate that allows and demands action.
    We can each help create this social climate by:
    Engaging our MSPs and MPs,
    Standing up to private interests,
    And having conversations with people who are concerned, but not yet committed, to bring them on board.
    If you’re ready to get started, there are some great tips for having effective conversations with people about climate change in C4C Australia’s Climate Conversation Guide - an excellent resource!
    Hosting a Climate Conversation: Thank you for signing up to host your own Climate Conversation. You are a leader! By reaching out to the people around you and letting them know that climate change is important to you, you’re breaking a dangerous silence, helping bring about social change and building the climate movement - and your actions will inspire others to step up too. I’ll send a separate email confirming this shortly.
    Joining an MSP/MP engagement group: Thank you for your interest! This support group is an excellent way to get started in an easy way and friendly setting. They are currently run monthly online but if you’d like to get one started locally, we can help you with that. Please email c4c@scottishcommunitiescan.org.uk to join the next session.
    Contacting your MSP / MP: Thank you for pledging to contact your local MSP/MP. The best thing people can do to get focused on an issue is to make a lot of ‘noise’ - let’s get your MSP/MP working for you!
    Here is an excellent website where you will find contact details for your local MSP, MP and councillors.
    Further resources include:
    Scottish Parliament guidelines on Issues your MSP can help you with
    Friends of the Earth’s guide on How to lobby your MSP
    RSPB’s guide on Contacting your MSP to help nature and the climate
    Stop Climate Chaos Scotland’s guide on Meeting with your MSP
    The Climate Coalition’s guide on Writing to your MP about Climate Change
    Campaign against Climate Change tips on Influencing your MP on Climate Change
    Hubbub’s template for Writing to your MP
    Here are 2 powerful messages you can take to your local representatives (source):
    To your MSP: The Scottish Government must tighten up plans to meet 2030 targets with a focus on decarbonising homes, transport and industry. Chris Sark says ‘we haven’t seen those kinds of policies’.
    And to your MP: The Scottish and the UK government need to cooperate on carbon capture and storage and the UK government needs to stop supporting new oil fields.
    If you are interested in hosting an MSP / MP Engagement Group, please email c4c@scottishcommunitiescan.org.au. We will support you in getting started. An MSP Engagement Group provides an easy, effective and fun way to take democratic action while being supported by others. You can also check out C4C Australia's resources here.
    Joining a local group: Thank you for expressing an interest in joining a local community climate action group. There are many voluntary groups working to tackle climate change in your area offering activities such as community gardens, climate cafes, training, networking opportunities, film screenings, bike activities, volunteering and more….perhaps you could even start a MSP or MP engagement group with their support. Here is a map of some local community groups.
    Monthly newsletter: I’ve signed you up to our mailing list - you should now receive SCCAN’s monthly newsletter, which will keep you up to date with all the latest community climate action news, events, consultations and all that SCCAN is doing!
    You can follow us on social media: Facebook, Twitter, Instagram, LinkedIn and Youtube. You will find relevant articles, consultations, events and ideas.
    In case you didn’t get around to it at the Conversation, here’s the link to become a SCCAN member: https://www.scottishcommunitiescan.org.uk/join-us/. We’re a network of community groups and individuals all across Scotland tackling climate change. Membership is free.`
    
    
    return (
        <Container>
            <h2>About</h2>
            <section>
                <p>To find out more about:</p>
                <ul>
                    General:
                    <li>
                        <a href='https://www.weforum.org/agenda/2022/11/cop27-10-key-climate-facts/'>10 key climate facts</a>
                    </li>
                    <li>
                    <a href='https://www.un.org/en/climatechange/climate-fast-facts'>UN climate fast facts</a>
                    </li>
                    <li>
                    <a href='https://www.globalcitizen.org/en/content/shocking-facts-david-attenborough-netflix-film/'>Climate facts from David Attenborough</a>
                    </li>
                </ul>
                <ul>
                    Land:
                    <li>
                        <a href='https://education.nationalgeographic.org/resource/pollution'>National Geographic pollution facts</a>
                    </li>
                    <li>
                    <a href='https://www.wastecare.co.uk/9-shocking-statistics-about-waste/'>Statistics on waste</a>
                    </li>
                    <li>
                    <a href='https://eartheclipse.com/environment/types-solutions-land-pollution.html'>Solutions for land pollution</a>
                    </li>
                </ul>
                <ul>
                    Air:
                    <li>
                        <a href='https://www.u-earth.eu/post/world-most-least-polluted-countries'>Most and least polluted countries</a>
                    </li>
                    <li>
                    <a href='https://www.unep.org/news-and-stories/story/how-air-quality-measured'>Air quality - How is it measured?</a>
                    </li>
                    <li>
                    <a href='https://education.nationalgeographic.org/resource/air-pollution'>National Geographic on air pollution</a>
                    </li>
                </ul>
                <ul>
                    Space:
                    <li>
                       <a href="https://www.nhm.ac.uk/discover/what-is-space-junk-and-why-is-it-a-problem.html">Space Junk</a>
                    </li>
                    <li>
                       <a href="https://research.noaa.gov/article/ArtMID/587/ArticleID/2884/Projected-increase-in-space-travel-may-damage-ozone-layer">Space Travel and the ozone layer</a>
                    </li>
                    <li>
                       <a href="https://www.nasa.gov/content/space-applications-of-hydrogen-and-fuel-cells">Fuel for space travel</a></li>
                </ul> 


            </section>
            <p>{resourcesText}</p>
        </Container>
    );
}

const Container = styled.div`
`

export default About;