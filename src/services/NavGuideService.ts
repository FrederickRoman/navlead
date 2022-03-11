interface NavUserInquiry {
  question: string;
  target: string;
  mapLocation: string;
}

class NavGuideService {
  static async answer(navUserInquiry: NavUserInquiry): Promise<string> {
    const { question, target, mapLocation } = navUserInquiry;
    console.log(question);
    console.log(target);
    console.log(mapLocation);
    return `Q:${question}, T:${target}, M:${mapLocation}`;
  }
}

export default NavGuideService;
