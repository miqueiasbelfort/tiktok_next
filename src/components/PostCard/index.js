import {useRef, useState} from "react"
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
import Image from "next/image"


function PostCard({post}){

    const videRef = useRef()
    const [running, setRunning] = useState(false)

    const toggleAction = () => {
        if(videRef?.current != null){
            if(!running) videRef.current.play()
            else videRef.current.pause()
            setRunning(!running)
        }
    }

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
                    <Image src="/images/songIcon.svg" alt="" width={50} height={50} />
                    <a>{post?.songName}</a>
                </Song>
                <VideoContainer>
                    <Video 
                        ref={videRef}
                        src={post?.videoURL}
                        webkit-playsinline="true"
                        playsinline=""
                        loop="true"
                        preload='metadata'
                    ></Video>
                    <ActionsContainer>
                        <PlayerIcon onClick={toggleAction} src={running ? "/images/pauseIcon.svg" : "/images/playIcon.svg"}></PlayerIcon>
                    </ActionsContainer>
                </VideoContainer>
            </Content>
            <Actions>
                <Action>
                    <Image src="/images/heartIcon.svg" alt="" width={50} height={50}/>
                    <a>{post?.likes}</a>
                </Action>
                <Action>
                    <Image src="/images/bubbleIcon.svg" alt="" width={50} height={50}/>
                    <a>{post?.comments}</a>
                </Action>
                <Action>
                    <Image src="/images/arrowIcon.svg" alt="" width={50} height={50}/>
                    <a>{post?.replices}</a>
                </Action>
            </Actions>
        </Container>
    )
}
export default PostCard