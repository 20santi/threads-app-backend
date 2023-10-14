const queries = {
    hello: () => `hello`,
}

const mutations = {
    createUser: async (_: any, {}: {}) => {
        return "abcdefghijklmnopqrst"
    }
}

export const resolvers = { queries, mutations };