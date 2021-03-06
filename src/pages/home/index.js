import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

class Home extends PureComponent{

  handleScrollTop(){
    window.scrollTo(0,0)
  }

  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img  className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4592/e0033fec6cf2a554d07a08dec30fb5577e862920.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt='banner'/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>BackTop</BackTop> : null}
        
      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.getHomeData();
    this.bindEvents();
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}

const mapState = (state)=>({
  showScroll: state.getIn(['home','showScroll'])
});

const mapDispatch = (dispatch)=>({
  getHomeData(){
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop>100){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
});

export default connect(mapState,mapDispatch)(Home);