import React from 'react';
import EventItem from './EventItem';
import { useParams } from 'react-router-dom';

const events =  [
    {
      id: 1,
      imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/stock-photo-crowd-partying-stage-lights-live-concert-summer-music-festival-2297236461_yqakxn.jpg",
      title: "PERSONAL ENHANCEMENT PROGRAMMES (PEP)",
      description: "Today's youth face a number of issues like conflict and rejection in significant relationships, alcoholism and addictions, suicidal tendencies, the negative influence of social media, the thirst for acceptance, and so on. Some factors that contribute to these issues are situational causes, poverty, cultural stress, lack of religious or spiritual connections, and violence. Personal Enhancement Programmes are tailor-made orientations, courses, seminars, or workshops to help the youth be confident in facing the complexities of life. These programmes are offered to the youth of any institution or organized group on invitation to EDUCATE AND EMPOWER them to overcome challenges and difficulties. Take a look at the impact of PEP till 2018.",
      stats: [
        { id: 1, count:21000 , description: "students from 70 institutions have participated." },
        { id: 2, count: 1050, description: "teachers of 21 institutions have benefitted." },
      ],
      imageList: [
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
        { id: 2, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/little-children-trick-treating-halloween_53876-49127_ib9hgk.jpg" },
        { id: 3, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/portrait-male-friends-sharing-affectionate-moment-friendship_23-2151310371_zany6g.avif" },
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
      ],
      testimonials: [
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Venkatesh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417_sdjaog.avif' },
        { quote: '"This experience helped me to be more grateful to God for what I have. I am working on self-improvement so that I can complain less and thank more."', participant: 'Kavya', role: 'House wife', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176532-6755_g1mvky.jpg' },
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Suresh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/young-bearded-man-with-striped-shirt_273609-5677_p1jbc2.avif' },
      ],
    },
    {
      id: 2,
      imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/stock-photo-crowd-partying-stage-lights-live-concert-summer-music-festival-2297236461_yqakxn.jpg",
      title: "MEN & WOMEN AIMING AT GREATER INITIATIVES FOR CHANGE (MAGIC)",
      description: "MAGIC Youth is the student youth wing of YES-J set up and run voluntarily by students in formal educational institutions under the guidance of the college management and staff coordinators. The basic concept of MAGIC revolves around developing social and life skills and encouraging faith formation and leadership among the youth. Since its inception, MAGIC Youth has conducted a number of workshops and training sessions that focus on the holistic development of young people. These events witness high levels of participation and are immensely successful. YES-J strives hard to find placements too. Take a look at the impact of MAGIC till 2018.",
      stats: [
        { id: 1, count: 7, description: "Magic youth units set up in Vijayawada and Secunderabad." },
        { id: 2, count: 250, description: "students registered for the programme so far." },
        { id: 3, count: 60000, description: "rupees raised for Kerala Flood Victims by volunteers." }
      ],
      imageList: [
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
        { id: 2, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/little-children-trick-treating-halloween_53876-49127_ib9hgk.jpg" },
        { id: 3, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/portrait-male-friends-sharing-affectionate-moment-friendship_23-2151310371_zany6g.avif" },
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
      ],
      testimonials: [
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Venkatesh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417_sdjaog.avif' },
        { quote: '"This experience helped me to be more grateful to God for what I have. I am working on self-improvement so that I can complain less and thank more."', participant: 'Kavya', role: 'House wife', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176532-6755_g1mvky.jpg' },
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Suresh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/young-bearded-man-with-striped-shirt_273609-5677_p1jbc2.avif' },
      ],
    },
    {
      id: 3,
      imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/stock-photo-crowd-partying-stage-lights-live-concert-summer-music-festival-2297236461_yqakxn.jpg",
      title: "MULTI SKILL TRAINING (MuST)",
      description: "MuST programmes are conducted by YES-J for unorganized sectoral students. Multi Skill Training camps are mainly a fun way of learning for the students where different methods are adopted to improve their vocational skills & develop their personality. Most of the camps are residential programmes and offer free food and lodging to the participants. Through the training camps, underprivileged young people are encouraged to learn vocational skills like repairing electronic appliances, professional welding, driving, tailoring etc. which enhances the participants' capacity to undertake self-employment and also increases their access to employment with a stable salary. Besides acquiring a skill, the participants of MuST programmes are also helped to build their confidence, innate talents, skills and qualities through faith formation, motivational talks, games and other extracurricular activities. On the final day of training, the participants receive skill training certificates. Take a look at the impact of MuST till 2018.",
      stats: [
        { id: 1, count: 143, description: "young boys and girls have undergone one-month to three-months long training since 2016." },
        { id: 2, count: 60, description: "deserving youth will complete3-month Driving and Mechanical Training for the year 2018-19." },
        { id: 3, count: 12, description: "Sessions" }
      ],
      imageList: [
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
        { id: 2, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/little-children-trick-treating-halloween_53876-49127_ib9hgk.jpg" },
        { id: 3, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/portrait-male-friends-sharing-affectionate-moment-friendship_23-2151310371_zany6g.avif" },
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
      ],
      testimonials: [
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Venkatesh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417_sdjaog.avif' },
        { quote: '"This experience helped me to be more grateful to God for what I have. I am working on self-improvement so that I can complain less and thank more."', participant: 'Kavya', role: 'House wife', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176532-6755_g1mvky.jpg' },
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Suresh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/young-bearded-man-with-striped-shirt_273609-5677_p1jbc2.avif' },
      ],
    },
    {
      id: 4,
      imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/stock-photo-crowd-partying-stage-lights-live-concert-summer-music-festival-2297236461_yqakxn.jpg",
      title: "SUMMAR SHAPES (SS)",
      description: "Every summer, YES-J conducts three to four weeks of Free English Coaching Classes for the poor and disadvantaged youth to enhance their English language skills. It also aims at developing their soft skills. Hundreds of young boys and girls have participated in Summer Shapes till date. All the participants are provided with free accommodation and food. Summer Shapes programmes focus on English reading, speaking, writing and listening skills. The programmes help unblock psychological fears about the English language and eliminate stage fear. They also encourage participants to inculcate the culture of hard work and discipline into their daily routine.",
      stats: [
        { id: 1, count: 320, description: "rural disadvantaged youth benefited since 2016." },
        { id: 2, count: 35, description: "Speakers" },
        { id: 3, count: 18, description: "Sessions" }
      ],
      imageList: [
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
        { id: 2, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/little-children-trick-treating-halloween_53876-49127_ib9hgk.jpg" },
        { id: 3, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/portrait-male-friends-sharing-affectionate-moment-friendship_23-2151310371_zany6g.avif" },
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
      ],
      testimonials: [
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Venkatesh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417_sdjaog.avif' },
        { quote: '"This experience helped me to be more grateful to God for what I have. I am working on self-improvement so that I can complain less and thank more."', participant: 'Kavya', role: 'House wife', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176532-6755_g1mvky.jpg' },
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Suresh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/young-bearded-man-with-striped-shirt_273609-5677_p1jbc2.avif' },
      ],
    },
    {
      id: 5,
      imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/stock-photo-crowd-partying-stage-lights-live-concert-summer-music-festival-2297236461_yqakxn.jpg",
      title: "YES-J'S YOUTH FESTIVAL (Yuvotsavaalu)",
      description: "Yuvotsavaalu is an annual/bi-annual youth festival aimed at bringing the youth to express, experience and enrich their lives and march towards building up a just society. During the festival days, the youth are challenged to reprogram their narrow minded perspectives towards life and inculcate the spirit of openness and oneness via inspiring talks, exposure programmes, group activities and prayerful reflections.",
      stats: [
        { id: 1, count: 500, description: "youth from all over Andhra Pradesh attended the maiden Yuvotsavaalu programme." },
        { id: 2, count: 22, description: "Speakers" },
        { id: 3, count: 14, description: "Sessions" }
      ],
      imageList: [
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
        { id: 2, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/little-children-trick-treating-halloween_53876-49127_ib9hgk.jpg" },
        { id: 3, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/portrait-male-friends-sharing-affectionate-moment-friendship_23-2151310371_zany6g.avif" },
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
      ],
      testimonials: [
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Venkatesh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417_sdjaog.avif' },
        { quote: '"This experience helped me to be more grateful to God for what I have. I am working on self-improvement so that I can complain less and thank more."', participant: 'Kavya', role: 'House wife', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176532-6755_g1mvky.jpg' },
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Suresh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/young-bearded-man-with-striped-shirt_273609-5677_p1jbc2.avif' },
      ],
    },
    {
      id: 6,
      imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/stock-photo-crowd-partying-stage-lights-live-concert-summer-music-festival-2297236461_yqakxn.jpg",
      title: "VOLUNTARY IMMERSION PROGRAMME (VIP)",
      description: "As part of its mission to serve the youth, YES-J provides opportunities to individuals (18 years or older), from local cities and overseas, to volunteer in its mission work. The Voluntary Immersion Programme provides placements to the volunteers in communities of all sizes, from rural villages to big cities. The volunteers usually stay with the local religious community and share their tasks. The accommodation facilities vary depending on location, but YES-J ensures that volunteers are safe wherever they stay and have access to basic amenities. However, it is important for volunteers to be prepared to adapt to basic living conditions. The immersion experiences are aimed towards a lasting impact, both on local communities and on individual volunteers. VIP enables volunteers to challenge themselves, experience another culture and develop an attitude of being GRATEFUL. Take a look at the impact of VIP till 2018.",
      stats: [
        { id: 1, count: 15, description: "University Students from Austria, UK, Italy, France, Germany have immersed themselves in the life of 4 villages." },
        { id: 2, count: 28, description: "Speakers" },
        { id: 3, count: 110, description: "Sessions" }
      ],
      imageList: [
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
        { id: 2, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/little-children-trick-treating-halloween_53876-49127_ib9hgk.jpg" },
        { id: 3, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/portrait-male-friends-sharing-affectionate-moment-friendship_23-2151310371_zany6g.avif" },
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
      ],
      testimonials: [
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Venkatesh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417_sdjaog.avif' },
        { quote: '"This experience helped me to be more grateful to God for what I have. I am working on self-improvement so that I can complain less and thank more."', participant: 'Kavya', role: 'House wife', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176532-6755_g1mvky.jpg' },
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Suresh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/young-bearded-man-with-striped-shirt_273609-5677_p1jbc2.avif' },
      ],
    },
    {
      id: 7,
      imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/stock-photo-crowd-partying-stage-lights-live-concert-summer-music-festival-2297236461_yqakxn.jpg",
      title: "SCHOLAR SUPPORT PROGRAMME (SSP)",
      description: "Through SSP, YES-J accompanies and financially supports the economically underprivileged yet intellectually bright students to pursue their desired educational courses with scholarships. Apart from financial assistance, we also provide career guidance and ensure that their accomplishments are publicized in the appropriate forums to brighten their career prospects. Take a look at the impact of SSP till 2018.",
      stats: [
        { id: 1, count: 130, description: "Participants" },
        { id: 2, count: 17, description: "students are being supported in 2018 to move forward with their career." },
        { id: 3, count: 20, description: "Sessions" }
      ],
      imageList: [
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
        { id: 2, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/little-children-trick-treating-halloween_53876-49127_ib9hgk.jpg" },
        { id: 3, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/portrait-male-friends-sharing-affectionate-moment-friendship_23-2151310371_zany6g.avif" },
        { id: 1, imageUrl: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721133859/medium-shot-people-celebrating-eid-al-fitr_23-2151205085_wirli7.jpg" },
      ],
      testimonials: [
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Venkatesh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417_sdjaog.avif' },
        { quote: '"This experience helped me to be more grateful to God for what I have. I am working on self-improvement so that I can complain less and thank more."', participant: 'Kavya', role: 'House wife', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176532-6755_g1mvky.jpg' },
        { quote: '"I am very excited to be a part of MAGIC Youth. It was a blessing to be a part of the Self-Motivation and Setting Up Goals workshop."', participant: 'Suresh', role: 'Student', avatar:'https://res.cloudinary.com/dwlbneeh4/image/upload/v1721135978/young-bearded-man-with-striped-shirt_273609-5677_p1jbc2.avif' },
      ],
    }
  ];
  

function EventDetails() {
    const { id } = useParams();
  const eventItemDetails = events.find(event => event.id === parseInt(id));

  if (!eventItemDetails) {
    return <div className="App">Event not found</div>;
  }

  return (
    <div>
      <EventItem eventItemDetails={eventItemDetails} key={eventItemDetails.id} />
    </div>
  );
}

export default EventDetails;
