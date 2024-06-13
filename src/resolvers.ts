import axios from "axios";

const resolvers = {
  Query: {
    keanuImage: async (
      _: any,
      args: {
        width: number;
        height: number;
        young: boolean;
        grayscale: boolean;
      }
    ) => {
      const { width, height, young, grayscale } = args;
      let url = `https://placekeanu.com/`;

      if (width) {
        url += `${width}/`;
      }
      if (height) {
        url += `${height}/`;
      }
      if (young) {
        url += `y`;
      }
      if (grayscale) {
        url += `g`;
      }
      return url;
    },
  },
};

export default resolvers;
