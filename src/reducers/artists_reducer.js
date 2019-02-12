import {artistList} from '../actions/index'
export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_ARTISTS_ALL':
      return {
        ...state,
        artistList: action.payload
      }
      break;
    case 'GET_ARTISTS':
      return {
        ...state,
        artistList: action.payload
    }
    default:
      return state;
  }
}
