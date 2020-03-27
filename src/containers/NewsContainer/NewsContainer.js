import {connect} from 'react-redux'
import News from "../../components/News/News";
import {fetchNews} from "../../actions/newsActions";


const mapStateToProps = (state) => ({
    isLoading: state.news.isLoading,
    news: state.news.newsList
})


const mapDispatchToProps = (dispatch) => ({
    fetchNews: (count) => dispatch(fetchNews(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(News);
