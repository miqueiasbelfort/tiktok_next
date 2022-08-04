import {Container} from "./style"

import PostCard from "../PostCard/index"

function Feed({posts}){
    return (
        <Container>
            {posts.map((post, index) => (
                <PostCard key={index} post={post}>

                </PostCard>
            ))}
        </Container>
    )
}