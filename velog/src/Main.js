import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import styled from "styled-components";
import { getpostAc } from "./redux/modules/post";
import axios from "axios";
import { dateView } from "./shared/time";
import moment from "moment";
import 'moment/locale/ko'
import DefaultProfile from "./styles/DefaultProfile.png"
import { getLikesDB } from "./redux/modules/likes";


const Main = (props) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const list_data = useSelector((state) =>state.post.list)
  console.log(list_data,"리스트?")
  
  React.useEffect(() => {
    dispatch(getpostAc());
  },[]);


  const likeCount = useSelector((state) => state.likes.list)
  

  return (
    <> <Containter>
    {list_data.map((list, id) => {
      dispatch(getLikesDB(list.id))
console.log(likeCount)

            return(
             

        <CardWrap key={list_data.id} onClick={() => {Navigate(`/detail/${list.id}`)}}>
        {/* <CardImg>{list.thumbnail}</CardImg> */}
        <CardImg src={list.imgPath}/>
        
        <Body>
          <Title>
        {list.title}
          </Title>
          <Description>
            {list.contentSummary}
          </Description>
          <DtCmt>
            <span>
              {/* <span>{list.date}</span> */}
              <span>{moment(list.date).fromNow()}</span>
            </span>
          </DtCmt>
        </Body>
        <Footer>
          <FooterLeft>
            <ProIm src={DefaultProfile}></ProIm>
            <Span>by</Span>
            <UserName>{list.username}</UserName>
          </FooterLeft>
          <Like>
            <span>🤍</span>
          </Like>
        </Footer>
      </CardWrap>
     
    ) })}
    </Containter> </>

    );

};

const Containter = styled.body`
  /* background-color: blue;
  width: 100%;
  height: 100%; */
  display: flex;
flex-wrap: wrap;
margin:60px auto ;
width: 90vw;
justify-content: center;
/* 
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */

@media screen and (max-width: 800px) {
  grid-template-columns: 1fr 1fr;};


`;


const DtCmt = styled.div`
  font-size: 0.75rem;
  color: gray;
`;

const CardWrap = styled.div`
  display: flex;
  width: 20rem;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  /* margin: 0 auto; */
  overflow: hidden;
  flex-direction: column;
  justify-items: center;
  margin: 20px 20px 20px 20px;
  float: left;
  &:hover{
    transform: translateY(-2px);
    box-shadow: rgb(0 0 0 / 8%) 0px 12px 20px 0px;

 
} 
@media screen and (max-width: 800px) {
    width:100vw;};

`;
const CardImg = styled.img`
  
  background-color: yellowgreen;
  background-size: cover;
  background-repeat: no-repeat;
  height: 167px;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* margin: 20px; */
  width: 320px;
  height: 140px;
  padding: 16px;
`;
const Title = styled.h4`
  font-size: 16px;
  margin: 0 0 4px;
  font-weight: 900;
  width: 288px;
  height: 43px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
`;
const Description = styled.p`
  margin: 0 0 24px;
  width: 288px;
  height: 73px;
  color: gray;
  font-size: 14px;
  line-height: 1.5;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
const Footer = styled.div`
  padding: 10px 16px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 20px 20px 20px 20px; */
  cursor: pointer;
`;
const FooterLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  color: rgb(134, 142, 150);
  font-size: 0.75rem;
  line-height: 1.5;
  margin-right: 0.25rem;
`;
const UserName = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 1.75rem;
    height: 1.6rem;
  }
  span {
    font-size: 1rem;
  }
`;
const ProIm = styled.img`
width: 25px;
height: 25px;
border-radius: 25px;
border: 1px solid transparent;
margin-right: 10px;
`;



export default Main;