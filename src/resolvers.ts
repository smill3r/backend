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
      const url = `https://placekeanu.com/${width}/${height}?young=${young}&grayscale=${grayscale}`;
      return url;
    },
  },
};

export default resolvers;
