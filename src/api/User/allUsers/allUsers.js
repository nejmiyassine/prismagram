import { prisma } from "../../../prisma";

export default {
  Query: {
    allUsers: () => prisma.user.findMany(),
  },
};
