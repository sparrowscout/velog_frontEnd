import axios from "axios";
import { storage } from "../../shared/firebase";
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

//action
const GET_POST = "GET_POST"
const ADD_POST = "ADD_POST"
const CREATE = "CREATE"

const initialState = {
    list: [
      {
        "title": "게시글 제목2",
        "contentSummary": "게시글 요약2",
        "thumbnail": "썸네일 이미지2",
        "createdAt": "작성일자2",
        "id": 1
      }
    ],
  };

  //action creators
  export function getPost (post_list){
    return { type: GET_POST, post_list}
  };
  export function addPost (post){
    return { type: ADD_POST, post}
  };
   export function createPost(post){
    return { type: CREATE, post}
  }

  //middlewares
  export const getpostAc = () => {
    return function (dispatch) {
      axios.get("http://localhost:5001/GetBoardMain")
      .then(response => {
        console.log(response.data,"redux_data");
        // dispatch(getPost([...response.data]));
        dispatch(getPost(response.data));
      })
      .catch(error => {
        console.log("get error", error)
      })
    };
  };

  export const createPostAc = (post) => {
    console.log(post);
    return function (dispatch) {
      axios
        .post("http://3.34.178.13:8080/boards",post)
        .then((response) => {
          console.log(response);
          dispatch(createPost(response.data))
          alert("출간 완료");
          window.location.replace("/");
        })
        .catch((error) => {
          console.log(error);
          alert("다시 시도해주세요")
        });
    };
  };

  //reducer
  export default function reducer(state = initialState, action = {}){
    switch (action.type) {
        case "GET_POST": {
          return { list: action.post_list }
        }
        case "ADD_POST": {
          const new_post_list = [action.post]
            return { list: new_post_list, ...state };
        }
        case "CREATE": {
          const new_post_list = [...state.list, action.post];
          return { list: new_post_list }
        }

        default:
            return state;
    };
  };

