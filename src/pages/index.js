import Layout from "../components/Layouts"

import Feed from "../components/Feed"
import Suggestions from "../components/Seggestions"

function Index({posts = []}) {
    return (
        <Layout>
            <Feed
                posts={posts}
            ></Feed>
            <Suggestions></Suggestions>
        </Layout>
    )
}
export default Index
