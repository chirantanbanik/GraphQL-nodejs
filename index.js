import express from "express"
import resolvers from "./resolvers.js"
import schema from "./schema.js"
import {graphqlHTTP} from "express-graphql"

const app = express()
const PORT = 8082

app.get("/", (req, res) => {
    res.send("Up and Running")
})

const root = resolvers

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,

}))

app.listen(PORT, () => 
    console.log(`Running on PORT ${PORT}`)
)