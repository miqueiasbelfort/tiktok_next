import {
    Container,
    Header,
    PersonContainer,
    Avatar,
    Info,
    Author,
    Description,
    Tag,
    Content,
    Song,
    VideoContainer,
    Video,
    PlayerIcon,
    ActionsContainer,
    Actions,
    Action,
    ButtonContainer
} from "./style"
import Button from "../Button"


function PostCard({post}){
    return(
        <Container>
            <Header>
                <PersonContainer>
                    <Avatar src={post?.author?.avatar}></Avatar>
                    <Info>
                        <Author>
                            {post.author.username}
                            <span>{post?.author?.name}</span>
                        </Author>
                        <Description>{post?.description}</Description>
                        {post.tags.map((tag, index) => (
                            <Tag key={index}>{tag.title}</Tag>
                        ))}
                    </Info>
                </PersonContainer>
                <ButtonContainer>
                    <Button fontSize={14}>Seguir</Button>
                </ButtonContainer>
            </Header>
            <Content>
                <Song>
                    <img src="/images/songIcon.svg" alt="" />
                    <a>{post?.songName}</a>
                </Song>
                <VideoContainer>
                    <Video 
                        src={post?.videoURL}
                        webkit-playsinline="true"
                        playsinline=""
                        loop="true"
                        preload='metadata'
                    ></Video>
                    <ActionsContainer>
                        <PlayerIcon src="/images/playIcon.svg"></PlayerIcon>
                    </ActionsContainer>
                </VideoContainer>
            </Content>
            <Actions>
                <Action>
                    <img src="" alt="" />
                    <a></a>
                </Action>
                <Action>
                    <img src="" alt="" />
                    <a></a>
                </Action>
                <Action>
                    <img src="" alt="" />
                    <a></a>
                </Action>
            </Actions>
        </Container>
    )
}
export default PostCard