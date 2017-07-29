import moment from 'moment';

export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  let error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function parseJSON(response) {
  return response.json();
}

export function formatDate(input) {
  if(input)
    return moment(input.substring(0, 10)).format('LL');
}

export function sortByDate(list) {
  return list.sort((a, b) => {
    return b.date > a.date;
  });
}

export function scrollToTop(scrollDuration) {
  let scrollStep = - window.scrollY / (scrollDuration / 15),
    scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      }
      else clearInterval(scrollInterval);
    }, 15);
}

export function wordCount(text) {
  let wordCount;

  const regex = /\s+/gi;
  wordCount = text.replace(regex, ' ').split(' ').length;

  if (text === '') {
    wordCount = 0;
  }

  return wordCount;
}

export const description = {
  personality: {
    title: 'Personality',
    description: 'The <strong>Big Five</strong> personality traits, also known as the five factor model (FFM), is a model based on common language descriptors of personality. When factor analysis (a statistical technique) is applied to personality survey data, some words used to describe aspects of personality are often applied to the same person.',
    Agreeableness: "<strong>Higher</strong>: Value getting along with others. They have a more optimistic view of human nature.<br /><br /><strong>Lower</strong>: Value self interests over others. They are more skeptical of others' motives.",
    Conscientiousness: '<strong>Higher</strong>: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.<br /><br /><strong>Lower</strong>: More likely to prefer the spontaneous over the planned.',
    Extraversion: '<strong>Higher</strong>: More energetic and pronounced engagement with the external world. Likes high group visibility, talking, and asserting themselves.<br /><br /><strong>Lower</strong>: Needs less stimulation and are more independent of their social world. It does not mean they are shy, un-friendly, or antisocial.',
    'Emotional range': '<strong>This demo cannot diagnose a mental illness</strong>.<br /><br /><strong>Higher</strong>: More likely to have negative emotions or get upset. It could mean they are going through a tough time.<br /><br /><strong>Lower</strong>: More calm and less likely to get upset. It does not mean they are positive, or happy people.',
    Openness: '<strong>Higher</strong>: Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.<br /><br /><strong>Lower</strong>: Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle.'
  },
  values: {
    title: 'Values',
    description: "<strong>Values</strong>, describes motivating factors that influence the author's decision-making. The model includes five dimensions of human values based on Schwartz's work in psychology.",
    Conservation: "Respect, commitment, and acceptance of the customs and ideas that one's culture and/or religion provides.",
    "Self-transcendence": 'Preserving and enhancing the welfare of those with whom one is in frequent personal contact.',
    "Openness to change": 'Emphasize independent action, thought, and feeling, as well as a readiness for new experiences.',
    Hedonism: 'Pleasure or sensuous gratification for oneself.',
    "Self-enhancement": 'Personal success through demonstrating competence according to social standards.'
  },
  needs: {
    title: 'Needs',
    description: "<strong>Needs</strong>, describes at a high level which aspects of a product are likely to resonate with the author of the text. The model includes twelve categories of needs based on Kotler's and Ford's work in marketing.",
    Liberty: 'A need to escape, a desire for new experiences, new things.',
    Ideal: "A desire to satisfy one's idea of perfection in a lifestyle or experience, oftentimes seen as pursuing a sense of community.",
    Love: 'Social contact, whether one-to-one or one-to-many.',
    Practicality: 'A desire for getting the job done, skill, and efficiency.',
    'Self-expression': "A desire to discover and assert one's identity.",
    Stability: 'A need for the sensible, tried and tested, with a good track record and a known history.',
    Structure: 'A need for organization, planning, and things that have a clear purpose.',
    Challenge: "A desire to achieve, succeed, compete, or pursue experiences that test one's abilities.",
    Closeness: 'A need to nurture or be nurtured; a feeling of belonging.',
    Curiosity: 'A need to pursue experiences that foster learning, exploration, and growth.',
    Excitement: 'A need to pursue experiences or lead a lifestyle that arouses enthusiasm and eagerness.',
    Harmony: 'A need to appreciate or please other people, their viewpoints, and feelings.'
  }
}