import {initCommentsList} from '@/api'
import moment from 'moment';

const state = {
  commentsList:[]
}

// readerName:'',
// bookName:'',
// date:'',
// content:'',
// prise:0

const actions = {
    initCommentsList({commit}){
        initCommentsList().then(res=>{
            console.log(res);
        commit('INITCOMMENTSLIST',res.data)
        },err=>console.log(err.message))
    }
}

const mutations = {
    INITCOMMENTSLIST(state,data){
        // 保存评论区数组
        data = data.map(item => ({...item, date: moment.utc(item?.date).format('YYYY-MM-DD HH:mm:ss')}))
        state.commentsList = data.filter(item=>{
            return item.status === 1
        })
    }
}

const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}
