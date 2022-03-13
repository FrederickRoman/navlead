import ProxyService from "@/services/server/ProxyService";
import Traveler from "@/types/interfaces/Traveler";
import type { NextApiHandler } from "next";

type Data = {
  answer: string;
};

class NavigationController {
  static awake: NextApiHandler<Data> = async (_, res) => {
    try {
      await ProxyService.navGuide.awake();
      res.status(200).end();
    } catch (error) {
      res.status(500).end();
    }
  };
  static navigation_detail: NextApiHandler<Data> = async (req, res) => {
    try {
      const traveler: Traveler = req.body;
      const answer = await ProxyService.navGuide.answer(traveler);
      res.status(200).json({ answer });
    } catch (error) {
      res.status(400).end();
    }
  };
}

class NavigationRouter {
  static route: NextApiHandler<Data> = async (req, res) => {
    switch (req.method) {
      case "GET":
        await NavigationController.awake(req, res);
        break;
      case "POST":
        await NavigationController.navigation_detail(req, res);
        break;
      default:
        res.status(400).end();
        break;
    }
  };
}

export default NavigationRouter.route;
