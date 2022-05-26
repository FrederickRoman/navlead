const requestSample = `POST /navigationGuidance

Body :{
  Traveler: {
    Question: string;
    Target: string;
    Location: {
      x: number,
      y: number,
      z: number,
    }
  },
  ...,
  API_key: string
}`

export default requestSample;