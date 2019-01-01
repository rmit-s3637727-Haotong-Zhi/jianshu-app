import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper,TopicItem } from '../style'

class Topic extends Component{
  render(){
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {
          topicList.map((item)=>(
              <TopicItem key={item.get('id')}>
              <img 
                className='topic-pic'
                src={item.get('imgUrl')}
                alt='img'
                />
              {item.get('title')}
            </TopicItem>
            )
          )
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => {
  return{
    topicList: state.getIn(['home','topicList'])
  }
}

const mapDispatch = (dispatch) => {
  return{

  }
}


export default connect(mapState, mapDispatch)(Topic)