import {connect} from 'react-redux'
import News from "../../components/News/News";
import {fetchNews, NewsActionsType} from "../../actions/newsActions";
import {AppStateType} from "../../reducers/rootReducer";
import {Dispatch} from "redux";


const mapStateToProps = (state: AppStateType) => ({
    isLoading: state.news.isLoading,
    news: state.news.newsList
})


const mapDispatchToProps = (dispatch : any) => ({
    fetchNews: (count: number) => dispatch(fetchNews(count))
})


export default connect(mapStateToProps, mapDispatchToProps)(News);
